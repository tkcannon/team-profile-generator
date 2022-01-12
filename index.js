const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

function init () {
 const employee = new Employee ('John', 1, 'something@email.com');
 const manager = new Manager ('Man', 2, 'anotheremail@email.com', '999-999-9999');
 const engineer = new Engineer ('Eli', 3, 'emailmail@email.com', 'eliGit');
 const intern = new Intern ('Ian', 4, 'yetanotheremail@gmail.com', 'UofU');
 console.log(employee, manager, engineer, intern);
}

init();