// Can a javascript object hold a function as a property? Explain with a example.

const person= {
    name : "john",
    age: 30,
    greet: function(){
        console.log("Hello my name is " + this.name)
    }
}

console.log(person.name)
person.greet();


//*Types of function

function sayHello(){
    return "my name is Swapnil";
}

const greeting = sayHello();
console.log(greeting)

const greeD = function(name){
    return "my name is "+ name;
}

console.log(greeD(  "Dustin"))