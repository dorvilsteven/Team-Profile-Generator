var random = (num) => {
    return Math.floor(Math.random() * num + 5);
}
class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = random(name.length) + random(100);
        this.email = `${name}@company.com`;
        this.role = 'employee';
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
    getRole() {
        return this.role;
    }
}

module.exports = Employee;