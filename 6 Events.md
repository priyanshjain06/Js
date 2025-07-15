# ⏰ JavaScript Timers: `setTimeout()` & `setInterval()`

---

## ⏳ `setTimeout()` - Delay Execution

The `setTimeout()` function is used to **delay the execution of code** by a specified amount of time (in milliseconds).

### ✅ Syntax
```javascript
setTimeout(callback, delay, ...args);
```

| Parameter | Description |
|-----------|-------------|
| `callback` | Function to be executed after the delay |
| `delay` | Time in **milliseconds** before the function runs |
| `...args` | Optional arguments passed to the callback |

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