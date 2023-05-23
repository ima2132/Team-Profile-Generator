// engineer info 
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create an Engineer object with name, id, email, and GitHub username', () => {
        const engineer = new Engineer('Zuko', 1, 'zuko@avatar.com', 'zukogithub');

        expect(engineer.name).toEqual('Zuko');
        expect(engineer.id).toEqual(1);
        expect(engineer.email).toEqual('zuko@avatar.com');
        expect(engineer.github).toEqual('zukogithub');
    });

    it('getRole() should return "Engineer"', () => {
        const engineer = new Engineer('Zuko', 1, 'zuko@avatar.com', 'zukogithub');

        expect(engineer.getRole()).toEqual('Engineer');
    });

    it('getGithub() should return the GitHub username of the Engineer', () => {
        const engineer = new Engineer('Zuko', 1, 'zuko@example.com', 'zukogithub');

        expect(engineer.getGithub()).toEqual('zukogithub');
    });
});

