// for of synatx
// for (const iterator of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);
for (const key of map) {
    console.log(key);
}


for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// it also gives error
// for (const key of myObject) {
//     console.log(key);
// }

// OBJECTS are not iterable by for of loop  so it gives error 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } 