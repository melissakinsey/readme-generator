const inquirer = require("inquirer");
const fs = require("fs");
inquirer
	.prompt([
		{
			type: "input",
			name: "school",
			message: "What school do you go to?",
		},
	])
	.then(function (response) {
		data = `
     # Hello!
     `;
		fs.writeFile("README.md", data, function (error) {
			if (error) {
				console.error(error);
			} else {
				console.log("no error");
			}
		});
	});
