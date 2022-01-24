// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

//: Create an array of questions for user input
const questions = [
  {// Title of project
    type: 'input',
    name: 'title',
    message: 'What is the title of this repository?',
  },
  {// Description
    type: 'input',
    name: 'description',
    message: 'What is the description of this application?'
  },
  {// What does a user need to know about installing dependencies
    type: 'input', 
    name: 'dependencies',
    message: 'What does a user need to know about installing any dependencies?',
  },
  {// What does a user need to know about using this repo
    type: 'input',
    name: 'repoInfo',
    message: 'What does a user need to know about using this repository?',
  },
  {// What does a user need to know about contributing to  this repo
    type: 'input',
    name: 'contributions',
    message: 'What does a user need to know about contributing to this repository?',
  },
  {// What license is this project under
    type: 'list',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
    message: 'What license is this project under?',
  },
  {// What command will run tests for this repo
    type: 'input',
    name: 'testCommand',
    message: 'What command will run tests for this repository?',
  },
  {//Ask for GitHub username
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {//Ask for User email address
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    console.log(answers)
    writeToFile('README.md', generateMarkdown({...answers}));
  })
}

// Function call to initialize app
init();
