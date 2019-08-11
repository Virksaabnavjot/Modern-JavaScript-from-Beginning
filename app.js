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

// Numbers and Math Object
//Operators (+, -, *, /, %)
/*
Math Object (has methods and properties since its an object)

----Properties----
Math.PI; - gives pi's value
Math.E; - gives Eucler's Number

----Methods----
Math.round(); - rounds the number to nearest integer
Math.ceil(); -  used to round upwards
Math.floor(); - used to round downwards
more below ...
*/
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(3.7));
console.log(Math.ceil(3.7));
console.log(Math.floor(3.7));

print(Math.sqrt(64)); // return square root of a number
print(Math.abs(-23)); //return an absolute value of a number with regards to if it negative or positive
print(Math.pow(11,3)); //returns the power of a number
print(Math.min(10, 0.2, 3, -110)); // returns the smallest number from a provided set of numbers
print(Math.max(10, 0.2, 3, -110));

/* random returns a random decimal number, in most cases a whole number is needed in that case multiply random with the max number needed
this will retun a number between 0 & max number, to get a number between 1 & max number, multiply random with max number +1
example: if you need a random number between 0 and hundred
Math.random() * 100+1 this will still return a decimal number so wrap it within Math.floor() wo get a whole number
*/
print(Math.random()); 
print(Math.random() * 100+1); 
print(Math.floor(Math.random() * 100+1)); //return a whole number between 1 & 100

// String Methods and Concatenation
let firstName = "Navjot Singh";
let lastName = "Virk";

let fullName;

// Concatenation
fullName = firstName+" "+lastName;
print(fullName);

//Append
fullName = "Jashan ";
fullName += "Deep";
print(fullName);

//Escaping
let sentence = 'That\'s awesome website';
print(sentence);

// String properties and methods
print(sentence.length);

//concat
fullName = firstName.concat(" ", lastName);
print(fullName);

//change case
print(fullName.toLowerCase());
print(fullName.toUpperCase());

//get a charater at an index in a string
print(firstName[2]); // this will print v (Navjot)

//indexOf() return index of a character in a string
print(firstName.indexOf("j"));
print(sentence.lastIndexOf("e"));

//charAt() - returns a charater at an index in a string
print(firstName.charAt(5));

//substring() - returns a substring from specified starting index to specified number of characters
let shortName = firstName.substring(0,3);
print(shortName);

//slice() - similar to substring
print(firstName.slice(0,3));
print(firstName.slice(-3)); //get the last 3 characters

//split() - used to split a string in an array
let splitArray = sentence.split(" "); //in this case we are spilting at space, we can split at a comma or a character
print(splitArray);

//replace() - used to replace text within a string 
print(firstName.replace("Navjot", "Jota"));

//includes() - returns a boolean true/false based on if something is inside a string
print(sentence.includes("awesome"));

function print(input){
  console.log(input);
}