const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { data } = require('browserslist');

// const employee = new Employee ('John', 1, 'something@email.com');
// const manager = new Manager ('Man', 2, 'anotheremail@email.com', '999-999-9999');
// const engineer = new Engineer ('Eli', 3, 'emailmail@email.com', 'eliGit');
// const intern = new Intern ('Ian', 4, 'yetanotheremail@gmail.com', 'UofU');
// console.log(employee, manager, engineer, intern);

const questions = {
    employee: [],
    manager: {},
    engineer: {},
    intern: {} 
}

const qEmployee = [
    {
        type: 'input',
        name: 'name',
        message: 'Team Manager name',
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
    }]

// const managerQuestion =
// {
//     type: 'input',
//     name: 'office_number',
//     message: 'Email Adress',
//     validate: response => {
//         if (!response) {
//             console.log('Please enter an Email Adress');
//             return false;
//         }
//         return true;
//     }
// }

// const engineerQuestion =
// {
//     type: 'input',
//     name: 'github',
//     message: 'GitHub Username',
//     validate: response => {
//         if (!response) {
//             console.log('Please enter GitHub Username');
//             return false;
//         }
//         return true;
//     }
// }

// const internQuestion =
// {
//     type: 'input',
//     name: 'school',
//     message: 'Intern\'s School',
//     validate: response => {
//         if (!response) {
//             console.log('Please enter the intern\'s school');
//             return false;
//         }
//         return true;
//     }
// }

function promptForManager() {
    let data = [];
    inquirer.prompt(qEmployee)
        .then(response => {
            data.push(response);
            inquirer.prompt({
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
            })
                .then(response => {
                    data[0].officeNumber = response.officeNumber;
                    data[0].role = 'manager';
                    promptForEmployees(data);
                })
        })
}

function promptForEmployees(data) {

    inquirer.prompt([
        {
            type: 'list',
            name: 'continue',
            message: 'What would you like to do?',
            choices:
                [
                    'Add Engineer',
                    'Add Intern',
                    'Finish'
                ]
        }
    ])
        .then(response => {
            if (response.continue === 'Add Engineer') {
                addEngineer(data);
            } else if (response.continue === 'Add Intern') {
                addIntern(data);
            } else (finished(data));
        });
}

// add engineer
function addEngineer(data) {
    //questions 
    console.log('eng added');
    promptForEmployees(data);
}

// add intern 
function addIntern(data) {
    console.log('intern added');
    promptForEmployees(data);
}

function finished(data) {
    console.log('All Done', data);
}

promptForManager();