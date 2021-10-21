const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
        this.officeNumber = (100 + this.id);
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this;
    }
}

module.exports = Manager;