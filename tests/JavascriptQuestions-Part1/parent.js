//Define the parent class
import Student from "./student";

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //method to get the person's details
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
export default Person;