const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
];

// Inquirer prompting questions:
inquirer.prompt([
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
        name: "Credits",
        message: "Is there any one you would like share credit with?"
    },
    {
        name: "License",
        message: "What kind of licence your application has?"
    },
    {
        name: "Badges",
        message: "What is a status of badge your application has?"
    },
    {
        name: "Feature",
        message: "Does your application has any features?"
    },
    {
        name: "How to contribute?",
        message: "How would you like users to contribute??"
    },
    {
        name: "Tests",
        message: "What kind of tests can be performed with code examples?"
    },
    {
        name: "Link",
        message: "Please provide link to your application"
    }
]).then(answers => {
    console.log("Just got done answering, these are my answers")
    console.log(answers)
    

    fs.writeFile("README.md", generateMarkdown(answers), err => {
        err ? console.error(err) : console.log ('Success!')
    }
     )
})
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
