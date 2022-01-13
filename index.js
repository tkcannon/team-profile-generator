const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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

let employees = [];

// Add Manager
function promptForManager() {
    console.log(`
======================================
Input Information for the Team Manager
======================================
        `)
    inquirer.prompt(questions.employee)
        .then(response => {
            let data = response;
            inquirer.prompt(questions.manager)
                .then(response => {
                    data.officeNumber = response.officeNumber;
                    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
                    employees.push(manager);
                    promptForEmployees();
                })
        })
}

function promptForEmployees() {

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
                addEngineer();
            } else if (response.continue === 'Add Intern') {
                addIntern();
            } else (generatePage());
        });
}

// Add Engineer
function addEngineer() {
    console.log(`
========================
Information For Engineer
========================
    `);
    inquirer.prompt(questions.employee)
        .then(response => {
            let data = response;
            inquirer.prompt(questions.engineer)
                .then(response => {
                    data.github = response.github;
                    const engineer = new Engineer(data.name, data.id, data.email, data.github);
                    employees.push(engineer);
                    promptForEmployees();
                })
        })
}

// Add Intern 
function addIntern() {
    console.log(`
========================
Information For Intern
========================
    `);
    inquirer.prompt(questions.employee)
        .then(response => {
            let data = response;
            inquirer.prompt(questions.intern)
                .then(response => {
                    data.school = response.school;
                    const intern = new Intern(data.name, data.id, data.email, data.school);
                    employees.push(intern);
                    promptForEmployees();
                })
        })
}

function generatePage() {
    console.log('All Done', employees);
}

promptForManager();