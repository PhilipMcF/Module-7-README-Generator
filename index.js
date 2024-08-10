// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

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
function init() {
    console.log("\nWelcome to the README Generator! Please answer the following questions to generate your README file...");
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "title",
            },
            {
                type: "input",
                message: questions[1],
                name: "description",
            },
            {
                type: "input",
                message: questions[2],
                name: "installInstructions"
            },
            {
                type: "input",
                message: questions[3],
                name: "usageInformation"
            },
            {
                type: "input",
                message: questions[4],
                name: "contributionGuidelines"
            },
            {
                type: "input",
                message: questions[5],
                name: "testInstructions"
            }
        ])
        .then((response) => {
            let MarkdownData = generateMarkdown(response);
            writeToFile("./Generated-README-File/README.md", MarkdownData);
        });
}

// Function call to initialize app
init();
