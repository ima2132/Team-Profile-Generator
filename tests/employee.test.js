// employee info (Appa and Momo are used as placeholder names)
const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Should instantiate Employee instance', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });

    it('Should set name via constructor arguments', () => {
        const name = 'Appa';
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it('Should set id via constructor argument', () => {
        const testValue = 100;
        const e = new Employee('Appa', testValue);
        expect(e.id).toBe(testValue);
    });

    it('Should set email via constructor argument', () => {
        const testValue = 'test@avatar.com';
        const e = new Employee('Appa', 0, testValue);
        expect(e.email).toBe(testValue);
    });

    describe('getName', () => {
        it('Should get name via getName()', () => {
            const e = new Employee('Appa');
            expect(e.getName()).toBe('Appa');
        });
    });

    describe('getId', () => {
        it('Should get id via getId()', () => {
            const testValue = 100;
            const e = new Employee('Appa', testValue);
            expect(e.getId()).toBe(testValue);
        });
    });

    describe('getEmail', () => {
        it('Should get email via getEmail()', () => {
            const testValue = 'test@avatar.com';
            const e = new Employee('Appa', 0, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });

    describe('getRole', () => {
        it('Should return "Employee" via getRole()', () => {
            const testValue = 'Employee';
            const e = new Employee('Momo', 7, 'test@avatar.com');
            expect(e.getRole()).toBe(testValue);
        });
    });
});

