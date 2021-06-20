// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input

const promptUser = () => {
  return inquirer
  .prompt([

// const questions = ([
    {
      type: 'input',
      name: 'name',
      message: 'Please provide the name of this project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please explain how to install your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please explain how to use your project:',  
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license:',
      choices: ['Apache', 'BDS-3', 'BDS-2', 'GPL', 'LGPL', 'MIT', 'MPL', 'Common Development and Distribution', 'EPL'],  
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please describe how others may contribute to your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please describe how others may test your project:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Please provide your Github username:',  
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please provide your email address:',  
    },
  ]);  
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err)  
      throw err;
      console.log('success');
  });    
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
    console.log(userInput)
    writeToFile("READEME.md", generateMarkdown(userInput));
  });
};

// Function call to initialize app
init();
