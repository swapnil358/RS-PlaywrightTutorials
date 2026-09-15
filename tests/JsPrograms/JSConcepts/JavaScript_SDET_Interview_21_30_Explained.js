/*
================================================================================
JAVASCRIPT SDET INTERVIEW PREPARATION - 21 TO 30
================================================================================

Target: SDET / Automation Engineer - 10+ Years Experience

HOW TO USE THIS FILE
--------------------
1. Read the explanation before each concept.
2. First understand the TRADITIONAL approach.
3. Then compare it with the JAVASCRIPT BUILT-IN approach.
4. Pay attention to the inline comments.
5. Run this complete file with:
       node JavaScript_SDET_Interview_21_30_Explained.js

INTERVIEW STRATEGY
------------------
For an experienced SDET, do not only write code.
Be ready to explain:
- What the method/concept does
- Why you selected it
- Time complexity
- Space complexity
- Edge cases
- A practical automation/API example

================================================================================
*/


console.log("==============================================================");
console.log(" JavaScript SDET Interview Preparation - Concepts 21 to 30");
console.log("==============================================================\n");


// =============================================================================
// 21. map()
// =============================================================================
//
// EXPLANATION:
// map() is used when we want to TRANSFORM every element of an array.
//
// Important points:
// - map() returns a NEW array.
// - It does not normally change the original array.
// - The callback is executed once for each element.
//
// Example:
// Input  -> [1, 2, 3, 4, 5]
// Output -> [2, 4, 6, 8, 10]
//
// Interview question:
// Q: When should I use map()?
// A: Use map() when the output should contain a transformed value
//    corresponding to every input element.
//
// Time Complexity: O(n)
// Space Complexity: O(n) for the resulting array
//


// ------------------------- Traditional Approach ------------------------------

function doubleNumbersTraditional(arr) {
    const result = [];

    // Visit every element and manually create the transformed array.
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }

    return result;
}


// ------------------------- JavaScript Built-in -------------------------------

function doubleNumbersUsingMap(arr) {

    // map() applies the expression to every element.
    // A new array is returned.
    return arr.map(num => num * 2);
}

console.log("21. map()");
console.log("Traditional :", doubleNumbersTraditional([1, 2, 3, 4, 5]));
console.log("Built-in    :", doubleNumbersUsingMap([1, 2, 3, 4, 5]));


// SDET example: extracting values from an API response.
const usersForMap = [
    { id: 101, name: "John" },
    { id: 102, name: "David" },
    { id: 103, name: "Smith" }
];

// map() is very useful when extracting fields from API response objects.
const userNames = usersForMap.map(user => user.name);

console.log("SDET Example - User names:", userNames);



// =============================================================================
// 22. filter()
// =============================================================================
//
// EXPLANATION:
// filter() is used when we want to SELECT elements based on a condition.
//
// Example:
// Input  -> [1, 2, 3, 4, 5, 6]
// Output -> [2, 4, 6]
//
// Important:
// - filter() returns a NEW array.
// - Only elements for which the callback returns true are included.
//
// Interview difference:
//
// map()       -> TRANSFORM elements
// filter()    -> SELECT elements
//
// Time Complexity: O(n)
// Space Complexity: O(n) in the worst case
//


// ------------------------- Traditional Approach ------------------------------

function getEvenNumbersTraditional(arr) {
    const result = [];

    for (const num of arr) {

        // Keep only numbers divisible by 2.
        if (num % 2 === 0) {
            result.push(num);
        }
    }

    return result;
}


// ------------------------- JavaScript Built-in -------------------------------

function getEvenNumbersUsingFilter(arr) {

    // filter() keeps an element only when the condition is true.
    return arr.filter(num => num % 2 === 0);
}

console.log("\n22. filter()");
console.log("Traditional :", getEvenNumbersTraditional([1, 2, 3, 4, 5, 6]));
console.log("Built-in    :", getEvenNumbersUsingFilter([1, 2, 3, 4, 5, 6]));


// SDET example: get failed test cases.
const testResults = [
    { test: "Login", status: "PASS" },
    { test: "Search", status: "FAIL" },
    { test: "Checkout", status: "PASS" },
    { test: "Payment", status: "FAIL" }
];

