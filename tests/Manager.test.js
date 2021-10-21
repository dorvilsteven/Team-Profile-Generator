const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('marcus');

    expect(manager.name).toBe('marcus');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('marcus@company.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual(expect.any(Manager));
});