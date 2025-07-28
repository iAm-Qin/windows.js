import {MessageBox} from "windows.js";
import {MB_OK} from "windows.js";
import {hellos} from "windows.js/demos/common.js";

// MessageBox 是 MessageBoxW 的别名。
// MessageBox is the alias for MessageBoxW.
await MessageBox(0, "大家好，我是来自 node.js 星球的 Windows SDK，这是我对 MessageBox 函数的调用。\n" +
	"Hello! I'm being rendered by the MessageBox API of the Windows SDK of Node.js\n" + hellos, "hello，您好!", MB_OK);
