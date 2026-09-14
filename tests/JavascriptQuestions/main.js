
// Question-Create an inheritance relationship between a parent and child class.
// Invoke the parent constructor from the child class.
// Create main.js to call parent class methods from a child class object.



//Create an object of the Student class
import Student from "./student";

const student = new Student('John Doe', 20, 'A')

// Call the method to get the student's details
console.log(student.getStudentDetails())

