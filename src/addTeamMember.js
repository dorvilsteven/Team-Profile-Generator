const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Team = require('../lib/Team');

module.exports = (employee, team) => {
    team.addMember(employee);
    return team;
};
