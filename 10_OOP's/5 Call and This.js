function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username) //gives error
    SetUsername.call(username)
    SetUsername.call(this, username) // here this means refernce of createUser  

    // this. username = username // it is also correct 
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
