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