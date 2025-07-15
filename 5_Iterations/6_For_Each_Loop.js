//REVIEW syntax
// array.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (
  val
) /* this is call back function which means function wtih no name */ {
  console.log(val);
});

// REVIEW using arrow function , Always use this
coding.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}
coding.forEach(printMe); /*REVIEW  give reference dont call the function */

//REVIEW syntax !
coding.forEach((item, index, array) => {
  console.log(item, index, array);
});

// REVIEW Main use : to print values of data from the databases which are array of objects using for each loop

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});
