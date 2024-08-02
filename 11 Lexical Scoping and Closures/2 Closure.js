function outer()
 {
    let name = "Mozilla";
        function inner()
         {
            console.log(name);
         }
    return inner;
  } 
  
  const call = outer();
  call();
  
//   closure gives you access to an outer function's scope from an inner function.
//  In JavaScript, closures are created every time a function is created, at function creation time.

