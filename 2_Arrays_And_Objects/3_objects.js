// singleton
// Object.create

// object literals

const mySym = Symbol("key1"); //REVIEW - why do we need symbols ? 

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary", // we use commas
  [mySym]: "mykey1", //REVIEW
  // mySym="myKey1", this is a string not a symbol
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};
//REVIEW Accessing properties : we have two ways here . and brackets

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser) // no correction can be made on JsUser after this
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

//REVIEW we can add properties to an object like this also
JsUser.greeting = function () {
  console.log("Hello JS user");
};
console.log(JsUser.greeting()); 
console.log("--------------------------------");

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); //REVIEW we have used this here to access the object`s properties
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// console.log(JsUser.greetingTwo);  ====> this will give error
