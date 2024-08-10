// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    //Asks for Project Title, Description, Installation Instructions, Usage Information, Contribution Guidelines,
    //and Test Instructions
    `What is the title of your project?`,
    `What is the description of your project?`,
    `What are the installation instructions for your project?`,
    `What is the usage information for your project?`,
    `What are the contribution guidelines for your project?`,
    `What are the test instructions for your project?`,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`Successfully generated README file in ${fileName}!`)
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
