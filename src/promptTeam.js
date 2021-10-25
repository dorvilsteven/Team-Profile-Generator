const Inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Team = require('../lib/Team');
const addTeamMember = require('./addTeamMember');
const engineerQuery = require('./queries/engineerQuery');
const internQuery = require('./queries/internQuery');

const promptNewEmployee = (team = Team) => {
    return Inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Add Engineer', 'Add Intern', 'Complete Team'],
            validate: (action) => {
                if (action) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(({action}) => {
        if (action === 'Add Engineer') {
            return Inquirer.prompt(engineerQuery)
                .then(({engineerName, engineerGithub}) => {
                    const engineer = new Engineer(engineerName, engineerGithub);
                    return addTeamMember(engineer, team);
                })
                .then((team) => {
                    return promptNewEmployee(team);
                })
                .catch((error) => {
                    if (error) {
                        console.log(error);
                    }
                });
        } else if (action === 'Add Intern') {
            return Inquirer.prompt(internQuery)
                .then(({internName, internSchool}) => {
                    const intern = new Intern(internName, internSchool);
                    return addTeamMember(intern, team);
                })
                .then((team) => {
                    return promptNewEmployee(team);
                })
                .catch((error) => {
                    if (error) {
                        console.log(error);
                    }
                });
        } else {
            // console.log(team);
            displayTeamToHTML(team);
        } 
    })
    .catch((error) => {
        if (error) {
            console.log(error);
        }
    });
};

module.exports = (team = Team) => {
    promptNewEmployee(team);
};