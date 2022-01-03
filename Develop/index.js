// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const answers = process.argv;
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'Enter is the project title: ',
    'Enter your email address: ',
    'Enter your GitHub username: ',
    'Enter the project description: ',
    'Enter the project installation instructions: ',
    'Enter the usage information: ',
    'Enter the contribution guidelines: ',
    'Enter the test instructions: ',
    'Choose a license:',
    'Would you like to create a table of contents: '
];

const promptUser = () => {
    return inquirer.prompt([
        /* Pass your questions in here */
        {
            type: 'input',
            name: 'title',
            message: questions[0],
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: questions[1],
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'userName',
            message: questions[2],
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: questions[3],
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'installInstructions',
            message: questions[4],
            validate: instructionsInput => {
                if (instructionsInput) {
                    return true;
                } else {
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'usage',
            message: questions[5],
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[6],
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'test',
            message: questions[7],
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    return false;
                }
            }

        },
        {
            type: 'list',
            name: 'license',
            message: questions[8],
            choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
            type: 'confirm',
            name: 'TOC',
            message: questions[9],
            default: false
        }
    ])
        // .then((answers) => {
        //     // Use user feedback for... whatever!!
        //     console.log(answers);
        //     generateMarkdown(answers);
        // })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            //if there is an error, reject the Promise and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesnt accidentally execute the resolve() function as well.
                return;
            }
    
            //if everything went well, resolve the promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
 }

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(userData =>{
            console.log(userData);
            return generateMarkdown.generateMarkdown(userData);
        })
        .then(fileData =>{
            return writeToFile('./README.md', fileData);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })

}

// Function call to initialize app
init();
