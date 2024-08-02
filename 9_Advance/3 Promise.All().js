// The Promise.all() method:

// The Promise.all() method takes an array (or any iterable) of promises as input and returns a single Promise.

// If all the promises in the array succeed (fulfill), Promise.all() also succeeds (fulfills) and returns an array of results.

// If any of the promises in the array fail (reject), Promise.all() fails (rejects) with the reason for the first failure.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// Expected output: Array [3, 42, "foo"]




const p = Promise.all([1, 2, 3]);
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// Logs:
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }

// now read mdn references  for examples

