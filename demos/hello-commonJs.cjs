const fs = require("fs");
const path = require("path");

(async function () {
	console.log(__filename);

	const {MessageBox, MB_OK} = await import(`windows.js`);

	await MessageBox(0, "Calling the Windows SDK in a CommonJS file.\n", "", MB_OK);
})();
