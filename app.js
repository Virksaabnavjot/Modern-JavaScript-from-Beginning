// Using the Console
console.time('timekeeper');
console.log("Modern Javascript");
let siblingsObject = {brother: "Navjot Singh", sister: "Jashan Deep"};
console.table(siblingsObject);
console.error("Test Error");
console.warn("Test Warning");
console.timeEnd('timekeeper');

/* A variable can only be name using - letters, numbers, underscore _ , $
a variable can't start with a number */

// Variables - var, let & const
const name = "Navjot Singh Virk"; 
let job = "Senior Technical Solutions Consultant";
var company = "Verizon Media";
console.log(name+" , "+job+" , "+company);

//const cant be reassign but can be mutated in case of objects and arrays
const numbers = [1,2,3,4];
console.log(numbers);
numbers.push(6);
console.log(numbers);