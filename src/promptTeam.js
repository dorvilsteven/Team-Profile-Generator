const Team = require("../lib/Team");
const getAction = require("./getAction");

module.exports = (team = Team) => {
    getAction(team);
    return team;
};