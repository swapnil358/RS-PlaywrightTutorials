import Person from "./parent";

//Define the child class that inherits from Person
class Student extends Person {
    constructor(name, age, grade) {
        // Call the parent class constructor using super
        super(name, age);
        this.grade = grade;
    }

    //Method to get the student's details
    getStudentDetails(){
        //call the parent class method
        const parentDetails = super.getDetails();
        return `${parentDetails}, Grade: ${this.grade}`
    }
}

//Export the student class
export default Student;