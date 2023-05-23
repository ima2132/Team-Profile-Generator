const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];

// manager prompts section
const generateManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "Please enter the team manager's name",
            name: 'name',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid name is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the team manager's employee ID",
            name: 'id',
            validate: function (answer) {
                if (answer <= 0) {
                    return console.log("A valid employee ID is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the team manager's email address",
            name: 'email',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid email address is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the team manager's office number",
            name: 'officeNum',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid office number is required.");
                }
                return true;
            }
        }
    ])
    .then(newManager => {
        const { name, id, email, officeNum } = newManager;
        const createManager = new Manager(name, id, email, officeNum);

        employees.push(createManager);
        console.log('Thanks for adding a manager for the team! ' + name);
    });
};
// adding employees prompt section 
function generateEmployee() {
    return inquirer.prompt([
        {
            type: 'list',
            message: "Please select the type of member you would like to add to your team:",
            choices: ['Engineer', 'Intern'],
            name: 'role'
        },
        {
            type: 'input',
            message: "Please enter the employee's name.",
            name: 'name',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid name is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the employee ID.",
            name: 'id',
            validate: function (answer) {
                if (answer <= 0) {
                    return console.log("A valid employee ID is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "Please enter the employee's email address.",
            name: 'email',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid email address is required.");
                }
                return true;
            }
        },
    
        // engineer prompt section 
        {
            type: 'input',
            message: "Please enter the employee's GitHub username.",
            name: 'github',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            },
            when: (answers) => answers.role === "Engineer"
        },
       
       // intern prompt section 
        {
            type: 'input',
            message: "Please enter the intern's school name.",
            name: 'school',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid school name is required.");
                }
                return true;
            },
            when: (answers) => answers.role === "Intern"
        },
        
     // option to add more members to the team section    
        {
            type: 'confirm',
            name: 'confirmMore',
            message: 'Would you like to add more members to your team?',
            default: true,
        }
    ])
    .then((newEmployee) => {
        let { name, id, email, role, github, school, confirmMore } = newEmployee;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log('Thanks for adding an engineer to the team! ' + name);
        } else if (role === 'Intern') {
            employee = new Intern(name, id, email, school);
            console.log('Thanks for adding an intern to the team! ' + name);
        }

        employees.push(employee);

        if (confirmMore) {
            return generateEmployee();
        } else {
            return employees;
        }
    });
}

// team profile gets generated in dist folder in team.html
const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success! Your team.html page has been generated in the dist folder!");
        }
    });
};

generateManager()
    .then(() => {
        return generateEmployee();
    })
    .then((employees) => {
        return generateHTML(employees);
    })
    .then((file) => {
        return writeFile(file);
    })
    .catch((err) => {
        console.log(err);
    });
