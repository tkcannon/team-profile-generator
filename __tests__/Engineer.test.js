const Engineer = require('../lib/Engineer.js');

describe('Engineer class', () => {
    describe('Create new Engineer', () => {
        it('should create a new engineer with a github link and role of engineer', () => {
            const engineer = new Engineer('John', 1, 'someemail@email.com', 'johnsmith')

            expect(engineer.github).toBe('johnsmith');
            expect(engineer.role).toBe('engineer');
        })
    })
})