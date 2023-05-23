const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create an Intern object with name, id, email, and school', () => {
        const intern = new Intern('Sokka', 1, 'sokka@avatar.com', 'University of Water Tribe');

        expect(intern.name).toEqual('Sokka');
        expect(intern.id).toEqual(1);
        expect(intern.email).toEqual('sokka@avatar.com');
        expect(intern.school).toEqual('University of Water Tribe');
    });

    it('getRole() should return "Intern"', () => {
        const intern = new Intern('Sokka', 1, 'sokka@avatar.com', 'University of Water Tribe');

        expect(intern.getRole()).toEqual('Intern');
    });

    it('getSchool() should return the school of the Intern', () => {
        const intern = new Intern('Sokka', 1, 'sokka@avatar.com', 'University of Water Tribe');

        expect(intern.getSchool()).toEqual('University of Water Tribe');
    });
});
