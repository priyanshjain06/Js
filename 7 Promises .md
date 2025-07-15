# 🚀 JavaScript Promises Guide

---

## 🤔 What is a Promise?

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

---

## 📊 Promise States

A Promise can be in one of three states:

- **⏳ Pending:** The initial state, neither fulfilled nor rejected
- **✅ Fulfilled:** The operation completed successfully, and the Promise resolves to a value
- **❌ Rejected:** The operation failed, and the Promise rejects with an error

---

## 🎯 Promise Methods

- **`.then()`** method only runs when the Promise is **fulfilled**
- **`.catch()`** method only runs when the Promise is **rejected**
- **`.finally()`** method **always runs** regardless of the rejected or accepted of promise

---

## 🔧 Resolve Function

**resolve** is a function passed to the Promise constructor that you call to fulfill the Promise, indicating the async task succeeded. It moves the Promise from pending to fulfilled and passes a value (e.g., data or an object) to the `.then()` callback.

### 📝 Example:

```javascript
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));
```

---

## ⚡ Async/Await in Promises

### 🔍 What is Async/Await?

- **`async` Function:** An async function is a function declared with the `async` keyword. This makes the function return a Promise, and it allows the use of the `await` keyword inside the function

- **`await` Keyword:** The `await` keyword can only be used inside an async function. It pauses the execution of the async function and waits for the Promise to resolve or reject. If the Promise resolves, `await` returns the resolved value. If the Promise rejects, it throws the rejected value, which can be caught using `try...catch`

### 📝 Example:

```javascript
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
```

---

## 🌐 Async/Await Example: Calling the API

```javascript
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() // if we dont use await here it will give error coz it takes time to convert into json
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()
```

# or we can use the below method:

```

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
```

---

## 🔥 **Important Note**

> **⚡ Promise is an ASYNC operation**
> 
---

# 🚀 Promise.all() Guide

---

## 🤔 What is Promise.all()?

**Promise.all** is a JavaScript method that takes an array (or iterable) of Promises and returns a new Promise that resolves when **all input Promises resolve**, or rejects if **any input Promise rejects**. It's useful for handling multiple asynchronous tasks concurrently and waiting for all to complete.

---

## 📝 Basic Example

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// Expected output: Array [3, 42, "foo"]
```

---

## 🔍 Different States Example

```javascript
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
```

---

## 📚 Reference

Now read **MDN references** for examples


