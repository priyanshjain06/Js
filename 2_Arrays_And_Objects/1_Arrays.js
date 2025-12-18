// array
// () called as parenthesis
// [] called as bracket
// {} called as braces

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // at last position
// myArr.push(7)
// myArr.pop() // deletes from last position

// myArr.unshift(9) => not good increases time complexity , plcaces at 0th position
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join(); //REVIEW converts arrays to string

// console.log(myArr);
// console.log( newArr);
// console.log(typeof newArr); // returns string

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // REVIEW 1 is inclusive and 3 is exclusive and Returns a copy of a section of an array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); //REVIEW 1 is inclusive and 3 is also incusive and Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements
//REVIEW -  it changes the original array

console.log("C ", myArr);
console.log(myn2); //REVIEW - 
