//REVIEW -  If you PASS a function as an  argument to another function call  and someone else CALLS it later → it’s a callback.

function greet(name) {
  console.log("Hello, " + name + "!");
}

function delayedGreeting(name, callback) {
  setTimeout(() => {
    callback(name); //callback(name) calls the function passed as an argument and passes name to it.
  }, 2000);
}

delayedGreeting("Alice", greet);
