const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('steven');

    expect(manager.name).toBe('steven');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('steven@company.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    console.log(manager.getEmail());
    console.log(manager.getRole());
});