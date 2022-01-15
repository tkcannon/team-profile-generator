const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/page-template');
const { writeFile, copyFile } = require("./utils/generate-site");

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

// Add Manager
// function promptForManager() {
//     let employees = [];
//     let employee = {};
//     console.log(`
// ======================================
// Input Information for the Team Manager
// ======================================
//         `);
//     inquirer.prompt(questions.employee)
//         .then(response => {
//             employee = response;
//             return inquirer.prompt(questions.engineer)
//         })
//         .then(response => {
//             employee.github = response.github;
//             const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);
//             employees.push(engineer);
//             console.log(employees);
//             promptForEmployees(employees);
//         })

// }

// // Add Engineer
// function addEngineer(employees) {
//     let employee = {};
//     console.log(`
//     ========================
//     Information For Engineer
//     ========================
//     `);
//     inquirer.prompt(questions.employee)
//         .then(response => {
//             employee = response;
//             return inquirer.prompt(questions.engineer)
//         })
//         .then(response => {
//             employee.github = response.github;
//             const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);
//             employees.push(engineer);
//             promptForEmployees(employees);
//         })

// }

// // Add Intern 
// function addIntern(employees) {
//     let employee = {};
//     console.log(`
// ========================
// Information For Intern
// ========================
//     `);
//     inquirer.prompt(questions.employee)
//         .then(response => {
//             let data = response;
//             inquirer.prompt(questions.intern)
//                 .then(response => {
//                     data.school = response.school;
//                     const intern = new Intern(data.name, data.id, data.email, data.school);
//                     employees.push(intern);
//                     promptForEmployees(employees);
//                 })
//         })
// }

function promptUser(employees) {
    if (!employees) {
        promptForEmployee("Manager", employees = []);
    } else {
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
                    promptForEmployee('Engineer', employees);
                } else if (response.continue === 'Add Intern') {
                    promptForEmployee('Intern', employees);
                } else { return employees };
            });
    }
}

function promptForEmployee(role, employees) {

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
                const manager = new Manager(employee.name, employee.id, employee.email, employee.officeNumber);
                employees.push(manager);
            } else if (role === "Engineer") {
                employee.github = response.github;
                const engineer = new Engineer(employee.name, employee.id, employee.email, employee.github);
                employees.push(engineer);
            } else if (role === "Intern") {
                employee.school = response.school;
                const intern = new Intern(employee.name, employee.id, employee.email, employee.school);
                employees.push(intern);
            }
            promptUser(employees);
        })
}


// promptForManager()
//     .then(employees => {
//         return promptForEmployees(employees);
//     })
//     .then(employees => {
//         return generateHtml(employees);
//     })
//     .then(html => {
//         return writeFile(html);
//     })
//     .catch(err => {
//         console.log(err);
//     });
promptUser()
    .then(employees => {
        return generateHtml(employees);
    })
    .then(html => {
        return writeFile(html);
    })
    .catch(err => {
        console.log(err);
    })
    ;