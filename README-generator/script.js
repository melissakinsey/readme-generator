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
		##INTRODUCTION
		Enter the reason for doing the project and explain in broad terms what the app does.
		
		Repo: https://github.com/melissakinsey/loremipsum
		
		GitHub Pages: https://melissakinsey.github.io/loremipsum
		
		#USER STORY
		
		*AS A* [type of user] 
		*I WANT TO* [accomplish this] 
		*SO I CAN* [do this.]
		
		#PROJECT OVERVIEW
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		
		#FEATURES
		
		##Feature 1
		
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
		
		[!images/images.jpg]
		
		##Feature 2
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		
		##Feature 3
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		
		#PROJECT REQUIREMENTS
		
		##Technical Criteria
		
		Application meets the following criteria:
		* Uses an [x] framework.
		* Uses [x] APIs.
		* Uses local storage [Y/N].
		* Requirement
		* Requirement
		* Requirement
		
		##Repository Requirements
		
		Project repo meets the following requirements:
		* Has a unique name.
		* Follows best practices for file structure and naming conventions.
		* Contains multiple descriptive commit messages.
		
		#User Experience Standards
		
		User experience meets the following guidelines:
		* Offers an intuitive, easy-to-navigate user experience.
		* Has a clean, polished, responsive interface.
		
		#CONTRIBUTORS
		
		##Contributor 1
		
		- Contribution 1
		- Contribution 2
		- Contribution 3
		
		
		#LESSONS LEARNED 
		* *Lesson 1.* 
		* *Lesson 2.* 
		* *Lesson 3.*
		
		#IMAGE CREDITS
		
		- Image X courtesy of. [!images/loremipsum.jpg]
		- Image X courtesy of. [!images/loremipsum.jpg]
		- Background image courtesy X [!images/X.jpg]
		
		#APIs
		##API #1
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		##API #2
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		
		#LICENSES
		
		##License #1
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		
		
		##License #1
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			  
		##Font License
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			 `;
		fs.writeFile("README.md", data, function (error) {
			if (error) {
				console.error(error);
			} else {
				console.log("no error");
			}
		});
	});
