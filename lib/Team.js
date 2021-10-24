class Team {
    constructor() {
        this.members = [];
    }
    addMember(employee) {
        this.members = [ ...this.members, employee ];
    }
    getMembers() {
        return this.members;
    }
    getEmployeeByRole(role) {
        const employees = this.members.filter((member) => member.getRole() === role);
        return employees;
    }
}

module.exports = Team;