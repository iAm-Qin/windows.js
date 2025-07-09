import fs from "fs";
import path from "path";
import {spawn} from "child_process";

import iconv from "iconv-lite";

//region C# Regex service

const regex = spawn("cs/regexp/bin/Debug/regexp.exe", ["x"], {});
regex.stdout.on("data", (data) => {
	try {
		const result = JSON.parse(data.toString());
		if (result.code) {
			console.error(result);
			regex.reject?.(result);
		}
		regex.resolve?.(result);
	} catch (ex) {
		console.error(ex);
		console.log(iconv.decode(data, "gb2312"));
		regex.reject?.(ex);
	}
});

async function callRegexp ({pattern, inputString, inputStringFilename, outFilename}) {
	fs.writeFileSync("input.json", JSON.stringify({pattern, inputString, inputStringFilename, outFilename}));
	try {
		regex.stdin.write("input.json\r\n");
		await new Promise((resolve, reject) => {
			regex.resolve = resolve;
			regex.reject = reject;
		});
		regex.resolve = null;
		regex.reject = null;

		const {results} = JSON.parse(fs.readFileSync(outFilename).toString());
		return results;
	} catch (ex) {
		return null;
	}
}

//endregion C# Regex service

// region code generators

const codeGenerators = {
	alias: x => `export const ${x.alias} = ${x.name};\n`,
	constant: x => x.typecast
				   ? `export const ${x.name} = typecast(${x.typecast}, ${x.value});\n`
				   : `export const ${x.name} = ${x.value};\n`,
	enum (x) {
		let result = `export const ${x.name} = int;\n`
			+ x.members.map(m => `export const ${m.name} = ${m.value};\n`).join("")
		;
		if (x.pointerName) {
			result += `export const ${x.pointerName} = pointer(${x.name});\n`;
		}
		result += "\n";
		return result;
	},
	struct (struct) {
		let structDefineOpt = "";
		if (struct.align) {
			structDefineOpt = `, {alignment: ${struct.align}}`;
		}
		let result = `export const ${struct.name} = ${struct.type}({\n${genMembers(struct.members)}\n}${structDefineOpt});\n`;
		if (struct.pointerName) {
			result += `export const ${struct.pointerName} = pointer(${struct.name});\n`;
		}
		if (struct.nearPointerName) {
			result += `export const ${struct.nearPointerName} = pointer(${struct.name});\n`;
		}
		if (struct.farPointerName) {
			result += `export const ${struct.farPointerName} = pointer(${struct.name});\n`;
		}

		if (struct.name.endsWith("W")) {
			result += `export const ${struct.name.substr(0, struct.name.length - 1)} = ${struct.name};\n`;
		}
		if (struct.pointerName?.endsWith?.("W")) {
			result += `export const ${struct.pointerName.substr(0, struct.pointerName.length - 1)} = ${struct.pointerName};\n`;
		}
		if (struct.nearPointerName?.endsWith?.("W")) {
			result += `export const ${struct.nearPointerName.substr(0, struct.nearPointerName.length - 1)} = ${struct.nearPointerName};\n`;
		}
		if (struct.farPointerName?.endsWith?.("W")) {
			result += `export const ${struct.farPointerName.substr(0, struct.farPointerName.length - 1)} = ${struct.farPointerName};\n`;
		}
		result += "\n";
		return result;
	},
	callback (x) {
		correctParams(x);
		const maxWidth = countMaxWidth(x);

		let result = (`export const ${x.name} = pointer(koffi.proto("__stdcall", "${x.name}", ${correctPointerType(x.type)} /* ${x.oriType} */, [\n`
			+ x.params
				.map(p =>
					`\t${p.type},${"".padEnd(maxWidth[0] - p.type.length)}`
					+ ` /* ${p.dir.padEnd(maxWidth[1])} ${p.oriType.padEnd(maxWidth[2])} ${p.name.padEnd(maxWidth[3])} */\n`)
				.join("")
			+ `]));\n`);

		if (x.name.endsWith("W")) {
			result += `export const ${x.name.substr(0, x.name.length - 1)} = ${x.name};\n`;
		}
		result += "\n";
		return result;
	},
	function (functions) {
		let functionDeclaresString = "";
		let functionString = functions.map(x => {
			correctParams(x);
			const maxWidth = countMaxWidth(x);

			let result = `export function ${x.name} () {};\n`
				+ `${x.name} = createAutoLoader(lib, "${x.name}", ${correctPointerType(x.type)} /* ${x.oriType} */, [\n`
				+ (x.params.map(p => `\t${p.type},${"".padEnd(maxWidth[0] - p.type.length)}`
					+ ` /* ${p.dir.padEnd(maxWidth[1])} ${p.oriType.padEnd(maxWidth[2])} ${p.name.padEnd(maxWidth[3])} */\n`,
				).join("") || "	/* void */\n")
				+ `], f => ${x.name} = f);\n`;

			// alias
			if (x.name.endsWith("W")) {
				result += `export {${x.name} as ${x.name.slice(0, -1)}};\n`;
			}

			x.declType = x.oriType;
			if (x.declType.match(/[^0-9A-Za-z_]/)) {
				x.declType = `"${x.declType}"`;
			}

			// .d.ts
			functionDeclaresString += `export function ${x.name} (`
				+ x.params.map((p, i) => `${p.name || `param${i}`}: ${p.declType}`).join(", ")
				+ `): ${x.declType};\n`;
			if (x.name.endsWith("W")) {
				functionDeclaresString += `export function ${x.name.slice(0, -1)} (`
					+ x.params.map((p, i) => `${p.name || `param${i}`}: ${p.declType}`).join(", ")
					+ `): ${x.declType};\n`;
			}

			return result;
		}).join("\n");

		return {functionString, functionDeclaresString};
	},
};

