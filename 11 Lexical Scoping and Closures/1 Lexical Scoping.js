//REVIEW concept : Global Scope
//  └── a = 10
//      └── outer()
//           └── b = 20
//               └── inner()

let a = 10;

function outer() {
  let b = 20;
  //REVIEW -  can access a ( global)

  function inner() {
    console.log(a); // REVIEW can access a  (global)
    console.log(b); //REVIEW can access parent
  }

  inner();
}

outer();
