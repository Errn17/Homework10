const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//Manager function prompting the user with the following questions, will store the data until the function is called to push to the html
function promptManager() {
  inquirer
    .prompt([
      {
        type: "Input",
        name: "Name",
        message: "Managers name: ",
      },
      {
        type: "Input",
        name: "Email",
        message: "Managers email: ",
      },
      {
        type: "Input",
        name: "Id",
        message: "Managers id: ",
      },
      {
        type: "Input",
        name: "OfficeNumber",
        message: "Managers office number: ",
      },
    ])
    .then((res) => {
      const manager = new Manager(
        res.Name,
        res.Email,
        res.Id,
        res.OfficeNumber
      );
      teamArray.push(manager);
      addEmployees();
    });
}

//Engineer prompt function
function promptEngineer() {
  inquirer
    .prompt([
      {
        type: "Input",
        name: "Name",
        message: "Engineers name: ",
      },
      {
        type: "Input",
        name: "Email",
        message: "Engineers email: ",
      },
      {
        type: "Input",
        name: "Id",
        message: "Engineers id: ",
      },
      {
        type: "Input",
        name: "Github",
        message: "Engineers Github profile: ",
      },
    ])
    .then((res) => {
      const engineer = new Engineer(res.Name, res.Email, res.Id, res.Github);
      teamArray.push(engineer);
      addEmployees();
    });
}

//Intern prompt function
function promptIntern() {
  inquirer
    .prompt([
      {
        type: "Input",
        name: "Name",
        message: "Interns name: ",
      },
      {
        type: "Input",
        name: "Email",
        message: "Interns email: ",
      },
      {
        type: "Input",
        name: "Id",
        message: "Interns id: ",
      },
      {
        type: "Input",
        name: "School",
        message: "Interns school name: ",
      },
    ])
    .then((res) => {
      const intern = new Intern(res.Name, res.Email, res.Id, res.School);
      teamArray.push(intern);
      addEmployees();
    });
}
