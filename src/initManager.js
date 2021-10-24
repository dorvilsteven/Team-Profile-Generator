const Inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Team = require('../lib/Team');
const addTeamMember = require('./addTeamMember');
const promptTeam = require('./promptTeam');
const managerQuery = require('./queries/managerQuery');

const greeting = 'Welcome, Please enter your information to begin creating your team.';

module.exports = () => {
    console.log(greeting);
    return Inquirer.prompt(managerQuery)
        .then(({managerName, managerOffice}) => {
            const teamManager = new Manager(managerName, managerOffice);
            const team = new Team();
            return addTeamMember(teamManager, team);
        })
        .then((team) => {
            promptTeam(team);
        })
        .catch((error) => {
            if (error) {
                console.log(error);
            }
        });
}
