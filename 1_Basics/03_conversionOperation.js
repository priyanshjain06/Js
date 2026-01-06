let score = "hitesh";

//console.log(typeof score);  //REVIEW 1st way to check
//console.log(typeof(score)); //REVIEW 2nd way to check

let valueInNumber = Number(score);
//console.log(typeof valueInNumber); // returns number
//console.log(valueInNumber); // returns NaN => means Not a number

let score2 = null;
// console.log(typeof score2);  // returns object

let valueInNumber2 = Number(score2);
//console.log(typeof valueInNumber2); // returns number
//console.log(valueInNumber2); //REVIEW returns 0

let score3 = undefined;
// console.log(typeof score3);  // returns undefined
//console.log(typeof(score3)); // returns undefined

let valueInNumber3 = Number(score3);
//console.log(typeof valueInNumber3); // returns number
//console.log(valueInNumber3); returns Nan

let score4 = true;
// console.log(typeof score4);  // returns bollean

let valueInNumber4 = Number(score4);
//console.log(typeof valueInNumber4); // returns number
//console.log(valueInNumber2); // returns 1

// "33" => 33
//REVIEW "33abc" => NaN (for string)
//  true => 1; false => 0

// REVIEW
let isLoggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);  //returns 33
// console.log(typeof stringNumber);  // returns string

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue); // returns -3

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3); //REVIEW 8 => 2*2*3
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
console.log(str3); //REVIEW

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); //REVIEW  returns 122
console.log(1 + 2 + "2"); //REVIEW returns 32

// NOTE - why ?
//Rule of Thumb:
// If any operand of + is a string, JavaScript will coerce the other operand(s) to string and concatenate.
// But JavaScript evaluates from left to right — so order matters a lot!

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //REVIEW returns 1
// console.log(+""); //REVIEW returns 0 , "" is falsy value

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // not a good practice

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
