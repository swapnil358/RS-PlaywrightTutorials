// A classic programming interview question that involves using array methods (filter, map, reduce),
// and JavaScript objects.
//
//     Create an array of objects representing students with their names and scores,
//     and get the below result with optimized solution.
//
//     Filters out students who passed in the exam with score more than 36.
// Update Passed students names to uppercase.
//     Total score of all passing students.


//Filters out students who passed in the exam with score more than 36.
const students = [
    {name: "alice", score: 25},
    {name: "bob", score: 65},
    {name: "David", score: 45},
    {name: "eve", score: 75},
    {name: "reign", score: 35}]

const passedStudent = students.filter(student => student.score>=36)
console.log(passedStudent);


// Update Passed students names to uppercase.
const uppercaseNames = passedStudent.map(students=>students.name.toUpperCase())
console.log(uppercaseNames)

//Total score of all passing students.
const totalScoreOfPassedStudent = passedStudent.reduce(function (acc, student){
    acc = acc + student.score;
    return acc;
},0)

console.log(totalScoreOfPassedStudent)




