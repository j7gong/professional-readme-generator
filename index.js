const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {writeFile, copyFile } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    console.log(`
    =================
    Let's add a professional README file!
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your GitHub username? (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your Github username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your email address!');
                return false;
              }
            }
          },
        {
          type: 'input',
          name: 'title',
          message: 'What is your project title? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your project title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter your project description (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter your project description!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installationn instruction for your project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information for your project'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution guidelines for your project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions for your project'
        },
        {
            type: 'list',
            name: 'license',
            message: ' What license you would like to choose?',
            choices: ['MIT License', 'Apache License 2.0', 'Boost Software License 1.0']
        }
      ]);
};

promptUser();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
