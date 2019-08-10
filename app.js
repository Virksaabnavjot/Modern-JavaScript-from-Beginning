// Using the Console
console.time('timekeeper');
console.log("Modern Javascript");
let siblingsObject = {brother: "Navjot Singh", sister: "Jashan Deep"};
console.table(siblingsObject);
console.error("Test Error");
console.warn("Test Warning");
console.timeEnd('timekeeper');

/* A variable can only be named using - letters, numbers, underscore _ , $
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

// Data Types in JavaScript
/* 
----Primitive Data Types----
String
Number
Boolean
Null 
Undefined
Symbols (ES6)

----Reference Types----
Arrays
Obejct Literals
Functions
Dates
Anything Else.....

----JavaScript is a Dynamically Typed Language----

Types are assocaited with values but not variable, meaning if their was a 
variable that was assigned a string, you can assign a number to it and 
it will not result in an error.

Same variable can hold multiple types

We don't need to specify types
*/

// typeof return the type of 
console.log(typeof name);
console.log(typeof numbers);
const myNull = null;
console.log(typeof myNull); 

//symbol
const mySymbol = Symbol();
console.log(typeof mySymbol);

//date
const today = new Date();
console.log(today);
console.log(typeof today);