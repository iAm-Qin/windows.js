using Newtonsoft.Json.Linq;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace regexp {

	class Program {

		static void Main(string[] args) {
			try {
				//if (args.Length < 1) {
				//	Console.WriteLine(JObject.FromObject(new {
				//		code = "filenameNotSpecified",
				//	}).ToString());
				//	return;
				//}
				//var filename = args[1];

				//if (!File.Exists(filename)) {
				//	Console.WriteLine(JObject.FromObject(new {
				//		code = "filenameNotFound",
				//	}).ToString());
				//	return;
				//}
				var filename = @"C:\Program Files (x86)\Windows Kits\10\Include\10.0.19041.0\um\Winnt.h";

				var str = File.ReadAllText(filename);

				const string structPattern = @"typedef\s+(struct|union)\s+(?:DECLSPEC_ALIGN\((?<declspecAlign>[0-9]+)\)\s+)?(?:DECLSPEC_NOINITALL\s+)?(?<tagName>[0-9a-zA-Z_]+)?\s*\{\s*"
					+ @"(?<membersString>[^{}]*(?:(?:(?<brace>\{)[^{}]*)+(?:(?<-brace>\})[^{}]*)+)*(?(brace)(?!)))"
					+ @"}\s*(?<name>[0-9a-zA-Z_]+)"
					+ @"(?:,\s*[NEARFCOST]*\s*\*\s*(?<pointerName>[0-9a-zA-Z_]+))?"
					+ @"(?:,\s*[NEARFCOST]*\s*\*\s*(?<nearPointerName>[0-9a-zA-Z_]+))?"
					+ @"(?:,\s*[NEARFCOST]*\s*\*\s*(?<farPointerName>[0-9a-zA-Z_]+))?";

				var structs = new List<dynamic>();
				var re = new Regex(structPattern);
				var matches = re.Matches(str);
				for (int i = 0; i < matches.Count; i++) {
					var match = matches[i];
					List<dynamic> members = findMembers(match.Groups["membersString"].Value.Trim());
					structs.Add(new {
						type = match.Groups[1].Value,
						align = match.Groups["declspecAlign"].Value,
						tagName = match.Groups["tagName"].Value,
						name = match.Groups["name"].Value,
						members,
						pointerName = match.Groups["pointerName"].Value,
						nearPointerName = match.Groups["nearPointerName"].Value,
						farPointerName = match.Groups["farPointerName"].Value,
					});
				}

				JObject json = JObject.FromObject(new { structs });
				var outFilename = Path.GetFullPath(@"structs.json");

				File.WriteAllText(outFilename, json.ToString());
				Console.WriteLine(JObject.FromObject(new {
					outFilename,
				}).ToString());
			} catch (Exception ex) {
				Console.WriteLine(JObject.FromObject(new {
					code = "exception",
					message = ex.Message,
				}).ToString());
				return;
			}
		}

		private static List<dynamic> findMembers(String membersString) {
			const string memberPattern = @"(union|struct)\s+(?<tagName>[0-9a-zA-Z_]+)?\s*\{\s*"
				+ @"(?<membersString>[^{}]*(?:(?:(?<brace>\{)[^{}]*)+(?:(?<-brace>\})[^{}]*)+)*(?(brace)(?!)))"
				+ @"}\s*(?<name>[0-9a-zA-Z_]+)(?:\s*\[(?<arraySize>[^\]]+)\])?(?:\s*\[(?<arraySize2>[^\]]+)\])?\s*;"    // 最多识别 2 维数组
				+ @"|"
				+ @"(?<type>[0-9a-zA-Z_\s]+\**)\s+(?<name>\**[0-9a-zA-Z_]+)"
				+ @"(?:"
					+ @"\s*\[(?<arraySize>[^\]]+)\]\s*(?:\[(?<arraySize2>[^\]]+)\]\s*)?"    // 最多识别 2 维数组
					+ @"|"
					+ @"\s*\:\s*(?<bits>[0-9]+)"    // 位字段
				+ @")?\s*;"
				+ @"[\t ]*(?<comment>//[^\r\n]*)?";

			var matches1 = new Regex(memberPattern).Matches(membersString);
			var members = new List<dynamic>();
			for (int j = 0; j < matches1.Count; j++) {
				var match1 = matches1[j];
				var type = "";
				var m = (List<dynamic>)null;
				if (new [] { "struct", "union" }.Contains(match1.Groups[1].Value)) {
					type = match1.Groups[1].Value.Trim();
					m = findMembers(match1.Groups["membersString"].Value.Trim());
				} else {
					type = match1.Groups["type"].Value.Trim();
				}
				members.Add(new {
					type,
					name = match1.Groups["name"].Value,
					members = m,
					arraySize = match1.Groups["arraySize"].Value.Trim(),
					arraySize2 = match1.Groups["arraySize2"].Value.Trim(),
					bits = match1.Groups["bits"].Value.Trim(),
					comment = match1.Groups["comment"].Value.Trim(),
				});
			}

			return members;
		}

	}
}
