const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template');
const { writeFile, copyFile } = require("./utils/generate-site");
const generatePage = require('./src/page-template');

const questions = {

    employee: [{
        type: 'input',
        name: 'name',
        message: 'Employee Name',
        validate: response => {
            if (!response) {
                console.log('Please enter the Manager\'s name');
                return false
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID',
        validate: response => {
            if (!response) {
                console.log('Please enter an Employee ID');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email Adress',
        validate: response => {
            if (!response) {
                console.log('Please enter an Email Adress');
                return false;
            }
            return true;
        }
    }],

    manager: {
        type: 'input',
        name: 'officeNumber',
        message: 'Manager\'s Office Number',
        validate: response => {
            if (!response) {
                console.log('Please add an Office Phone Number for the Manager');
                return false;
            }
            return true;
        }
    },

    engineer: {
        type: 'input',
        name: 'github',
        message: 'Engineer\'s GitHub Username',
        validate: response => {
            if (!response) {
                console.log('Please enter the Engineer\'s GitHub Username')
                return false;
            }
            return true;
        }
    },

    intern: {
        type: 'input',
        name: 'school',
        message: 'Intern\'s School',
        validate: response => {
            if (!response) {
                console.log('Please enter the intern\'s school');
                return false;
            }
            return true;
        }
    }
}

function promptUser(employees) {

    inquirer.prompt([
        {
            type: 'list',
            name: 'continue',
            message: 'What would you like to do?',
            choices: [
                'Add Engineer',
                'Add Intern',
                'Finish'
            ]
        }
    ])
        .then(response => {
            if (response.continue === 'Add Engineer') {
                employees.push(promptForEmployee('Engineer', employees));
            } else if (response.continue === 'Add Intern') {
                employees.push(promptForEmployee('Intern', employees));
            } else { return employees };
        })
}

function promptForEmployee(role, employees) {
    if (!employees) {
        employees = [];
    }

    console.log(`
========================
Information For ${role}
========================
    `)

    let employee = {};

    inquirer.prompt(questions.employee)
        .then(response => {
            employee = response;
            if (role === "Manager") {
                return inquirer.prompt(questions.manager)
            } else if (role === "Engineer") {
                return inquirer.prompt(questions.engineer)
            } else if (role === "Intern") {
                return inquirer.prompt(questions.intern)
            } else {
                console.log(`Role cannot be determined for ${role}`);
            }
        })
        .then(response => {
            if (role === "Manager") {
                employee.officeNumber = response.officeNumber;
                return new Manager(employee.name, employee.id, employee.email, employee.officeNumber);
            } else if (role === "Engineer") {
                employee.github = response.github;
                return new Engineer(employee.name, employee.id, employee.email, employee.github);
            } else if (role === "Intern") {
                employee.school = response.school;
                return new Intern(employee.name, employee.id, employee.email, employee.school);
            }
        })
        .then(employee => {
            employees.push(employee);
            promptUser(employees);
        })
}


promptForEmployee('Manager');