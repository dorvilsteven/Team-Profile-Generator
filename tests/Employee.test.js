const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('steven');

    expect(employee.name).toBe('steven');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('steven@company.com');
    console.log(employee.getRole());
});