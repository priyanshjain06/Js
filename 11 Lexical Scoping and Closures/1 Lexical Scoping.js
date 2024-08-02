function outer()
 {
    let name = "Mozilla";
        function inner()
         {
            console.log(name);
         }
    inner();
  } 
  
  outer();
  