// Select only failed tests.
const failedTests = testResults.filter(test => test.status === "FAIL");

console.log("SDET Example - Failed tests:", failedTests);



// =============================================================================
// 23. reduce()
// =============================================================================
//
// EXPLANATION:
// reduce() is used when multiple array values need to be ACCUMULATED
// into a single result.
//
// Common examples:
// - Sum
// - Product
// - Frequency counting
// - Grouping
// - Finding totals
//
// Syntax:
// array.reduce((accumulator, currentValue) => ..., initialValue)
//
// Time Complexity: O(n)
//


// ------------------------- Traditional Approach ------------------------------

function sumTraditional(arr) {
    let total = 0;

    // Add every number to the accumulator.
    for (const num of arr) {
        total += num;
    }

    return total;
}


// ------------------------- JavaScript Built-in -------------------------------

function sumUsingReduce(arr) {

    // total = accumulator
    // num   = current array element
    // 0     = initial accumulator value
    return arr.reduce((total, num) => total + num, 0);
}

console.log("\n23. reduce()");
console.log("Traditional :", sumTraditional([10, 20, 30, 40]));
console.log("Built-in    :", sumUsingReduce([10, 20, 30, 40]));


// ------------------------- reduce() Frequency Example -----------------------

// reduce() can also create an object containing character frequencies.
function characterFrequencyUsingReduce(str) {

    return [...str].reduce((count, ch) => {

        // If character exists, increment it.
        // Otherwise start its count at 1.
        count[ch] = (count[ch] || 0) + 1;

        // Always return the accumulator for the next iteration.
        return count;

    }, {}); // {} is the initial accumulator.
}

console.log(
    "Character frequency:",
    characterFrequencyUsingReduce("hello")
);



// =============================================================================
// 24. Map / Set
// =============================================================================
//
// EXPLANATION:
//
// SET:
// - Stores UNIQUE values.
// - Duplicate values are automatically ignored.
// - Maintains insertion order.
//
// MAP:
// - Stores KEY -> VALUE pairs.
// - Keys can be of different data types.
// - Useful for lookup and frequency counting.
//
// Set methods:
// add(), has(), delete(), clear(), size
//
// Map methods:
// set(), get(), has(), delete(), clear(), size
//
// Time complexity of average Set/Map lookup:
// O(1)
//
//


// ------------------------- Set Example ---------------------------------------

const numbersWithDuplicates = [1, 2, 2, 3, 3, 4];

// Set automatically removes duplicate values.
const uniqueNumbers = [...new Set(numbersWithDuplicates)];

console.log("\n24. Set");
console.log("Original :", numbersWithDuplicates);
console.log("Unique   :", uniqueNumbers);


// ------------------------- Map Example --------------------------------------

const values = ["A", "B", "A", "C", "B", "A"];

const frequencyMap = new Map();

for (const value of values) {

    // get() returns the existing count.
    // If the value is not present, use 0.
    frequencyMap.set(
        value,
        (frequencyMap.get(value) || 0) + 1
    );
}

console.log("Map frequency:", [...frequencyMap]);


// Interview question:
// Q: Set vs Map?
//
// Set -> stores only values.
// Map -> stores key-value pairs.
//
// Example:
// Set  -> [1, 2, 3]
// Map  -> ["A" -> 3, "B" -> 2]



// =============================================================================
// 25. Object Manipulation
// =============================================================================
//
// EXPLANATION:
// Objects are heavily used in JavaScript automation, especially for:
// - Test data
// - API request bodies
// - API response validation
// - Configuration
// - Page/component data
//
// Important operations:
// - Read
// - Add
// - Update
// - Delete
// - Object.keys()
// - Object.values()
// - Object.entries()
//


const user = {
    name: "John",
    age: 30,
    role: "SDET"
};

console.log("\n25. Object Manipulation");

// Read a property using dot notation.
console.log("Name:", user.name);

// Read a property using bracket notation.
console.log("Age:", user["age"]);


// Add a new property.
user.company = "ABC";


// Update an existing property.
user.age = 31;


// Delete a property.
delete user.role;

console.log("Updated object:", user);


