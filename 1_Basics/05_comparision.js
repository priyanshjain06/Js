// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

//REVIEW  Type Coercion Rule:
// When using >, <, >=, <= between a string  a number:

// JavaScript tries to convert the string to a number

// Then performs a numeric comparison

console.log("abc" > 1); // false — "abc" is NaN after coercion → false
console.log("5" > "12"); //REVIEW  true — string comparison (lexicographic, not numeric!)

//REVIEW null gets converted to 0 and undefined becomes NAN

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); //REVIEW true  bocz null gets converted into 0

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

//In JavaScript, === is the strict equality operator. It compares two values for equality and returns true if they are equal and of the same type.

console.log("2" === 2); // false
