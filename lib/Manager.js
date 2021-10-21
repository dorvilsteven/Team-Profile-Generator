const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', office = typeof 1) {
        super(name);
        this.officeNumber = office;
        this.role = 'manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;