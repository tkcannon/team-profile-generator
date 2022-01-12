const Engineer = require('../lib/Engineer.js');

describe('Engineer class', () => {
    describe('Create new Engineer', () => {
        it('should create a new engineer with a github link and role of engineer', () => {
            const engineer = new Engineer('John', 1, 'someemail@email.com', 'johnsmith')

            expect(engineer.github).toBe('johnsmith');
            expect(engineer.role).toBe('engineer');
        })
        it('should throw an error if github number has no argument', () => {
            const engineer = () => new Engineer('John', 1, 'someemail@email.com');

            expect(engineer).toThrow();
        })
        it('should throw an error if github is not a string', () => {
            const engineer = () => new Engineer('John', 1, 'somemail@email.com', 1111);

            expect(engineer).toThrow();
        })
    })
})