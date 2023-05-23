// intern info
const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should create an Intern object with name, id, email, and school', () => {
        const intern1 = new Intern('Sokka', 4, 'sokka@avatar.com', 'University of Water Tribe');
        const intern2 = new Intern('Toph', 5, 'toph@avatar.com', 'School of Metalbending');

        expect(intern1.name).toEqual('Sokka');
        expect(intern1.id).toEqual(4);
        expect(intern1.email).toEqual('sokka@avatar.com');
        expect(intern1.school).toEqual('University of Water Tribe');

        expect(intern2.name).toEqual('Toph');
        expect(intern2.id).toEqual(5);
        expect(intern2.email).toEqual('toph@avatar.com');
        expect(intern2.school).toEqual('School of Metalbending');
    });

    it('getRole() should return "Intern"', () => {
        const intern1 = new Intern('Sokka', 4, 'sokka@avatar.com', 'University of Water Tribe');
        const intern2 = new Intern('Toph', 5, 'toph@avatar.com', 'School of Metalbending');

        expect(intern1.getRole()).toEqual('Intern');
        expect(intern2.getRole()).toEqual('Intern');
    });

    it('getSchool() should return the school of the Intern', () => {
        const intern1 = new Intern('Sokka', 4, 'sokka@avatar.com', 'University of Water Tribe');
        const intern2 = new Intern('Toph', 5, 'toph@avatar.com', 'School of Metalbending');

        expect(intern1.getSchool()).toEqual('University of Water Tribe');
        expect(intern2.getSchool()).toEqual('School of Metalbending');
    });
});
