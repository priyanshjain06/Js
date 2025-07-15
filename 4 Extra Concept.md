The dollar sign $ is a valid identifier in JavaScript

Common Uses of $ in Practice
🔹 1. jQuery
In jQuery, $ is used as a function to select DOM elements:

js
Copy
Edit
const button = $('#myButton'); // Selects an element with ID "myButton"
🔹 2. Template Literals (not $ alone, but part of ${})
In string interpolation:

js
Copy
Edit
let name = "Alice";
console.log(`Hello, ${name}!`); // Output: Hello, Alice!

Use Case	Meaning
let $ = 5;	Just a variable named $


`Backticks `

✅ What Are Backticks Used For?
Backticks are used to create template literals, which allow you to:

1. Embed Variables using ${} (string interpolation)
js
Copy
Edit
const name = "Alice";
console.log(`Hello, ${name}!`); // Output: Hello, Alice!
2. Create Multiline Strings easily
js
Copy
Edit
const message = `
Line 1
Line 2
Line 3
`;
console.log(message);
Without backticks, you'd need:

js
Copy
Edit
const message = "Line 1\nLine 2\nLine 3";
3. Embed Expressions
js
Copy
Edit
const a = 5, b = 10;
console.log(`The sum is ${a + b}`); // Output: The sum is 15

` Map` 
map() is a built-in array method that creates a new array by applying a function to each element of the original array.
sytnax :
array.map(callback(currentValue, index, array), thisArg);

// Maps : they are unique and maintains order in which they are inserted
// Map objects are collections of key-value pairs. 


 