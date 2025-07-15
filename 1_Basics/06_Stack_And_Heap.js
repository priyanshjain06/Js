//REVIEW  Stack(primitive) ,Heap (reference or Non primitive)

let score = 100;
let scoreValue = score;
console.log(scoreValue);

scoreValue = 200;
console.log(scoreValue);
console.log(score);

//REVIEW  Heap
let user = {
  email: "priyansh010gmail.com",
  upi: 123,
};

let usertwo = user;

usertwo.upi = 456;

console.log(user);
