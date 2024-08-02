let score = "hitesh"

//console.log(typeof score);  // 1st way to check
//console.log(typeof(score)); // 2nd way to check 

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // returns number
//console.log(valueInNumber); // returns NaN => means Not a number

let score2= null
// console.log(typeof score2);  // returns object
//console.log(typeof(score2)); // returns object 

let valueInNumber2 = Number(score2)
//console.log(typeof valueInNumber2); // returns number
//console.log(valueInNumber2); // returns 0 

let score3= undefined
// console.log(typeof score3);  // returns undefined
//console.log(typeof(score3)); // returns undefined

let valueInNumber3 = Number(score3)
//console.log(typeof valueInNumber3); // returns number
//console.log(valueInNumber3); // returns Nan


let score4= true
// console.log(typeof score4);  // returns bollean
//console.log(typeof(score4)); // returns bollean 

let valueInNumber4 = Number(score4)
//console.log(typeof valueInNumber4); // returns number
//console.log(valueInNumber2); // returns 1
 
// "33" => 33
// "33abc" => NaN (for string)
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);  //returns 33
// console.log(typeof stringNumber);  // returns string 

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); // returns -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); 
// console.log(1 + "2");
// console.log("1" + 2 + 2);// returns 122
// console.log(1 + 2 + "2");  // returns 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // returns 1
// console.log(+""); // returns 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 // not a good practice

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion