const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const employees = require('../lib/Employee');


// generates manager info 
const generateManager = (manager) => {
    return `
      <div class="manager-card">
        <h2>${manager.getName()}</h2>
        <h3>Manager</h3>
        <p>ID: ${manager.getId()}</p>
        <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
        <p>Office Number: ${manager.getOfficeNumber()}</p>
      </div>
    `;
  };
  
  // generates engineer info 
  const generateEngineer = (engineer) => {
    return `
      <div class="engineer-card">
        <h2>${engineer.getName()}</h2>
        <h3>Engineer</h3>
        <p>ID: ${engineer.getId()}</p>
        <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
        <p>GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
      </div>
    `;
  };
  
  // generates intern info 
  const generateIntern = (intern) => {
    return `
      <div class="intern-card">
        <h2>${intern.getName()}</h2>
        <h3>Intern</h3>
        <p>ID: ${intern.getId()}</p>
        <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p>School: ${intern.getSchool()}</p>
      </div>
    `;
  };
  
  // creates team profile 
  const generateHTML = (employees) => {
    const cards = employees.map((employee) => {
      if (employee instanceof Manager) {
        return generateManager(employee);
      } else if (employee instanceof Engineer) {
        return generateEngineer(employee);
      } else if (employee instanceof Intern) {
        return generateIntern(employee);
      }
    });
  
    const teamHTML = cards.join('');
  
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        <main>
          ${teamHTML}
        </main>
      </body>
      </html>
    `;
  };
  
  module.exports = generateHTML;
  