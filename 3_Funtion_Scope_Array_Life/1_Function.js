
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2 
}
// function will stop executing after return statement is executed  and all the statements written after them will not get executed 


// const result = addTwoNumbers(3, "4") //=> returns 34
// const result = addTwoNumbers(3, undefined) //=> throws error


// console.log("Result: ", result);




//here username ="sam" is default value of username 
// if value is passed in the function then it will overwrite this value  
function loginUserMessage(username = "sam"){
    if(!username){ // or username === undefined  
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`     //REVIEW REMEBER THIS
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


//... num1 is called as rest operator  
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //REVIEW - 



const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));