var random = (num) => {
    return Math.floor(Math.random() * num + 5);
}
class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = `00${random(name.length)}`;
        this.email = `${name}@company.com`;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;