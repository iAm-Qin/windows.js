import {MessageBox} from "windows.js";
import {MB_OK} from "windows.js";

await MessageBox(0, "async mode", "windows.js", MB_OK);
MessageBox.sync(0, "sync mode", "windows.js", MB_OK);
MessageBox.callback(0, "The callback mode the `koffi` supplied is preserved.\n" +
	"But I don't think anyone intends to use it any more, " +
	"because we have the graceful `await` operator to call the `async` function. Amazing!",
	"callback mode", MB_OK,
	(err, dr) => {
		if (err) {
			return console.error(err);
		}
		console.log({dr});
	},
);
