// const tinderUser = new Object()
const tinderUser = {}  //REVIEW non-singelton  object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname: { // nested properties 
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// console.log(regularUser.fullname?userfullname.firstname); //REVIEW It is a good practice as it provides protection  called as object chaining when we take values from api and we are not sure whether the ojects properties are there or not  

const obj1 = {1: "a", 2: "b"} // object
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // ==> (source,target) called as spread operator

const obj3 = {...obj1, ...obj2}  
console.log(obj3);



// when we have to process the data which comes from databases in the form of arrays of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // gives true or false
// console.log(Object.hasOwnProperty(tinderUser, 'isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor // we are trying to acess the value by .

// we are de-structuring the object here
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// for react js 
// const navBar = ( props.name) => {
// }
// navbar(name="Google")


// we use something like this here
//const navBar= ({name}) => {
// }
// navbar(name="Google")




// when we receive values form api we use json format like bellow 1) array of object  2) objects of strings and other data types
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

 //2nd way  : array of objects
[
    {},
    {},
    {}
] // To  understand this we can do it by  using a json formater by taking api from a website as a test 
