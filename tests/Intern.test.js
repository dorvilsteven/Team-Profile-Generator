const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('stanley', 'harvard');

    expect(intern.name).toBe('stanley');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('stanley@company.com');
    expect(intern.school).toBe('harvard');
    expect(intern.getSchool()).toBe('harvard');
    expect(intern.getRole()).toBe('intern');
});
