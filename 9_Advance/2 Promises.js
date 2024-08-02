const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

// or do this 

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



// Async Functions and Await Keyword
// async Function: An async function is a function declared with the async keyword. This makes the function return a Promise, and it allows the use of the await keyword inside the function.

// await Keyword: The await keyword can only be used inside an async function. It pauses the execution of the async function and waits for the Promise to resolve or reject. If the Promise resolves, await returns the resolved value. If the Promise rejects, it throws the rejected value, which can be caught using try...catch.

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject('ERROR: JS went wrong');
        }
    },1000 );
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// Call the async function to see the result
consumePromiseFive();



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // if we dont use await here it will give error coz it takes time to convert into json 
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
  

// or we can use the bellow method:


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))



 
