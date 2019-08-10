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

// Type Conversion
let val = 2;
console.log(typeof val);
val = String(10+5);
console.log(val);
console.log(typeof val);

val = Number("5");
console.log(val);
val = Number(true);
console.log(val);
val = Number(false);
console.log(val);
val = Number(null);
console.log(val);
val = Number("i am a string");
console.log(val);
val = Number([1,2,3]);
console.log(val);

/*
.length can be used on stings to get their length
.toString() converts a type to a string
.toFixed() can be used on numbers to tell how many decimals are allowed
NaN stands for not a number
parseInt("5"); for integer 
parseFloat("5.00"); for decimals
*/

// Type Co-hersion - is when javascript does the type conversion, example when adding two varibales. example: a number and a string (the output will be a string), number and a number will give a number
let one = 1;
let two = 2;
sum = one + two;
console.log(typeof sum);

two = "two";
sum = one + two;
console.log(typeof sum);