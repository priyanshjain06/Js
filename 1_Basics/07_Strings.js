const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value"); not recommended to use this format not clean code

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//REVIEW  `` is called backexe

const gameName = new String("hitesh-hc-com"); //REVIEW constructor

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4); //REVIEW no negative is allowed and it doesnot include the end index
console.log(newString);

const anotherString = gameName.slice(-8, 4); //REVIEW  negative is allowed here which means it starts from reverse
console.log(anotherString);

//REVIEW -  substrng does  swipe index (4,0) => (0,4) and slice does not  and they both do not modify the string

//REVIEW let str = "Hello";
// console.log(str.slice(4, 1));      // "" (empty string)
// console.log(str.substring(4, 1));  // "ell" (swaps 1 and 4)

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-", 2));
// we have mentioned seperator and limit . It doesnt chnages original string
