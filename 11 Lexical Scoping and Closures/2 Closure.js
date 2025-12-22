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
