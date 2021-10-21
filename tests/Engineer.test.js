const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('paul', 'paullyboy');

    expect(engineer.name).toBe('paul');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('paul@company.com');
    expect(engineer.github).toBe('paullyboy');
    expect(engineer.getGithub()).toBe('paullyboy');
    expect(engineer.getRole()).toEqual(expect.any(Engineer));
});