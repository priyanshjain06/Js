# 📚 DOM Interview Questions & Answers

## 🌳 What is DOM?

**DOM = Document Object Model**

> The DOM is a tree-like structure created by the browser that represents your HTML page as objects, so JavaScript can read, change, add, or delete elements.

---

## 🏗️ Who creates the DOM?

**The browser creates it**

---

## ❓ Why do we need the DOM?

- ✍️ Update text dynamically
- 🖱️ Handle clicks & inputs
- 🎬 Create animations
- ⚛️ Build SPAs (React, Vue, etc.)

---

## 🔧 What is DOM Manipulation?

> DOM manipulation means using JavaScript to change the structure, content, or style of a web page after it has loaded.

### What exactly can we manipulate?

Using JS, we can:

1. ✏️ **Change text/content**
2. 🎨 **Change styles**
3. ➕ **Add elements**
4. ❌ **Remove elements**
5. 🧠 **Respond to user actions** (click, input, scroll)

---

## ❌ Does JavaScript directly change HTML?

**Answer: No**

JavaScript modifies the DOM, and the browser updates the HTML/UI accordingly.

---

## 🎯 How do you select elements in DOM?

```javascript
document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("p")
document.querySelector("div")
document.querySelectorAll(".box")
```

---

## ⚖️ Difference between `getElementById` and `querySelector`

| `getElementById`       | `querySelector`                |
| ---------------------- | ------------------------------ |
| Selects by id only     | Selects using CSS selectors    |
| Faster                 | Slightly slower                |
| Returns single element | Returns first matching element |

---

## 🎭 What is an Event?

**Answer:**

An event is an action performed by the user or browser, such as:
- `click`
- `keypress`
- `scroll`
- `load`

---

## 👂 What is `addEventListener`?

**Answer:**

It attaches an event handler to an element without overwriting existing handlers.

```javascript
btn.addEventListener("click", handler);
```

---

## ⚖️ Difference between `onclick` and `addEventListener`

| `onclick`           | `addEventListener` |
| ------------------- | ------------------ |
| One handler only    | Multiple handlers  |
| Overwrites previous | Doesn't overwrite  |
| Old approach        | Modern approach    |

---

## 🫧 What is Event Bubbling?

**Answer:**

Event bubbling is when an event starts from the **target element** and propagates **upward** to parent elements.

```
Child → Parent → Grandparent → Document
```

---

## 📥 What is Event Capturing?

**Answer:**

Event capturing is when an event travels from the **root element down** to the target.

```
Document → Grandparent → Parent → Child
```

---

## 📄 What is `document`?

**Answer:**

`document` is the root object of the DOM that represents the entire HTML page.

---

## 🪟 What is `window`?

**Answer:**

`window` is the global browser object that contains the DOM, BOM, and global JS functions.

---

## ⚖️ Difference between `window` and `document`

| `window`       | `document`      |
| -------------- | --------------- |
| Browser object | DOM object      |
| Represents tab | Represents page |
| Has `alert()`  | Has DOM methods |

---

## ⚡ What is `DOMContentLoaded`?

**Answer:**

It fires when HTML is fully loaded and parsed, **without waiting** for images and stylesheets.

```javascript
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is ready!');
});
```

---

## 🔄 What is Reflow and Repaint?

**Reflow:** Layout recalculation

**Repaint:** Visual update without layout change

> 📌 **Reflow is expensive** and should be minimized.

---

## 🐌 Why is DOM manipulation slow?

**Answer:**

Because changing the DOM can trigger **reflow** and **repaint**, which are costly browser operations.

---

## 🌐 What is Virtual DOM?

**Answer:**

A lightweight JavaScript copy of the real DOM used by libraries like **React** to optimize UI updates.

### Why do we need Virtual DOM?

- ⚡ Faster updates
- 🎯 Efficient diffing algorithm
- 🔄 Batch updates
- 📉 Reduces reflows/repaints

---

## 🚀 How to improve DOM performance?

**Answer:**

- ✅ Minimize DOM updates
- ✅ Use event delegation
- ✅ Modify classes instead of inline styles
- ✅ Use `DocumentFragment` for multiple insertions
- ✅ Batch DOM changes together
- ✅ Use `requestAnimationFrame` for animations


## Event Delegation  ? 

- Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching multiple listeners to individual child elements.
--- 