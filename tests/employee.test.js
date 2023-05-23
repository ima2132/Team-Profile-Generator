// employee info (Toph is used as the placeholder name)
const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Should instantiate Employee instance', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });

    it('Should set name via constructor arguments', () => {
        const name = 'Katara';
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it('Should set id via constructor argument', () => {
        const testValue = 100;
        const e = new Employee('Toph', testValue);
        expect(e.id).toBe(testValue);
    });

    it('Should set email via constructor argument', () => {
        const testValue = 'test@avatar.com';
        const e = new Employee('Toph', 0, testValue);
        expect(e.email).toBe(testValue);
    });

    describe('getName', () => {
        it('Should get name via getName()', () => {
            const testValue = 'Katara';
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });

    describe('getId', () => {
        it('Should get id via getId()', () => {
            const testValue = 100;
            const e = new Employee('Toph', testValue);
            expect(e.getId()).toBe(testValue);
        });
    });

    describe('getEmail', () => {
        it('Should get email via getEmail()', () => {
            const testValue = 'test@avatar.com';
            const e = new Employee('Toph', 0, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });

    describe('getRole', () => {
        it('Should return "Employee" via getRole()', () => {
            const testValue = 'Employee';
            const e = new Employee('Katara', 1, 'test@avatar.com');
            expect(e.getRole()).toBe(testValue);
        });
    });
});
