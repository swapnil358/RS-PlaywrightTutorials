//Array Example and operations

//Define an Array

const fruits = ["Apple", "Banana", "Cherry", "Date"]
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//add new element to Array
fruits.push("mango");
console.log(fruits); //[ 'Apple', 'Banana', 'Cherry', 'Date', 'mango' ]


//Remove last element from Array
fruits.pop();
console.log(fruits)     //[ 'Apple', 'Banana', 'Cherry', 'Date' ]

//Add element beginning to an Array
fruits.unshift("Chiku");
console.log(fruits)             //[ 'Chiku', 'Apple', 'Banana', 'Cherry', 'Date' ]

//Remove the first element of an array
fruits.shift();
console.log(fruits)  //[ 'Apple', 'Banana', 'Cherry', 'Date' ]

//Find the index of an Array
const ind = fruits.indexOf("Banana")
console.log(ind)        //1

//remove the element by index, Example 1
const index = fruits.indexOf("Banana")
const removeFruit = fruits.splice(index,1)
console.log(removeFruit)   //deleted element = [ 'Banana' ]
console.log(fruits)        //[ 'Apple', 'Cherry', 'Date' ]


const remove = fruits.splice(1,2) //it will delete two element after first element
console.log(remove)  //will delete [ 'Cherry', 'Date' ]
console.log(fruits)  //[ 'Apple' ]


//Iterate over an array

const fruits2 = ["Apple", "Banana", "Cherry", "Date"]
fruits2.forEach((fruits2,index) => {
    console.log(`${index} : ${fruits2}`)
})

// 0 : Apple
// 1 : Banana
// 2 : Cherry
// 3 : Date

for (let i = 0; i < fruits2.length; i++) {
    console.log(fruits2.at(i))
}
// Apple
// Banana
// Cherry
// Date

console.log("using while loop")

let i = 0;
while (i < fruits2.length) {
    console.log(fruits2[i]);
    i++;
}

// Apple
// Banana
// Cherry
// Date

