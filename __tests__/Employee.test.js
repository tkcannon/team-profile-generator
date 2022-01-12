const Employee = require('../lib/Employee.js');

describe('Employee class', () => {
    describe('Create New Employee', () => {
        it('should create an object with name, id, and email if provided valid arguments', () => {
            const employee = new Employee('John', 1, 'someemail@email.com');

            expect(employee.name).toBe('John');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('someemail@email.com');
        })
    })
})