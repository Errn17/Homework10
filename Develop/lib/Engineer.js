// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//Requiring the employee page to use the constructor function that was setup
const Employee = require("./Employee");

//class for the Engineer, will also be using the emplyee one to avoid duplicating the constructor parts. Will utilize the "super" keyword
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
