const fs = require("fs");
// const axios = require("axios"); not needed 
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown.js");



const questions = [
    //ask user for name of the app 
    {
      
        type: 'input',
        name: 'repoName',
        message: 'What is name of this application? (This will aslo the main header of the README)',
     
    },
    //asks user for git hub user name 
    {
        type: 'input',
        name: 'gitHubName',
        message: 'What is your username on Github?',
     
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
        message: 'Would you like you users to be able to report issues or contribute to this project? add instructions here.',
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

function init() {
inquirer.prompt(questions).then((response)=>{

// this will Create the first line and main header for the repo (that is what the "# " is for) using the users resonse to RepoName
fs.appendFileSync("README.md", ("# " + response.repoName )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// this will create the 2nd line of readme discribing the application was developed by the users reponse to githubname 
fs.appendFileSync("README.md", ("This application was developed by: " + response.gitHubName + '\n') + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// adds the discription of the project that the users entered 
fs.appendFileSync("README.md", ( response.description ) + '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
//creates a sub header for installation and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Installation" + '\n' + response.installApp )+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for App usage and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.appInstructions)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for issue reporting and contriubiting and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Issue Reporting and Contributing" + '\n' + response.appIssuesAndCont)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for issue reporting and contriubiting and adds the instructions the users entered 
fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.contributors)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})
// creates a sub header for licences and adds the licences the users entered 
fs.appendFileSync("README.md", ("## Licence(s)" + '\n' + response.license)+ '\n', function(err) { 

    if (err) { 
    console.log(err)
    }
    else {
    console.log("Success")
    }

})

})
}

//runs the function to creat the file 
init();


//-------------------------------------------------------------------------------------------------------------------------------------------------


//for testing purposes: 

//Shows waht the resposne for the questions were. 
// console.log(response)
// console.log(response.gitHubName)
// console.log(response.repoName)
// console.log(response.description)
// console.log(response.appInstructions)
// console.log(response.appIssuesAndCont)
// console.log(response.license)
// console.log(response.contributors)
