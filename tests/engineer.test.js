// engineer info 
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should create an Engineer object with name, id, email, and GitHub username', () => {
        const engineer1 = new Engineer('Zuko', 2, 'zuko@avatar.com', 'zukogithub');
        const engineer2 = new Engineer('Katara', 3, 'katara@avatar.com', 'kataragithub');

        expect(engineer1.name).toEqual('Zuko');
        expect(engineer1.id).toEqual(2);
        expect(engineer1.email).toEqual('zuko@avatar.com');
        expect(engineer1.github).toEqual('zukogithub');

        expect(engineer2.name).toEqual('Katara');
        expect(engineer2.id).toEqual(3);
        expect(engineer2.email).toEqual('katara@avatar.com');
        expect(engineer2.github).toEqual('kataragithub');
    });

    it('getRole() should return "Engineer"', () => {
        const engineer1 = new Engineer('Zuko', 2, 'zuko@avatar.com', 'zukogithub');
        const engineer2 = new Engineer('Katara', 3, 'katara@avatar.com', 'kataragithub');

        expect(engineer1.getRole()).toEqual('Engineer');
        expect(engineer2.getRole()).toEqual('Engineer');
    });

    it('getGithub() should return the GitHub username of the Engineer', () => {
        const engineer1 = new Engineer('Zuko', 2, 'zuko@avatar.com', 'zukogithub');
        const engineer2 = new Engineer('Katara', 3, 'katara@avatar.com', 'kataragithub');

        expect(engineer1.getGithub()).toEqual('zukogithub');
        expect(engineer2.getGithub()).toEqual('kataragithub');
    });
});