let indent = 0;

function genMembers (members) {
	// step 1，调整指针、数组、位域，去除 const 等字符，规范化类型名称
	members.forEach(member => {
		member.oriName = member.name;
		member.oriType = member.type;

		if (["struct", "union"].includes(member.type)) {
			member.name = member.name.replace("DUMMYUNIONNAME", "u").replace("DUMMYSTRUCTNAME", "s");
			return;
		}

		let {name, type} = member;

		while (name.startsWith("*")) {	// 名字以星号(指针)开头，将星号放到类型中去。
			type += "*";
			name = name.substr(1);
		}

		member.oriName = name;
		member.oriType = type;

		type = type
			// .replace(/\*/, " *")
			.replace(/\s+/g, " ")
			.replace(/const/i, "")
			.replace(/struct/, "")
			.replace(/union/, "")
			.trim();

		type = correctPointerType(type);

		if (member.arraySize) {
			type = correctArrayType(type, member);	// step 3 也有
		} else if (member.bits) {
			type = `bitfield(${type}, ${member.bits})`;
		}

		member.name = name;
		member.type = type;
	});

	// step 2，计算宽度
	const maxWidth = {name: 0, type: 0, oriType: 0};
	members.forEach(m => {
		maxWidth.name = Math.max(maxWidth.name, m.name.length);
		maxWidth.type = Math.max(maxWidth.type, m.type.length);
		maxWidth.oriType = Math.max(maxWidth.oriType, m.oriType.length);
	});

	// step 3，生成结果
	return members.map(member => {
		indent++;
		let {name, type} = member;

		const indents = "	".repeat(indent);

		if (["struct", "union"].includes(member.type)) {
			type = `${type}({\n${genMembers(member.members)}\n${indents}})`;

			if (member.arraySize) {	// step 1 未处理的，需要在这里处理
				type = correctArrayType(type, member);
			}
		}

		indent--;

		return (`${indents}${name.padEnd(maxWidth.name)} : ${type},${"".padEnd(maxWidth.type - type.length)}`
			+ ` // ${member.oriType.padEnd(maxWidth.oriType)}`
			+ ` ${member.comment}`
		).replace(/\/\/$/, "").trimEnd();
	}).join("\n");
}

