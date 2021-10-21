const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', githubUsername = '') {
        super(name);
        this.github = githubUsername;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this;
    }
}

module.exports = Engineer;