const inquirer = require("inquirer");
const fs = require("fs");
inquirer.prompt([
		{
			type: "input",
			name: "Introduction",
			message: "What is the goal of your project?",
		},
		{
			type: "input",
			name: "Project_Repo",
			message: "What is the URL of the project repo?",
		},
		{
			type: "input",
			name: "GitHub Pages [Link](https://melissakinsey.github.io/loremipsum)",
			message: "What is the URL of the project in GitHub Pages?",
		},
		{
			type: "input",
			name: "Screencast",
			message: "What is the URL of the screencast demo?",
		},
		{
			type: "input",
			name: "User_Story",
			message: "What is your user story (for example, *AS A* [type of user] *I WANT TO* [perform this task] *SO I CAN* [accomplish this goal])?",
		},
		{
			type: "input",
			name: "Description",
			message: "How would you describe your project?",
		},
		{
			type: "input",
			name: "Features",
			message: "What are the features of the app?",
		},
		{
			type: "input",
			name: "Technical_Specs",
			message: "What technical specs does your project meet (for example, tools and frameworks used or APIs called)?",
		},
		{
			type: "input",
			name: "Contributors",
			message: "Was this a group project (if so, list names of contributors)?",
		},
		{
			type: "input",
			name: "Lessons_Learned",
			message: "What did you learn from building this app?",
		},
		{
			type: "input",
			name: "Image_Credits",
			message: "Did you use any images? If so, list credits.",
		},
		{
			type: "input",
			name: "Licenses",
			message: "List software and font licenses here.",
		},
	])
	.then(function (response) {
		console.log(response)
		data = `
		# INTRODUCTION
		${response["Introduction"]}
				
		## Project Repo [Link](https://github.com/melissakinsey/loremipsum) 
		${response["Project_Repo"]}
		
		## GitHub Pages [Link](https://melissakinsey.github.io/loremipsum) 
		${response["GitHub_Pages"]}

		## Screencast [Link](https://loremipsum)
		${response["Screencast"]}

		# USER STORY
		${response["User_Story"]}

		# DESCRIPTION
		${response["Description"]}

		# FEATURES
		${response["Features"]}

		# TECHNICAL SPECS
		${response["Technical Specs"]}

		# CONTRIBUTORS
		${response["Contributors"]}
			
		# LESSONS LEARNED 
		${response["Lessons_Learned"]}

		# IMAGE CREDITS
		${response["Image_Credits"]}

		# LICENSES
		${response["Licenses"]}
		
		`;

		fs.writeFile("README.md", data, function (error) {
			if (error) {
				console.error(error);
			} else {
				console.log("no error");
			}
		});
	});
