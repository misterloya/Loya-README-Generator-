const fs = require ("fs");
const inquirer = require("inquirer");
const genMarkdown = require ("./utils/generateMarkdown")


// function to initialize program and set questions
function init() {
    inquirer.prompt([
        {
        type: "input",
        message: "What is your Github user name?",
        name: "username",
        default: "github.com/"
        },
        {
        type: "input",
        message: "What is your email address?",
        name: "email"
       },
       {
        type: "input",
        message: "What's the project Title?",
        name: "title"
       },
       {
        type: "list",
        message: "What kind of license is used?",
        name: "license",
        choices: ["MIT", "Apache%202.0", "EPL%201.0", "none"]
       },
       {
        type: "input", 
        message: "Give a description of the project: ",
        name: "description",
        default: "Type Description Here"
       },
       {
        type: "input", 
        message: "What's the installation?",
        name: "installation",
        default: "npm install"
       },
       {
        type: "input", 
        message: "What's the Usage",
        name: "usage",
       }


    ]).then((answers) =>{
        return fs.writeFileSync("README.md", genMarkdown(answers))
    }).then(() =>{
    console.log("This file has been generated! ");
    });
}

// function call to initialize program
init();

