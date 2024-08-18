# README File Generator
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)
## Description
This project allows a user to quickly generate a new README.md file by entering in information to the prompts from the console.
The user doesn't have to worry about the syntax or formatting. They just have to provide the relevant
information for each prompt. The inquirer npm module was used to ask and prompt the user for input and the fs module was used
to generate and write to a new file.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

- The user must download the repo locally in order to get started with using this project. 
- Npm modules are needed in order to function properly so they will need to open a terminal/command window
in the directory of the repo and run: npm i
- Node.JS will also be needed so have that installed on your machine. 

## Usage
[Video Showcase](https://drive.google.com/file/d/189u-89SP09RucHGc34H4kIAQLs78Jx3W/view?usp=sharing)<br/><br/>
After the required prerequisites have been installed, open a terminal window in the directory of the repo and run: node index.js
You will then need to provide input for the following questions:
- `What is the title of your project?`,
- `What is the description of your project?`,
- `What are the installation instructions for your project?`,
- `What is the usage information for your project?`,
- `What are the contribution guidelines for your project?`,
- `What are the test instructions for your project?`,
- `What is your GitHub username?`,
- `What is your email address?`,
- `What license would you like to use?`

A new README.md file will be generated in the Generated-README-File folder of the repo after completing the prompts!

## Contributing
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

## Tests
After downloading the repo locally:
- npm i : installs necessary npm modules for the project
- node index.js : node runs the index.js file and prompts user for input to generate a README.md file
- Trying to run generateMarkdown.js by itself will not do anything.

## Questions
For any and all questions, please contact me here:
- GitHub: https://github.com/PhilipMcF
- Email: philipsm1998@gmail.com

## License
[This project is licensed under the MIT license.](#https://opensource.org/license/mit)
