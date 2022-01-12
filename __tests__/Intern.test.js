const Intern = require('../lib/intern.js');

describe('Intern class', () => {
    describe('Create new Intern', () => {
        it('should create a new intern with a school and role of intern', () => {
            const intern = new Intern('John', 1, 'someemail@email.com', 'UofU')

            expect(intern.school).toBe('UofU');
            expect(intern.role).toBe('intern');
        })
        it('should throw an error if school has no argument', () => {
            const intern = () => new Intern('John', 1, 'someemail@email.com');

            expect(intern).toThrow();
        })
        it('should throw an error if school is not a string', () => {
            const intern = () => new Intern('John', 1, 'somemail@email.com', 1111);

            expect(intern).toThrow();

        })
    })
})