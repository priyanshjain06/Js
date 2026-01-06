const p = Promise.all([1, 2, 3]);
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);

setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});