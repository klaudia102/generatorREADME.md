const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { clear } = require("console");

// Inquirer prompting questions:
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
        name: "Content",
        message: "Please provide Table of Contents"
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
        name: "License",
        message: "What kind of licence your application has?"
    },
    {
        name: "Contribution",
        message: "How would you like users to contribute??"
    },
    {
        name: "Tests",
        message: "What kind of tests can be performed with code examples?"
    },
    {
        name: "Questions",
        message: "Have you got any questions?"
    }
]).then(answers => {
    fs.writeFile("README.md", generateMarkdown(answers), err => {
        err ? console.error(err) : console.log ('Success!')
    })
})

// function to initialize program
function init() {

}

// function call to initialize program
init();
