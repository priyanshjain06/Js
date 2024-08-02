// syntax:-
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


const myObject1 = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
  };
  
  for (const key in myObject1) {
      console.log(`${key} shortcut is for ${myObject1[key]}`);
      // console.log(key => {myObject1[key]});
  }
  
// using for of loop
// const myObject = {
//   js: "javascript",
//   cpp: "C++",
//   rb: "ruby",
//   swift: "swift by apple",
// };

// for (const key of Object.keys(myObject)) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
// }

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  // console.log(key); returns 0,1,2..4 index 
  console.log(programming[key]);
  console.log(`key is ${key} and value is ${programming[key]}`);
}

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // This line is redundant, as 'IN' is already set to "India"


  
// doesnt print anything coz for in loop doesnt work on maps
for (const [key,value] in map) {
  console.log(key);
  console.log(`map${key,value}`);
}
