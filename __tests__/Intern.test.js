const Intern = require('../lib/intern.js');

describe('Intern class', () => {
    describe('Create new Intern', () => {
        it('should create a new intern with a school and role of intern', () => {
            const intern = new Intern('John', 1, 'someemail@email.com', 'UofU')

            expect(intern.school).toBe('UofU');
            expect(intern.role).toBe('intern');
        })
    })
})