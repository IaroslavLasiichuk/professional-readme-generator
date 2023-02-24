const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'confirm',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:',
    },

  ])
    .then((data) => {
  console.log(data);
  });