const inquirer = require("inquirer");
const fs = require("fs");
inquirer
	.prompt([
		{
			type: "input",
			name: "#INTRODUCTION",
			message: "What is the goal of your project?",
		},
		{
			type: "input",
			name: "##Project Repo [Link](https://github.com/melissakinsey/loremipsum)",
			message: "What is the URL of the project repo?",
		},
		{
			type: "input",
			name: "##GitHub Pages [Link](https://melissakinsey.github.io/portfolio/index.html)",
			message: "What is the URL of the project in GitHub Pages?",
		},
		{
			type: "input",
			name: "##Screencast [Link](https://loremipsum)",
			message: "What is the URL of the screencast demo?",
		},
		{
			type: "input",
			name: "#USER STORY",
			message: "What is your user story (for example, *AS A* [type of user] *I WANT TO* [perform this task] *SO I CAN* [accomplish this goal])?",
		},
		{
			type: "input",
			name: "#DESCRIPTION",
			message: "How would you describe your project?",
		},
		{
			type: "input",
			name: "#FEATURES",
			message: "What are the features of the app?",
		},
		{
			type: "input",
			name: "#TECHNICAL SPECS",
			message: "What technical specs does your project meet (for example, tools and frameworks used or APIs called)?",
		},
		{
			type: "input",
			name: "CONTRIBUTORS",
			message: "Was this a group project (if so, list names of contributors)?",
		},
		{
			type: "input",
			name: "#LESSONS LEARNED",
			message: "What did you learn from building this app?",
		},
		{
			type: "input",
			name: "#IMAGE CREDITS",
			message: "Did you use any images? If so, list credits.",
		},
		{
			type: "input",
			name: "#LICENSES",
			
			message: "List software and font licenses here. ",
		},
	])
	.then(function (response) {
		data = `
		##INTRODUCTION
				
		##Project Repo [Link](https://github.com/melissakinsey/loremipsum) 
		
		##GitHub Pages [Link](https://melissakinsey.github.io/portfolio/index.html) 
		
		##Screencast [Link](https://loremipsum)
		
		#USER STORY
		
		#DESCRIPTION

		#FEATURES

		#TECHNICAL SPECS

		#CONTRIBUTORS
			
		#LESSONS LEARNED 
		
		#IMAGE CREDITS
	
		#LICENSES `;
		fs.writeFile("README.md", data, function (error) {
			if (error) {
				console.error(error);
			} else {
				console.log("no error");
			}
		});
	});
