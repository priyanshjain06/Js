function outer() {
  let name = "Mozilla";
  function inner() {
    console.log(name);
  }
  return inner; //REVIEW -
}

const call = outer();
call();

//REVIEW - A closure is created when a function remembers and can access variables from its outer (lexical) scope, even after the outer function has finished executing.

or 

//REVIEW A closure in JavaScript is simply a feature where an inner function remembers and can access the variables of its outer function, even after the outer function has completely finished running.

//REVIEW -  used for data encapsulation