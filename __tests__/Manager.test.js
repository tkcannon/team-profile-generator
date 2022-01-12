const Manager = require('../lib/Manager.js');

describe('Manager class', () => {
    describe('Create new Manager', () => {
        it('should create a new manager with an officeNumber and role of manager', () => {
            const manager = new Manager('John', 1, 'someemail@email.com', '999-999-9999')

            expect(manager.officeNumber).toBe('999-999-9999');
            expect(manager.role).toBe('manager');
        })
        it('should throw an error if office number has no argument', () => {
            const manager = () => new Manager('John', 1, 'someemail@email.com');

            expect(manager).toThrow();
        })
        it('should throw an error if number is not a number', () => {
            const manager = () => new Manager('John', 1, 'somemail@email.com', 'jfadfasf');

            expect(manager).toThrow();
        })
    })
})