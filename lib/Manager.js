const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', office = typeof 1) {
        super(name);
        this.officeNumber = office;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return this;
    }
}

module.exports = Manager;