// Get all property names.
console.log("Object.keys():", Object.keys(user));


// Get all property values.
console.log("Object.values():", Object.values(user));


// Get key-value pairs.
console.log("Object.entries():", Object.entries(user));


// Iterate through key-value pairs.
Object.entries(user).forEach(([key, value]) => {
    console.log(`  ${key} -> ${value}`);
});


// SDET/API example.
const apiResponse = {
    status: 200,
    message: "Success",
    data: {
        userId: 101,
        name: "John"
    }
};

// Access nested API data.
console.log("API userId:", apiResponse.data.userId);



// =============================================================================
// 26. Destructuring
// =============================================================================
//
// EXPLANATION:
// Destructuring allows us to extract values from arrays or objects
// into variables in a concise way.
//
// Very common in:
// - API automation
// - Function parameters
// - Test data
// - Configuration objects
//


// ------------------------- Object Destructuring -------------------------------

const employee = {
    name: "John",
    age: 30,
    role: "SDET"
};

// Extract properties into variables.
const { name, age, role } = employee;

console.log("\n26. Object Destructuring");
console.log(name, age, role);


// Rename a destructured property.
const { name: employeeName } = employee;

console.log("Renamed variable:", employeeName);


// Provide a default value when property does not exist.
const { city = "Pune" } = employee;

console.log("Default city:", city);


// ------------------------- Array Destructuring -------------------------------

const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log("Array destructuring:", first, second, third);


// Skip an array element.
const [firstValue, , thirdValue] = numbers;

console.log("Skipping second:", firstValue, thirdValue);


// ------------------------- Nested Destructuring ------------------------------

const responseForDestructuring = {
    status: 200,
    data: {
        userId: 101,
        name: "John"
    }
};

// Extract nested API values directly.
const {
    status,
    data: {
        userId,
        name: responseUserName
    }
} = responseForDestructuring;

console.log("Nested API values:", status, userId, responseUserName);



// =============================================================================
// 27. Spread / Rest
// =============================================================================
//
// EXPLANATION:
//
// SPREAD:
// - Expands an iterable/object into individual values.
// - Commonly used for copying and combining arrays/objects.
//
// REST:
// - Collects multiple values into an array.
// - Commonly used in function parameters.
//
// Easy interview rule:
//
// Spread -> EXPANDS
// Rest   -> COLLECTS
//


// ------------------------- Spread with Arrays -------------------------------

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Expand both arrays into a new array.
const combined = [...arr1, ...arr2];

console.log("\n27. Spread / Rest");
console.log("Combined array:", combined);


// Create a shallow copy of an array.
const copiedArray = [...arr1];

console.log("Copied array:", copiedArray);


// ------------------------- Spread with Objects -------------------------------

const baseUser = {
    name: "John",
    age: 30
};

// Copy existing properties and add a new property.
const updatedUser = {
    ...baseUser,
    role: "SDET"
};

console.log("Spread object:", updatedUser);


// ------------------------- Rest Parameter -----------------------------------

