using Newtonsoft.Json.Linq;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace regexp {
	class Program {
		static int Main(string[] args) {
			//args = new[] { @"{ pattern: ""a"", multiline: null, inputString: ""abac"", outFilename: ""output.json""}" };  // for debug

			if (args.Length < 1) {
				Console.WriteLine(JObject.FromObject(new {
					code = "inputFilenameNotSpecified",
					message = "通过参数传一个 .json 文件名过来。文件内容大致如下：(inputString 和 inputStringFilename 二选一，inputString 优先。)",
					fileContent = new {
						pattern = "",
						multiline = true,
						singleline = true,
						ignoreCase = true,
						ignoreWhitespace = true,
						inputString = "",
						inputStringFilename = "",
						outFilename = "",
					},
					usage = new[] {
						"regexp.exe <x|filename>",
						"    x: 连续模式，以<命令-应答>的方式运行。",
						"        命令：输入具体的文件名(文件内容为 `fileContent`)，或者 exit 结束程序。",
						"        应答：JSON。",
						"    filename: 单次模式，输入具体的文件名(文件内容为 `fileContent`)。",
					}
				}).ToString());
				return 1;
			}

			if ("x" == args[0]) {   // 连续模式
				do {
					var input = Console.ReadLine();
					if ("exit" == input) {
						return 0;
					}
					@do(new[] { input });
				} while (true);
			}

			// 单次模式
			return @do(args);
		}

		private static int @do(string[] args) {
			try {
				var filename = args[0];

				if (!File.Exists(filename)) {
					Console.WriteLine(JObject.FromObject(new {
						code = "fileNotFound",
						message = "你传了个啥文件名，找都找不到。",
					}).ToString());
					return 1;
				}

				var str = File.ReadAllText(filename);

				JObject input;
				try {
					input = JObject.Parse(str);
				} catch (Exception) {
					Console.WriteLine(JObject.FromObject(new {
						code = "malformedJson",
						message = "JSON 格式错误。",
					}).ToString());
					return 1;
				}

				var inputString = input["inputString"]?.ToString();
				string inputStringFilename = input["inputStringFilename"]?.ToString();
				string outFilename = input["outFilename"]?.ToString();

				if (null == outFilename) {
					Console.WriteLine(JObject.FromObject(new {
						code = "outFilenameNotSpecified",
						message = "未指定输出文件名。",
					}).ToString());
					return 1;
				}

				if (null == inputString) {
					if (!File.Exists(inputStringFilename)) {
						Console.WriteLine(JObject.FromObject(new {
							code = "inputStringEmpty",
							message = "输入串为空(inputString 和 inputStringFilename 至少指定一个(str 优先))。",
						}).ToString());
						return 1;
					}
					inputString = File.ReadAllText(inputStringFilename);
				}

				RegexOptions options = RegexOptions.None;
				if (input["multiline"].asBoolean()) {
					options |= RegexOptions.Multiline;
				}
				if (input["singleline"].asBoolean()) {
					options |= RegexOptions.Singleline;
				}
				if (input["ignoreCase"].asBoolean()) {
					options |= RegexOptions.IgnoreCase;
				}
				if (input["ignoreWhitespace"].asBoolean()) {
					options |= RegexOptions.IgnorePatternWhitespace;
				}
				var re = new Regex(input["pattern"].ToString(), options);

				var results = new List<dynamic>();
				var matches = re.Matches(inputString);
				for (int i = 0; i < matches.Count; i++) {
					var match = matches[i];
					JObject groups = new JObject();
					for (int j = 0; j < match.Groups.Count; j++) {
						var g = match.Groups[j];
						groups[g.Name] = g.Value;
					}
					results.Add(new {
						index = match.Index,
						length = match.Length,
						value = match.Value,
						groups,
					});
				}

				JObject json = JObject.FromObject(new { results });
				File.WriteAllText(outFilename, json.ToString());

				Console.WriteLine(JObject.FromObject(new {
					outFilename,
				}).ToString());
				return 0;
			} catch (Exception ex) {
				Console.WriteLine(JObject.FromObject(new {
					code = "exception",
					message = ex.Message,
					stack = ex.StackTrace,
				}).ToString());
				return 2;
			}
		}
	}
}

public static class JTokenExt {

	public static Boolean asBoolean(this JToken jToken) {
		if (null == jToken) {
			return false;
		}
		switch (jToken.Type) {
			case JTokenType.None:
				return false;
			case JTokenType.Object:
			case JTokenType.Array:
			case JTokenType.Constructor:
			case JTokenType.Property:
				return true;
			case JTokenType.Comment:
				return true;
			case JTokenType.Integer:
			case JTokenType.Float:
				return 0.0 != (double)jToken;
			case JTokenType.Date:
				return true;
			case JTokenType.String:
				return ((string)jToken).Length > 0;
			case JTokenType.Boolean:
				return (bool)jToken;
			case JTokenType.Null:
			case JTokenType.Undefined:
				return false;
			case JTokenType.Raw:
			case JTokenType.Bytes:
			case JTokenType.Guid:
			case JTokenType.Uri:
			case JTokenType.TimeSpan:
				return true;
		}
		return (bool?)jToken ?? false;
	}

}