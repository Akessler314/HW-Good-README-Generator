const fs = require("fs");
// const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");



const questions = [
    //asks user for git hub user name 
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your username on Github?',
     
    },
    // ask user for name of the app 
    {
        type: 'input',
        name: 'repoName',
        message: 'What is name of this application?',
     
    },
    // asks for a description of the project 
    {
        type: 'input',
        message: 'Write a description of this application',
        name: 'description',
     
    },
    // How do you install your app? 
    {
        type: 'input',
        message: 'How does a user install your application? Provide instuctions here',
        name: 'installApp',
     
    },
   // How does a user use your application? 
    {
        type: 'input',
        message: 'How does a user use your application? Provide instuctions here',
        name: 'appInstructions',
     
    },
    // How would a user of this application report an issue, or make a contribution to it? 
    {
        type: 'input',
        message: 'What is your Github name?',
        name: 'appIssuesAndCont',
     
    },
 // promts what license they would you  like to use? 
 // THIS SHOULD BE USED FOR A BADGE. 
    {
        type: 'input',
        message: 'What license they would you  like to use? (Ex: MIT, GPL 3.0) If you do not wish to use a license type "none" ',
        name: 'license',
     
    },
 //Asks the user who else contributed to their application 
    {
        type: 'input',
        message: 'Who else contributed to your application? if none write "none" ',
        name: 'contributors',
     
    },

];

function writeToFile(fileName, data) {


    //after the file is gnerated displays a message that it was sucsesful. 
    console.log("ReadMe has been generated"); 
}

function init() {
inquirer.prompt(questions).then(function(response){
//Shows waht the resposne for the questions were. 
console.log(response)
})
//console log to make sure that the questions are being called correctly (get rid of this in final project)
console.log(questions); 


}

init();
writeToFile(); 


