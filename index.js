const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
		
		{
			type: "input",
			name: "Installation",
			message: "Please give instructions for installing this app.",
		},
		{
			type: "input",
			name: "Project_Repo",
			message: "What is the URL of the project repo?",
			default: "[Link](https://github.com/melissakinsey/loremipsum)",
		},
		{
			type: "input",
			name: "GitHub Pages",
			message: "What is the URL of the project in GitHub Pages?",
			default: "[Link](https://melissakinsey.github.io/loremipsum)",
		},
		{
			type: "input",
			name: "Screencast",
			message: "What is the URL of the screencast demo?",
		},
		{
			type: "input",
			name: "User_Story",
			message: "What is your user story?",
			default: "*AS A* [type of user] *I WANT TO* [perform this task] *SO I CAN* [accomplish this goal])."
		},
		{
			type: "input",
			name: "Description",
			message: "How would you describe your project?",
		},
		{
			type: "input",
			name: "Usage",
			message: "How is this app used?",
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
			name: "Tests",
			message: "What tests did you run?",
		},
		{
			type: "input",
			name: "Contributors",
			message: "Was this a group project (if so, list names of contributors)?",
			default: "This was an individual project."
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
			type: "list",
			message: "Select a license for your project.",
			choices: ["Mozilla", "Apache", "MIT"],
			name: "License",
		},
		{
		type: "input",
		name: "Fonts",
		message: "List software and font licenses here.",
		default: "The {font} used under a Creative Commons license, courtesy of {designer} and Google LLC, organized under the laws of the State of Delaware, USA, and operating under the laws of the USA.",
		},	
	])
	.then(function (response) {
		console.log(response)
		data = `

![Binary code](/code-header.png)

* [Installation](#Installation)
* [User Story](#User_Story)
* [Description](#Description)
* [Usage](#Usage)
* [Features](#Features)
* [Technical Specs](#Technical_Specs)
* [Tests](#Tests)
* [Contributors](#Contributors)
* [Lessons_Learned](#Lessons_Learned)
* [Questions](#Questions)

# INSTALLATION
${response["Installation"]}
				
## Project Repo 
${response["Project_Repo"]}
		
## GitHub Pages 
${response["GitHub_Pages"]}

## Screencast [Link](https://loremipsum)
${response["Screencast"]}

# USER STORY
${response["User_Story"]}

# DESCRIPTION
${response["Description"]}

# USAGE
${response["Usage"]}

# FEATURES
${response["Features"]}

# TECHNICAL SPECS
${response["Technical Specs"]}

# TESTS
${response["Features"]}

# CONTRIBUTORS
${response["Contributors"]}
			
# LESSONS LEARNED 
${response["Lessons_Learned"]}

# CREDITS
## Image Credits
${response["Image_Credits"]}

## License
${response["License"]}

## Fonts
${response["Fonts"]}
		
`;

		fs.writeFile("README.md", data, function (error) {
			if (error) {
				console.error(error);
			} else {
				console.log("no error");
			}
		});
	});
