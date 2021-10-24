const Inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const addTeamMember = require('./addTeamMember');
const engineerQuery = require('./engineerQuery');
const internQuery = require('./internQuery');

module.exports = (team) => {
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
                   
                })
                .catch((error) => {
                    if (error) {
                        console.log(error);
                    }
                });
        }
    })
    .catch((error) => {
        if (error) {
            console.log(error);
        }
    });
};