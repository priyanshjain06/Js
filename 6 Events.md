# ⏰ JavaScript Timers: `setTimeout()` & `setInterval()`

---

## ⏳ `setTimeout()` - Delay Execution

The `setTimeout()` function is used to **delay the execution of code** by a specified amount of time (in milliseconds).

### ✅ Syntax
```javascript
setTimeout(callback, delay, ...args);
```

| Parameter  | Description                                       |
| ---------- | ------------------------------------------------- |
| `callback` | Function to be executed after the delay           |
| `delay`    | Time in **milliseconds** before the function runs |
| `...args`  | Optional arguments passed to the callback         |

### 📝 Example with Arguments
```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 3000, "Alice");
```
**Output after 3 seconds:**
```
Hello, Alice!
```

### ❌ Cancelling `setTimeout()`
You can cancel a timeout using `clearTimeout()`:

```javascript
const timerId = setTimeout(() => {
  console.log("This won't run");
}, 5000);

clearTimeout(timerId);
```

---

## 🔄 `setInterval()` - Repeat Execution

The `setInterval()` function repeatedly **executes a function** after a specified time interval (in milliseconds), until it is **cleared** with `clearInterval()`.

### ✅ Syntax
```javascript
setInterval(callback, delay, ...args);
```

### 📝 Example with `clearInterval()`
```javascript
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Count is: ${count}`);
  
  if (count === 5) {
    clearInterval(intervalId); // Stops after 5 counts
    console.log("Stopped interval");
  }
}, 1000);
```

# 🎯 JavaScript Events Guide

---

## 📡 Event Delegation

Event delegation is a technique in JavaScript that leverages event bubbling to handle events efficiently. Instead of adding an event listener to multiple child elements, you add a single event listener to a parent element.

---

## 🎧 Types of Listeners

Various JavaScript event listeners like mouse, keyboard, form, window, touch, and drag-and-drop events. Each event type is shown with examples using `addEventListener` to handle user interactions dynamically on the page.

# preventDefault() vs stopPropagation()

| Feature       | `preventDefault()`           | `stopPropagation()`                      |
| ------------- | ---------------------------- | ---------------------------------------- |
| **Purpose**   | Stops browser default action | Stops event bubbling                     |
| **Affects**   | Browser behavior             | Event flow                               |
| **Use Cases** | Form submit, link open       | Parent click handler                     |
| **Example**   | Prevent form submission      | Stop click from reaching parent elements |

## Quick Examples

### preventDefault()
```javascript
// Prevent form from submitting
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Handle form data yourself
});

// Prevent link from navigating
link.addEventListener('click', (e) => {
  e.preventDefault();
  // Do something else instead
});
```

### stopPropagation()
```javascript
// Stop event from bubbling to parent
button.addEventListener('click', (e) => {
  e.stopPropagation();
  // Parent's click handler won't fire
});

// Prevent event from reaching other listeners
element.addEventListener('click', (e) => {
  e.stopPropagation();
  // Other click handlers on ancestors won't trigger
});
```

## Key Differences

- **preventDefault()**: "Don't do the default thing the browser would do"
- **stopPropagation()**: "Don't tell parent elements about this event"

## When to Use Both
```javascript
element.addEventListener('click', (e) => {
  e.preventDefault();      // Stop default action
  e.stopPropagation();     // Stop event bubbling
  // Your custom logic here
});
```

## false propagation 
- Bubbling phase is called false propagation ! 
- Example : add event listener 
  
```javascript
   document.getElementById('owl').addEventListener('click', function(e){
         console.log("owl clicked");
         e.stopPropagation() 
    }, false)
  ```

## setting alerts 
``` javascript
 document.getElementById('owl').onclick = function(){
        alert("owl clicked")  
     }
    ```

    # V8 Engine vs API (Clean & Clear)

## 1️⃣ What is the V8 Engine?

👉 **V8 is a JavaScript engine that executes JavaScript code.**

- Written in C++
- Converts JS → machine code
- Super fast 🚀

## 2️⃣ What is an API (in this context)?

Here, **API means Browser APIs / Web APIs** (not REST APIs).

👉 **APIs provide extra capabilities that JavaScript itself does NOT have.**

---

## Comparison Table

| Feature                        | V8 Engine | APIs  |
| ------------------------------ | --------- | ----- |
| **Execute JS code**            | ✅ Yes     | ❌ No  |
| **Convert JS to machine code** | ✅ Yes     | ❌ No  |
| **DOM access**                 | ❌ No      | ✅ Yes |
| **setTimeout**                 | ❌ No      | ✅ Yes |
| **fetch / HTTP**               | ❌ No      | ✅ Yes |
| **File system**                | ❌ No      | ✅ Yes |

---

## 3️⃣ What Does V8 Handle?

✅ **Pure JavaScript executi