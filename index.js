const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { generateMarkdown } = require('./utils/generateMarkdown.js');
const fs = require('fs');

const promptUser = projectData => {
    console.log(`
    =================
    Let's add a professional README file!
    =================
    `);

    // If there's no 'projects' array property, create one
    if (!projectData) {
        projectData = [];
    }
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
            message: 'Enter installation instruction for your project'
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
            choices: ['None', 'MIT License', 'Apache License 2.0', 'Boost Software License 1.0']
        }
      ])
      .then(data => {
        projectData.push(data);
        return projectData;
      });
};

promptUser()
    .then(projectData => {
        return generatePage(projectData);
    })
    .then(pageMD => {
        return generateMarkdown(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
