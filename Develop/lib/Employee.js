// TODO: Write code to define and export the Employee class

//Employee class
class Employee {
  //constructor function for the emplyee data to prevent repeating myself for each employee
  constructor(name, id, email) {
    this.name;
    this.id;
    this.email;
  }

  //gets the data the user inputs, then returns it
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
