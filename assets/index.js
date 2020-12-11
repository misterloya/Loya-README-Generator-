const inquire = require ("inquirer");
const fs = require ("fs");
const inquirer = require("inquirer");
const genMarkdown = require ("./utils/generateMarkdown")


// function to initialize program and set questions
function init() {
    inquirer.prompt([
        {
        type: "input",
        message: "What is your Github user name?",
        name: "username"
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
        choices: ["MIT", "License 2", "License 3"]
       }

    ]).then((answers) =>{
        return fs.writeFileSync("README.md", genMarkdown(answers))
        // writeToFile("README.md", genMarkdown({answers}));
    }).then(() =>{
    console.log("This file has been generated! ");
    });
}

// function call to initialize program
init();
