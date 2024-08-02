const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array within array not a good practice

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // not a good practice and returns an array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]  // spread method

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


 
console.log(Array.isArray("Hitesh")) // to check if its there exists an array
console.log(Array.from("Hitesh"))  // creates an array from given string
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// console.log(Array.from(score1,score2,score3)); // it is wrong method 
console.log("--------------------------------------------");

let obj = {name: "hitesh"};
let valuesArray = Object.values(obj);
console.log(valuesArray); // Output: ['hitesh']

let entriesArray = Object.entries(obj);
console.log(entriesArray); // Output: [['name', 'hitesh']]

console.log(Array.isArray(obj)); // Output: false