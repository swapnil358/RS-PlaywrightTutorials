
console.log("first program")
console.log("second program")
console.log("third program")
console.log("fourth program")

setTimeout(function ()
{
    console.log("fifth program")
}, 2000)
console.log("sixth program")     // it will print this first instead of
                                // waiting function 2sec

// first program
// second program
// third program
// fourth program
// sixth program
// fifth program