function countMaxWidth (x) {
	const maxWidth = [0, 0, 0, 0];
	x.params.forEach(p => {
		maxWidth[0] = Math.max(maxWidth[0], p.type.length);
		maxWidth[1] = Math.max(maxWidth[1], p.dir.length);
		maxWidth[2] = Math.max(maxWidth[2], p.oriType.length);
		maxWidth[3] = Math.max(maxWidth[3], p.name.length);
	});
	return maxWidth;
}

function correctParams (x) {
	x.params.forEach(p => {
		p.declType = p.type;	// 用于 .d.ts 文件

		let changed = false;
		let t;
		t = correctPointerType(p.type);
		if (t !== p.type) {
			changed = true;
		}
		t = correctMisc(t);
		if (t !== p.type) {
			changed = true;
		}
		p.type = t;

		p.type = correctInOut(p.type, p.dir);

		p.type = p.type
			.replace(/\(\s+/g, "(")
			.replace(/\s+\)/g, ")");

		if (changed) {
			p.declType = `"${p.declType}"`;
		}
	});
}

function correctArrayType (type, member) {
	let jsArrayType = "";
	if (["char", "wchar"].includes(type.toLowerCase())) {
		jsArrayType = `, "String"`;
	}
	type = `array(${type}, ${member.arraySize}${jsArrayType})`;
	if (member.arraySize2) {
		type = `array(${type}, ${member.arraySize2}${jsArrayType})`;
	}
	return type;
}

function correctPointerType (type) {
	while (-1 < type.indexOf("*")) {	// 参数类型带星号，算做指针
		type = `pointer(${type.replace("*", "").trim()})`;
	}
	type = type
		.replace(/\(\s+/g, "(")
		.replace(/\s+\)/g, ")")
		.replace(/(?<!koffi\.types\.)void/, "koffi.types.void");

	return type;
}

function correctInOut (type, dir) {
	if (dir.indexOf("out") >= 0 && dir.indexOf("in") >= 0) {
		type = `inout(${type})`;
	} else if (dir.indexOf("out") >= 0) {
		type = `out(${type})`;
	}
	return type;
}

function correctMisc (type) {
	return type
		.replace(/\s+FAR\)/, ")")
		.replace(/volatile/, "")
		.replace(/struct /, "")
		;
}

// endregion

