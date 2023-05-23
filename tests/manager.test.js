// manager info 
const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should create a Manager object with name, id, email, and office number', () => {
        const manager = new Manager('Aang', 1, 'aang@avatar.com', 'A1');

        expect(manager.name).toEqual('Aang');
        expect(manager.id).toEqual(1);
        expect(manager.email).toEqual('aang@avatar.com');
        expect(manager.officeNumber).toEqual('A1');
    });

    it('getRole() should return "Manager"', () => {
        const manager = new Manager('Aang', 1, 'aang@avatar.com', 'A1');

        expect(manager.getRole()).toEqual('Manager');
    });

    it('getOfficeNumber() should return the office number of the Manager', () => {
        const manager = new Manager('Aang', 1, 'aang@avatar.com', 'A1');

        expect(manager.getOfficeNumber()).toEqual('A1');
    });
});
