const Inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Team = require('../lib/Team');
const addTeamMember = require('./addTeamMember');

const greeting = 'Welcome, Please enter your information to begin creating your team.';

module.exports = () => {
    console.log(greeting);
    return Inquirer.prompt([
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
        }
    ])
    .then(({managerName, managerOffice}) => {
        const teamManager = new Manager(managerName, managerOffice);
        const team = new Team();
        return addTeamMember(teamManager, team);
    })
    .then((team) => {
        
    })
    .catch((error) => {
        if (error) {
            console.log(error);
        }
    });
}
