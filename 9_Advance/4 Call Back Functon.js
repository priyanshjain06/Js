//REVIEW -  function passed as argument to another function !! and is called back
function greet(name) {
  console.log("Hello, " + name + "!");
}

function delayedGreeting(name, callback) {
  setTimeout(() => {
    callback(name);
  }, 2000); // 2000 milliseconds = 2 seconds
}

delayedGreeting("Alice", greet);
