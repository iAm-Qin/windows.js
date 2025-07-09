import resolve from "@rollup/plugin-node-resolve";

import defConfig from "windows.js/treeshake/rollup.config";

// change the default config here, or at the `Object.assign()`.
defConfig.treeshake.moduleSideEffects = false;

export default ["hello.js", "createWindow.js"].map(file => Object.assign({}, defConfig, {
	input: file,
	output: {
		dir: "dist",
		sourcemap: true,
		sourcemapExcludeSources: true,
	},
	plugins: [
		resolve({
			// 自定义模块解析路径
			modulePaths: [
				"c:/node_modules", // 全局模块路径
			],
			// 其他配置
			preferBuiltins: true, // 优先使用Node核心模块
			extensions: [".js", ".json"], // 解析的文件扩展名
		}),
	],
}));

// rollup -c rollup.config.js
