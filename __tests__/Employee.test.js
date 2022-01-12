//expect name id email getname getid getemail getrole

const Employee = require('../lib/Employee.js');

describe('Employee class', () => {
    describe('Create New Employee', () => {
        it('should create an object with name, id, and email if provided valid arguments', () => {
            const employee = new Employee('John', 1, 'someemail@email.com');

            expect(employee.name).toEqual('John');
            expect(employee.id).toEqual('03');
            expect(employee.email).toEqual('someemail@email.com');
        })
        it('should throw an error if no argument provided', () => {
            expect(new Employee()).toThrow();
        })
        // throw error if no id
        it('should throw an error if no argument provided', () => {
            const employee = () => new Employee('John', '', 'someemail@email.com');

            expect(employee).toThrow();
        })
        // throw error if no email
        it('should throw an error if no argument provided', () => {
            const employee = () => new Employee('John', 1, '');

            expect(employee).toThrow();
        })
        // thow error if name is not string
        it('should throw an error if name is not a string', () => {
            const employee = () => new Employee( 1, 1, 'someemail@email.com');

            expect(employee).toThrow();
        })
        // throw error if id is not number
        it('should throw an error if id is not a number', () => {
            const employee = () => new Employee( 'John', 'a', 'someemail@email.com');

            expect(employee).toThrow();
        })
        // throw error if email is not string
        it('should throw an error if email is not a string', () => {
            const employee = () => new Employee( 'John', 1, 1);

            expect(employee).toThrow();
        })
    })
})