(async function () {
	for (const filepath of [
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\shared\\basetsd.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\shared\\minwindef.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\shared\\windef.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\shared\\winerror.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\Winnt.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\WinUser.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\minwinbase.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\WinBase.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\handleapi.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\libloaderapi.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\processthreadsapi.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\wincontypes.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\consoleapi3.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\processenv.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\memoryapi.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\synchapi.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\wingdi.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\winspool.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\shellapi.h`,
		`C:\\Program Files (x86)\\Windows Kits\\10\\Include\\10.0.19041.0\\um\\commdlg.h`,
	]) {
		console.log(filepath);
		const {
			aliases, constants, enums, structs, callbacks, functions,
		} = await processOne({cDeclCode: fs.readFileSync(filepath).toString("utf-8"), filepath});

		const basePath = path.join("generated", path.basename(filepath));
		fs.mkdirSync(basePath, {recursive: true});

		// aliases
		if (aliases.length) {
			const aliasString = aliases.map(codeGenerators.alias).join("");
			fs.writeFileSync(path.join(basePath, "aliases.js"), aliasString);
		}

		// constants
		if (constants.length) {
			const constantString = constants.map(codeGenerators.constant).join("");
			fs.writeFileSync(path.join(basePath, "constants.js"), constantString);
		}

		// enums
		if (enums.length) {
			const enumString = enums.map(codeGenerators.enum).join("");
			fs.writeFileSync(path.join(basePath, "enums.js"), enumString);
		}

		// structs
		if (structs.length) {
			const structsString =
				"// @formatter: " + "off\n\n"
				+ structs.map(codeGenerators.struct).join("");
			fs.writeFileSync(path.join(basePath, "structs.js"), structsString);
		}

		// callbacks
		if (callbacks.length) {
			const callbackString = callbacks.map(codeGenerators.callback).join("");
			fs.writeFileSync(path.join(basePath, "callbacks.js"), callbackString);
		}

		// functions
		if (functions.length) {
			let {functionDeclaresString, functionString} = codeGenerators.function(functions);

			fs.writeFileSync(path.join(basePath, "functions.js"), functionString);
			fs.writeFileSync(path.join(basePath, "functions.d.ts"), functionDeclaresString);
		}

		// region single file

		const total = [].concat(
			aliases.map(x => ({type: "alias", obj: x})),
			constants.map(x => ({type: "constant", obj: x})),
			enums.map(x => ({type: "enum", obj: x})),
			structs.map(x => ({type: "struct", obj: x})),
			callbacks.map(x => ({type: "callback", obj: x})),
		).sort((a, b) => a.obj.offset > b.obj.offset ? 1 : a.obj.offset < b.obj.offset ? -1 : 0);
		const totalString =
			"// @formatter: " + "off\n\n"
			+ total.map(x => codeGenerators[x.type](x.obj)).join("");
		fs.writeFileSync(path.join(basePath, `${path.basename(basePath, ".h")}.js`), totalString);

		// endregion
	}

	regex.stdin.write("exit\r\n");
})();

async function processOne (opt) {
	const cCode = opt.cDeclCode
		.replace(/(?:\/\/.*$)|(?:\/\*(.|[\r\n])*?\*\/)/gm, "")    // 去掉注释
		.replace(/_Out_writes_\([^)]*\)/g, "")                // 去掉这些宏
		.replace(/_Out_writes_opt_\([^)]*\)/g, "")
		.replace(/_Out_writes_to_opt_\([^)]*\)/g, "")
		.replace(/_Out_writes_bytes_\([^)]*\)/g, "")
		.replace(/_Out_writes_bytes_to_\([^)]*\)/g, "")
		.replace(/_Out_writes_bytes_opt_\([^)]*\)/g, "")
		.replace(/_In_reads_\([^)]*\)/g, "")
		.replace(/_In_reads_from_opt_\([^)]*\)/g, "")
		.replace(/_In_reads_bytes_\([^)]*\)/g, "")
		.replace(/_In_reads_bytes_opt_\([^)]*\)/g, "")
		.replace(/_Field_size_\([^)]*\)/g, "")
		.replace(/_Field_size_opt_\([^)]*\)/g, "")
		.replace(/_Field_size_bytes_opt_\([^)]*\)/g, "")
		.replace(/_Field_z_/g, "")
		.replace(/_Function_class_\([^)]*\)/g, "")
		.replace(/_Frees_ptr_/g, "")
		.replace(/ptr_invalid_/g, "")
		.replace(/_Post_|_Null_terminated_|_NullNull_terminated_|__drv_aliasesMem|_Outptr_result_z_|_COM_Outptr_/g, "")
		.replace(/#if(?:\\\r?\n|.)+$/gm, "")
		.replace(/#endif/g, "")
	;

	const dataTypes = opt.dataTypes || {
		"__int16": "int16",		// ffi 不认识 __intXX 之类的
		"__int16 *": "int16*",
		"__int32": "int32",
		"__int32 *": "int32*",
		"__int64": "int64",
		"__int64 *": "int64*",
		"__int128": "int128",
		"__int128 *": "int128*",
		"unsigned __int16": "uint16",
		"unsigned __int16 *": "uint16*",
		"unsigned __int32": "uint32",
		"unsigned __int32 *": "uint32*",
		"unsigned __int64": "uint64",
		"unsigned __int64 *": "uint64*",
		"unsigned __int128": "uint128",
		"unsigned __int128 *": "uint128*",

		"unsigned short": "uint16",	// ffi 不认识 unsigned xxx
		"unsigned short *": "uint16*",
		"unsigned long": "uint32",
		"unsigned long *": "uint32*",
		"unsigned int": "uint32",
		"unsigned int *": "uint32*",
		"unsigned char": "uchar",
		"unsigned char *": "uchar*",
	};

	const dirMap = {
		"_In_": "in", "IN": "in", "_In_opt_": "in opt",
		"_Inout_": "in out", "_Inout_opt_": "in out opt",
		"_Out_": "out", "OUT": "out", "_Out_opt_": "out opt",
		"_Reserved_": "reserved",
	};

	function replacerGen (x) {
		return (match, oriType, name, paramsString, offset, input) => {
			if (!oriType) {
				oriType = "HRESULT";	// shellapi.h
			}
			oriType = oriType.trim();
			let type = (dataTypes[oriType] || oriType);

			if ("void" === type) {
				type = "koffi.types.void";
			}

			const parameters = paramsString
				.split(",");
			if (1 === parameters.length && "" === parameters[0]) {	// 空串拆分，数组有1项，为空串
				parameters.length = 0;	// 没有参数
			}
			const params = [];
			for (let i = 0; i < parameters.length; i++) {
				parameters[i] = parameters[i].replace("*", "* ");	// 星号后加个空格，方便拆分
				const ss = parameters[i].trim().split(" ");

				let dir = "";
				if (["IN", "OUT", "_In_", "_In_opt_", "_Inout_", "_Inout_opt_", "_Out_", "_Out_opt_", "_Reserved_"].includes(ss[0])) {
					dir = ss.shift();	// 去掉这些字符
					dir = dirMap[dir] || dir;	// 参数输入输出方向
				}
				while ([
					// winuser.h
					"_Pre_maybenull_", "valid_", "_Post_valid_", "_Printf_format_string_",

					// winbase.h
					"_Frees_ptr_opt_", "_Pre_", "_NullNull_terminated_",
					"_Outptr_", "_Outptr_opt_", "__callback", "_Outptr_opt_result_maybenull_",
				].includes(ss[0])) {
					ss.shift();	// 去掉这些字符
				}

				let paramName = ss.pop();			// 最后一项作为参数名
				if (0 === ss.length) {	// 没有参数名
					ss.push(paramName);
					paramName = "";
				}
				let oriParamType = ss.join(" ")   // 其它作为类型
					.replace(/\s+/g, " ")
					.trim();

				while (paramName.startsWith("*")) {	// 名字以星号(指针)开头，将星号放到类型中去。
					oriParamType += "*";
					paramName = paramName.substr(1);
				}

				let paramType = oriParamType;
				paramType = paramType
					// .replace(/\*/, " *")
					.replace(/\s+/g, " ")
					.replace(/const/i, "")
					.trim();
				paramType = dataTypes[paramType] || paramType;

				params.push({name: paramName, type: paramType, oriType: oriParamType, dir});
			}
			if (1 === params.length && ["VOID", "void"].includes(params[0].type)) {	// 只有一个 void 参数，算为没有参数
				params.length = 0;
			}

			x.push({offset, name, type, oriType, params});
		};
	}

	// 回调
	const callbacks = [];
	const callbackRe = /typedef\s+(?<type>[0-9a-zA-Z_]+)\s*(?:WINAPI|NTAPI|APIENTRY)?\s+\([0-9a-zA-Z_]*\s*\*\s*(?<name>[0-9a-zA-Z_]+)\s*\)\s*\(([^)]*)\)/gim;
	cCode.replace(callbackRe, replacerGen(callbacks));

	// 函数
	const functions = [];
	const re = /(?<!typedef)\s*([0-9a-zA-Z_]+)\s+(?:WINAPI|NTAPI|APIENTRY)\s+([0-9a-zA-Z_]*)\s*\(([^)]*)\);/gim;
	cCode.replace(re, replacerGen(functions));

	// 函数(shellapi.h)
	cCode.replace(
		/\s(?:SHSTDAPI|SHDOCAPI)(?:_\((?<type>[0-9a-zA-Z_]+\s*\*?)\))?\s+(?<name>[0-9a-zA-Z_]*)\s*\((?<paramsString>[^)]*)\);/gim,
		replacerGen(functions));

	// 别名
	const aliases = [];
	const aliasRe = /typedef\s+(?:(?:unsigned|CONST|const)\s+)?(?!struct|union|enum)(?<name>[0-9a-zA-Z_]+\s*\*?)\s+(?<aliasListString>[^();]+);/g;
	cCode.replace(aliasRe, function (match, name, aliasListString, offset) {
		if (name.endsWith("A")) {	// typedef xxxA xxx  这些不用，用 W 的
			return;
		}

		const aliasList = aliasListString.trim()
			.split(/\s*,\s*/g)
			.filter(x => x);

		const name1 = name;
		aliasList.forEach(alias => {
			name = name1;

			// 类似于这种：typedef MENUITEMINFOW CONST FAR *LPCMENUITEMINFOW;
			alias = alias.replace(/(?:(?:FAR|NEAR|CONST|const|UNALIGNED)\s*)+\*/, "*");

			while (alias.startsWith("*")) {	// 名字以星号(指针)开头，将星号放到类型中去。
				name += "*";
				alias = alias.substr(1);
			}

			while (-1 < name.indexOf("*")) {	// 带星号，算做指针
				name = `pointer(${name.replace("*", "").trim()})`;
			}

			const p = alias.indexOf("[");
			if (-1 < p) {	// 内嵌数组
				const arraySize = alias.substring(p + 1, alias.length - 1);
				alias = alias.substr(0, p);
				name = `array(${name}, ${arraySize})`;
			}

			aliases.push({offset, name, alias});
		});
	});

	// 常数
	const constants = [];
	cCode.replace(/#define\s+([0-9a-zA-Z_]+)\s+((?:\\\r?\n|.)+)/gm, function (match, name, value, offset) {
		value = value.trim();
		if (value.endsWith("W") || value.endsWith("A")) {	// #define xxx xxxW  这些不是常量
			return;
		}
		value = value
			.replace(/\\\r?\n/g, "\n")                        // 去掉续行符
			// .replace(/sizeof\s*(\([^)]+\))/g, "$1.size")   // koffi 无需处理
			.replace(/(-?\d+)(?:ULL|UL|U|LL|L)/i, "$1")       // 0L 之类的，去掉后缀
			.replace(/(0x[\dA-Fa-f]+)(?:ULL|UL|U|LL|L)/, "$1")// 0x00000000L 之类的，去掉后缀
			// .replace(/\((0x[\dA-Fa-f]+)[lLuU]\)$/, "($1)")    // (0x00000000L) 之类的，去掉后缀

			// .replace(/((?<!0x)\d+)[fFdD]$/, "$1")          // 0.001f 之类的，去掉后缀	// todo 会匹配到 hex
			.replace(/(\.\d+)[fFdD]/, "$1")                   // todo 1f 之类的实现不了

			.replace(/([\dA-Fa-f]+)u?i64$/, "$1n")            // 1ui64 之类的，转为 BigInt
		;

		// 提取强制转换的类型
		let typecast;
		{
			const regExp = /(?<![\w]+\s*)\((\s*[A-Za-z]+\s*)\)\s*(-?\w+)/;
			const match = value.match(regExp);
			if (match) {
				typecast = match[1].trim();
				if ("void" === typecast) {
					typecast = null;
				}
				value = value.replace(regExp, "$2").trim();
			}
		}

		// if (eval(value) > Number.MAX_SAFE_INTEGER) {	// todo
		// 	value = eval(`BigInt(${value})`) + "n";
		// }

		constants.push({offset, name, value, typecast});
	});

	// 枚举
	const enums = [];
	const enumPattern = String.raw`typedef\s+enum\s+(?<tagName>[0-9a-zA-Z_]+)?\s*\{\s*`
		+ String.raw`(?<memberString>[^}]+)`
		+ String.raw`}\s*(?<name>[0-9a-zA-Z_]+)`
		+ String.raw`(?:,\s*[NEARFCOST]*\s*\*\s*(?<pointerName>[0-9a-zA-Z_]+))?`
	;
	cCode.replace(new RegExp(enumPattern, "g"), function (match, tagName, memberString, name, pointerName, offset) {
		// console.log(match, name, paramList);
		const members = memberString.split(/\s*,\s*/g)
			.filter(x => x)
			.map(x => x.split(/\s*=\s*/))
			.map(x => ({name: x[0].trim(), value: x[1]?.trim()}));
		let st = members[0].value ?? 0;
		members.forEach(m => {
			if (null == m.value) {
				m.value = st++;
			} else {
				st = +m.value + 1;
			}
		});
		// console.log(members);
		enums.push({offset, name, members, pointerName});
	});

	//region nestedStructs

	const nestedStructPattern = String.raw`typedef\s+(struct|union)\s+(?:DECLSPEC_ALIGN\((?<declspecAlign>[0-9]+)\)\s+)?(?:DECLSPEC_NOINITALL\s+)?(?<tagName>[0-9a-zA-Z_]+)?\s*\{\s*`
		+ String.raw`(?<membersString>[^{}]*(?:(?:(?<brace>\{)[^{}]*)+(?:(?<-brace>\})[^{}]*)+)*(?(brace)(?!)))`
		+ String.raw`}\s*(?<name>[0-9a-zA-Z_]+)`
		+ String.raw`(?:,\s*[NEARFCOST]*\s*\*\s*(?<pointerName>[0-9a-zA-Z_]+))?`
		+ String.raw`(?:,\s*[NEARFCOST]*\s*\*\s*(?<nearPointerName>[0-9a-zA-Z_]+))?`
		+ String.raw`(?:,\s*[NEARFCOST]*\s*\*\s*(?<farPointerName>[0-9a-zA-Z_]+))?`;

	const memberPattern = String.raw`(union|struct)\s+(?<tagName>[0-9a-zA-Z_]+)?\s*\{\s*`
		+ String.raw`(?<membersString>[^{}]*(?:(?:(?<brace>\{)[^{}]*)+(?:(?<-brace>\})[^{}]*)+)*(?(brace)(?!)))`
		+ String.raw`}\s*(?<name>[0-9a-zA-Z_]+)(?:\s*\[(?<arraySize>[^\]]+)\])?(?:\s*\[(?<arraySize2>[^\]]+)\])?\s*;`    // 最多识别 2 维数组
		+ String.raw`|`
		+ String.raw`(?<type>[0-9a-zA-Z_\s]+\**)\s+(?<name>\**[0-9a-zA-Z_]+)`
		+ String.raw`(?:`
		+ String.raw`\s*\[(?<arraySize>[^\]]+)\]\s*(?:\[(?<arraySize2>[^\]]+)\]\s*)?`    // 最多识别 2 维数组
		+ String.raw`|`
		+ String.raw`\s*\:\s*(?<bits>[0-9]+)`    // 位字段
		+ String.raw`)?\s*;`
		+ String.raw`[\t ]*(?<comment>//[^\r\n]*)?`;
	const outFilename = path.join("output.json");

	const nestedStructs = await callRegexp({pattern: nestedStructPattern, inputStringFilename: opt.filepath, outFilename});
	const nestedStructs2 = [];
	for (const {groups, index} of nestedStructs) {
		nestedStructs2.push({
			offset: index,
			type: groups["1"],	// struct/union
			align: groups.declspecAlign,
			tagName: groups.tagName,
			name: groups.name,
			members: await findMembers(groups.membersString),
			pointerName: groups.pointerName,
			nearPointerName: groups.nearPointerName,
			farPointerName: groups.farPointerName,
		});
	}

	async function findMembers (membersString) {
		const matches = await callRegexp({pattern: memberPattern, inputString: membersString, outFilename});
		const members = [];
		for (let j = 0; j < matches.length; j++) {
			const match = matches[j];
			let type = "";
			let m = null;
			if (["struct", "union"].includes(match.groups["1"])) {
				type = match.groups["1"].trim();
				m = await findMembers(match.groups.membersString.trim());
			} else {
				type = match.groups.type.trim();
			}
			members.push({
				type,
				name: match.groups.name,
				members: m,
				arraySize: match.groups.arraySize.trim(),
				arraySize2: match.groups.arraySize2.trim(),
				bits: match.groups.bits.trim(),
				comment: match.groups.comment.trim(),
			});
		}

		return members;
	}

	//endregion nestedStruct

	console.log({
		aliasCount: aliases.length,
		constantCount: constants.length,
		enumCount: enums.length,
		structCount: nestedStructs2.length,
		callbackCount: callbacks.length,
		functionCount: functions.length,
	});

	return {
		aliases,
		constants,
		enums,
		structs: nestedStructs2,
		callbacks,
		functions,
	};
}
