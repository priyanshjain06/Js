// Dates:
//In JavaScript, a Date object is used to work with dates and times. It provides methods for getting and setting the year, month, day, hour, minute, second, and millisecond of a date object, as well as for performing date and time calculations.

let myDate = new Date()
console.log(myDate);
// console.log(myDate.toISOString());
// console.log("-------");
// console.log(myDate.toJSON());

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(Date.now()/1000);


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // day of week

// `${newDate.getDay()} and the time `

let theDate = new Date(2024, 6, 20); // July 20, 2024

// Format the date to show the weekday in long format
let formattedDate = theDate.toLocaleString('default' /* en-US */ , { 
    weekday: "long"
});

console.log(formattedDate); // Output will be the weekday name, e.g., "Saturday"


