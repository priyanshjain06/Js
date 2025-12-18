//REVIEW we use this for two things 1) to access global objects  2) to access the members of  local object in a function inside the object ! 

const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); //REVIEW
    console.log(this); //REVIEW  details about the object
  },
};

// user.welcomeMessage()
// user.username = "sam"
user.welcomeMessage();


// Yes, in the context of your function chai, the this keyword refers to the global object when the function is called as a standalone function and not in strict mode.


console.log(this); //REVIEW returns empty object

function chai(){
  let username = "hitesh";
  console.log(this); //REVIEW logs the global object (window in browsers)
  console.log(this.username); //REVIEW  logs undefined because username is not a property of the global object
}
chai();


"use strict"
function chai(){
  let username = "hitesh";
  console.log(this); //REVIEW returns undefined because strict mode logs the global object (window in browsers)  
  console.log(this.username); //returns error as undefined because username is not a property of the global object
}
chai();


const chai_2 = function () {
  let username = "hitesh";
  console.log(this); // gives deafult values of the function
  console.log(this.username);// returns undefined it works only in strict mode or if the function is present in the object
};
chai_2()

// arrow function below :
const chai3 = () => {
  let username = "hitesh";
  console.log(this);  //REVIEW returns empty object
  console.log(this.username); // undefined
};
chai3()

//EXPICIT RETURN 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//REVIEW USED IN REACT : IMPLICIT RETURN 
// const addTwo = (num1, num2) =>  num1 + num2 

// const addTwo = (num1, num2) => ( num1 + num2 )

//REVIEW
const addTwo = (num1, num2) => ({ username: "hitesh" }); // for object we use curly braces , it returns undefined
console.log(addTwo(3, 4));


