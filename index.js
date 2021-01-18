const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
	
	{
		type: "input",
		name: "Description",
		message: "Describe your project.",
	},
	{
		type: "input",
		name: "Project_Repo",
		message: "What is the URL of the project repo?",
		default: "[Readme Generator Repo](https://github.com/melissakinsey/readme-generator)",
	},
	{
		type: "input",
		name: "GitHub Pages",
		message: "What is the URL of the project in GitHub Pages?",
		default: "[Link](https://melissakinsey.github.io/readme-generator/)",
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
		default: "*AS A* [type of user] *I WANT TO* [perform this task] *SO I CAN* [accomplish this goal]).",
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
		message: "What technical specs does the project meet (for example, tools and frameworks used or APIs called)?",
	},
	{
		type: "input",
		name: "Tests",
		message: "What tests did you run?",
	},
	{
		type: "input",
		name: "Lessons_Learned",
		message: "What did you learn from building this app?",
	},
	{
		type: "input",
		name: "Contributions",
		message: "If this was a group project, list names of the contributors.",
		default: "This was an individual project.",
	},
	{
		type: "input",
		name: "Image_Credits",
		message: "List image credits.",
		default: "Header adapted from image by filo/iStockPhoto.  Badges created using Michael Currin's nifty [Badge Generator](https://michaelcurrin.github.io/badge-generator/#/repo)",
	},
	{
		type: "input",
		name: "Fonts",
		message: "List the license for any font used in this project.",
		default: "The {font} used under a Creative Commons license, courtesy of {designer} and Google LLC, organized under the laws of the State of Delaware, USA, and operating under the laws of the USA.",
	},	
	{
		type: "input",
		name: "Questions",
		message: "Where can users reach you for questions?",
		default: "To ask questions or contribute project feedback, ping me @melissakinsey (GitHub), @KinseyMelissa (Twitter) or kinsey.melissa@gmail.com.",
	},
])
.then(function (response) {
	console.log(response)
	data = `
	
![readme-header](assets/readme-header.png)
	
[![stars - readme-generator](https://img.shields.io/github/stars/melissakinsey/readme-generator?style=social)](https://github.com/melissakinsey/readme-generator)
[![forks - readme-generator](https://img.shields.io/github/forks/melissakinsey/readme-generator?style=social)](https://github.com/melissakinsey/readme-generator)

[![melissakinsey - readme-generator](https://img.shields.io/static/v1?label=melissakinsey&message=readme-generator&color=blue&logo=github)](https://github.com/melissakinsey/readme-generator)
<div align="center">
</div>

[Released under ![License - MIT](https://img.shields.io/badge/License-MIT-blue)](#license) by [@melissakinsey](https://github.com/melissakinsey).	
	
* [Description](#Description)
* [User Story](#User_Story)
* [Installation](#Installation)
* [Usage](#Usage)
* [Features](#Features)
* [Technical Specs](#Technical_Specs)
* [Tests](#Tests)
* [Lessons Learned](#Lessons_Learned)
* [Contributions](#Contributions)

	
# DESCRIPTION
${response["Description"]}

## Project Repo 
${response["Project_Repo"]}
	
## GitHub Pages 
${response["GitHub_Pages"]}
	
## Screencast
${response["Screencast"]}
	
# USER STORY
${response["User_Story"]}
	
# INSTALLATION
${response["Installation"]}
	
# USAGE
${response["Usage"]}
	
# FEATURES
${response["Features"]}
	
# TECHNICAL SPECS
${response["Technical_Specs"]}
	
# TESTS
${response["Tests"]}
	
# LESSONS LEARNED 
${response["Lessons_Learned"]}

# CONTRIBUTIONS
${response["Contributions"]}
	
## IMAGE CREDITS
${response["Image_Credits"]}
	
## FONTS
${response["Fonts"]}

## QUESTIONS
${response["Questions"]}
`;
	
	fs.writeFile("README.md", data, function (error) {
		if (error) {
			console.error(error);
		} else {
			console.log("no error");
		}
	});
});
