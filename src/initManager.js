const Inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Team = require('../lib/Team');

const greeting = 'Welcome, Please enter your information to begin creating your team.';

module.exports = () => {
    console.log(greeting);
    Inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter your Name.',
            validate: (managerName) => {
                if (managerName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'managerOffice',
            message: 'what is your office number?',
            validate: (managerOffice) => {
                if (managerOffice) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            message: 'What would you like to do?',
            name: 'managerAction',
            choices: ['Add Engineer', 'Add Intern', 'Complete Team']
        }
    ])
    .then(({ managerName, managerOffice, managerAction}) => {
        console.log(managerName);
        console.log(managerOffice);
        console.log(managerAction);
    })
    .catch((error) => {
        if (error) {
            console.log(error);
        }
    });
}
