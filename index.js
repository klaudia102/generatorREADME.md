const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { clear } = require("console");

// Inquirer prompting questions:
// inquirer.prompt([
//     {
//         name: "Title",
//         message: "What is a title of your application?"
//     },
//     {
//         name: "Description",
//         message: "How would you describe your application?"
//     },
//     {
//         name: "Instalation",
//         message: "How your application should be instaled?"
//     },
//     {
//         name: "Usage",
//         message: "How your application should be used?"
//     },
//     {
//         type: "list",
//         name: "License",
//         message: "What kind of licence your application has?",
//         choices:['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'The BSD 2-Clause Simplified License','The BSD 3 New or Revised License'],
//     },
//     {
//         name: "Contribution",
//         message: "How would you like users to contribute?"
//     },
//     {
//         name: "Tests",
//         message: "What kind of tests can be performed with code examples?"
//     },
//     {
//         name: "GitHubName",
//         message: "What is your Github username?"
//     },
//     {
//         name: "email",
//         message: "What is your email address for communication regarding application?"
//     },
// ]).then(answers => {
//     fs.writeFile("README.md", generateMarkdown(answers), err => {
//         err ? console.error(err) : console.log ('Success!')
//     })
// })

// function to initialize program
function init() {
    inquirer.prompt([
        {
            name: "Title",
            message: "What is a title of your application?"
        },
        {
            name: "Description",
            message: "How would you describe your application?"
        },
        {
            name: "Instalation",
            message: "How your application should be instaled?"
        },
        {
            name: "Usage",
            message: "How your application should be used?"
        },
        {
            type: "list",
            name: "License",
            message: "What kind of licence your application has?",
            choices:['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'The BSD 2-Clause Simplified License','The BSD 3 New or Revised License'],
        },
        {
            name: "Contribution",
            message: "How would you like users to contribute?"
        },
        {
            name: "Tests",
            message: "What kind of tests can be performed with code examples?"
        },
        {
            name: "GitHubName",
            message: "What is your Github username?"
        },
        {
            name: "email",
            message: "What is your email address for communication regarding application?"
        },
    ]).then(answers => {
        fs.writeFile("README.md", generateMarkdown(answers), err => {
            err ? console.error(err) : console.log ('Success!')
        })
    })
}

// function call to initialize program
init();