function sumUsingRest(...numbers) {

    // numbers contains all arguments as an array.
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log("Rest parameter:", sumUsingRest(10, 20, 30, 40));


// Rest with array destructuring.
const [firstNumber, ...remainingNumbers] = [10, 20, 30, 40];

console.log("First:", firstNumber);
console.log("Remaining:", remainingNumbers);


// Interview:
// const result = [...arr]        -> Spread
// function test(...args) {}      -> Rest



// =============================================================================
// 28. Closures
// =============================================================================
//
// EXPLANATION:
// A closure occurs when an inner function remembers/accesses variables
// from its outer lexical scope even after the outer function has finished.
//
// This is one of the MOST IMPORTANT JavaScript interview concepts.
//
// Example:
// createCounter() creates count.
// It returns an inner function.
// The inner function continues to remember count.
//
//


function createCounter() {

    // This variable belongs to createCounter().
    let count = 0;

    // Return an inner function.
    return function counter() {

        // The inner function can still access count.
        count++;

        return count;
    };
}


// createCounter() has completed, but count is retained by the closure.
const counter = createCounter();

console.log("\n28. Closures");
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// ------------------------- Practical SDET Example ----------------------------

function createTestConfig(baseUrl) {

    // baseUrl is captured by the returned function.
    return {
        getUrl: function(endpoint) {

            // baseUrl is still available here because of closure.
            return baseUrl + endpoint;
        }
    };
}

const testConfig = createTestConfig("https://example.com");

console.log("SDET closure:", testConfig.getUrl("/login"));
console.log("SDET closure:", testConfig.getUrl("/users"));


// Interview definition:
// "A closure is a function together with its lexical environment."



// =============================================================================
// 29. Hoisting
// =============================================================================
//
// EXPLANATION:
// Hoisting describes how JavaScript processes declarations before execution.
//
// Important differences:
//
// var:
// - Declaration is hoisted.
// - It is initialized with undefined.
//
// let / const:
// - Declarations are hoisted.
// - They are NOT initialized before their declaration.
// - Accessing them before initialization causes ReferenceError.
// - This period is called the Temporal Dead Zone (TDZ).
//
// Function declarations:
// - Function declaration is available before its declaration.
//
//


// ------------------------- var Hoisting --------------------------------------

console.log("\n29. Hoisting");

// var declaration is effectively available here as undefined.
console.log("var before declaration:", hoistedVar);

var hoistedVar = 10;


// ------------------------- Function Declaration ------------------------------

// Function declaration can be called before its declaration.
hoistedFunction();

function hoistedFunction() {
    console.log("Function declaration was successfully called.");
}


// IMPORTANT:
// Do NOT uncomment these examples unless you want to see ReferenceError:
//
// console.log(letVariable);
// let letVariable = 10;
//
// console.log(constVariable);
// const constVariable = 10;
//
// They fail because let/const are in the Temporal Dead Zone
// before their initialization.


console.log("Hoisting interview points:");
console.log("- var: hoisted and initialized as undefined.");
console.log("- let/const: hoisted but remain in TDZ until initialized.");
console.log("- Function declarations: callable before declaration.");



// =============================================================================
// 30. Scope
// =============================================================================
//
// EXPLANATION:
// Scope determines WHERE a variable can be accessed.
//
// Important types:
//
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Lexical Scope
//
// var:
// - Function scoped
//
// let / const:
// - Block scoped
//
// Inner functions can access variables from outer lexical scopes.
// This is the foundation of closures.
//
//


// ------------------------- Global Scope --------------------------------------

let globalVariable = "Global";


// ------------------------- Function Scope ------------------------------------

function demonstrateScope() {

    // var is function scoped.
    var functionVariable = "Function";

    // let and const are block scoped.
    if (true) {

        let blockVariable = "Block";
        const blockConstant = "Block Constant";

        console.log("\n30. Scope");
        console.log("Global variable  :", globalVariable);
        console.log("Function variable:", functionVariable);
        console.log("Block variable   :", blockVariable);
        console.log("Block constant   :", blockConstant);
    }

    // blockVariable and blockConstant are NOT accessible here.
    // console.log(blockVariable); // ReferenceError
    // console.log(blockConstant); // ReferenceError
}

demonstrateScope();


// ------------------------- Lexical Scope -------------------------------------

function outer() {

    // Variable belongs to outer lexical scope.
    let message = "Hello from outer scope";

    function inner() {

        // inner() can access message from outer().
        console.log("Lexical scope:", message);
    }

    inner();
}

outer();


// =============================================================================
// FINAL INTERVIEW REVISION
// =============================================================================
//
// map()        -> TRANSFORM
// filter()     -> SELECT
// reduce()     -> ACCUMULATE
//
// Set          -> UNIQUE VALUES
// Map          -> KEY / VALUE
//
// Spread       -> EXPAND
// Rest         -> COLLECT
//
// Closure      -> INNER FUNCTION REMEMBERS OUTER SCOPE
//
// var          -> FUNCTION SCOPED
// let/const    -> BLOCK SCOPED
//
// var          -> HOISTED + initialized undefined
// let/const    -> HOISTED + TDZ
// function     -> function declaration is hoisted
//
// Scope        -> determines variable accessibility
//
// =============================================================================
// END OF FILE
// =============================================================================
