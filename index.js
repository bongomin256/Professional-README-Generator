// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project's title?",
    name: "title",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter the project's title to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is the Project's Description?",
    name: "description",
  },
  {
    type: "input",
    message: "How to install the application?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the use of this application?",
    name: "usage",
  },
  {
    type: "list",
    message: "What is the license you used?",
    name: "license",
    choices: ["MIT", "ISC", "IBM", "Mozilla", "None"],
  },
  {
    type: "input",
    message: "How to contribute to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "test",
  },
  {
    type: "input",
    message: "Enter your Github username",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your E-mail address",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the first screenshot of the project",
    name: "screenshot1",
  },
  {
    type: "input",
    message: "Enter the second screenshot of the project",
    name: "screenshot2",
  },
  {
    type: "input",
    message: "Enter the link to your repo",
    name: "repo",
  },
  {
    type: "input",
    message: "Enter the link to deploy the application",
    name: "deploy",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created readme.md!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", markDown(data));
  });
}

// Function call to initialize app
init();
