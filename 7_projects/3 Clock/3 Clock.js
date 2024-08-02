const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//In the provided code snippet, 1000 is the interval duration specified in milliseconds for the setInterval function. This means that the function passed to setInterval will execute every 1000 milliseconds (or every 1 second).