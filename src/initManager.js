const Inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Team = require('../lib/Team');
const addTeamMember = require('./addTeamMember');
const generateHTML = require('./generateHTML');
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
            return promptTeam(team);
        })
        .then((html) => {
            const styles = `:root {--header-background: rgb(255, 80, 80);}
                * {margin: 0;padding: 0;box-sizing: border-box;}
                header {height: 15vh;background-color: var(--header-background);}`
            generateHTML(html, styles);
        })
        .catch((error) => {
            if (error) {
                console.log(error);
            }
        });
}
