const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', githubUsername = '') {
        super(name);
        this.github = githubUsername;
        this.role = 'engineer';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;