const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(username);  // gives error
        // console.log(`Username: ${this.username}`);
        console.log(this); // gives default values of the object
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username; //this.username is variable of function 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // this will give default values of the function
}

const userOne = User("hitesh", 12, true)
const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne); // this we overwrite the values 

// to avoid this make a constructor using new 
const userOne1 =new User("hitesh", 12, true)
const userTwo2 = new User("ChaiAurCode", 11, false)
console.log(userOne1);
console.log(userTwo2);

console.log(userOne.constructor);  // it gives refernces of its own 


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true

  