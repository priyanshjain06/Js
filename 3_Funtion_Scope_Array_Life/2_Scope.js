//var c = 300 //=>  var has global scope
// NOTE : THE GLOBAL SCOPE IN NODE JS ENVIRONMENT IS DIFFERENT FROM THE BROWSER CONSOLE

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log("INNER: ", a);
}

// console.log(a); // gives 300
// console.log(b); // gives error
console.log(c);

// the child function can acess the parent function variables but not vice-versa
function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

one(); // if parent is called then child function is not called i .e. two()  will not be called

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5)); //REVIEW it is allowed when used with console log

function addone(num) {
  return num + 1;
}

// addTwo(5) //REVIEW  this will give error
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(50)); // addTwo(50)