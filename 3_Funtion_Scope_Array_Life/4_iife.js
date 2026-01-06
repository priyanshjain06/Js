// Immediately Invoked Function Expressions (IIFE)
//In order to avoid polluting  of functons by the global namespace or global scopes , we can use IIFE so that it executes the function imdetaily before anything gets executed in the code

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

// () means calling the function while the start and end () means we have created a seperate block for the function here

// we have use semi colon at the end of the function to let the compilere know that its block is ended is done when we have to use 2 iife function simultaneously

//REVIEW - 
// simple IIFE:
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Priyansh Jain ");
