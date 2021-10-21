const Team = require('../lib/Team');

jest.mock('../lib/Team');

test('creates team object', () => {
    const group1 = new Team();
    expect(group1).toEqual(expect.any(Object));
    expect(group1.members).toEqual(expect.any(Array));
});
