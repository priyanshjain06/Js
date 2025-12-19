# 🎯 DOM Manipulation - Practical Examples

## 1️⃣ Change text on button click

📌 **Asked in almost every interview**

**HTML**

```html
<button id="btn">Click me</button>
<p id="text">Hello</p>
```

**JS**

```javascript
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("text").textContent = "Hello Priyansh";
});
```

---

## 2️⃣ Toggle text or color on click

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});
```

---

## 3️⃣ Add list item dynamically (VERY COMMON)

**HTML**

```html
<ul id="list"></ul>
<button id="add">Add</button>
```

**JS**

```javascript
document.getElementById("add").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
});
```

---

## 4️⃣ Remove element on button click

```javascript
document.getElementById("remove").addEventListener("click", () => {
  document.getElementById("box").remove();
});
```

---

## 5️⃣ Event Delegation (⭐ TOP FAVORITE)

**HTML**

```html
<ul id="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
```

**JS**

```javascript
document.getElementById("menu").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});
```

👉 Tests: bubbling + delegation + `event.target`

---

## 6️⃣ Count button clicks

```javascript
let count = 0;

document.getElementById("btn").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});
```

---

## 7️⃣ Input value display on typing

```javascript
document.getElementById("input").addEventListener("input", (e) => {
  document.getElementById("output").textContent = e.target.value;
});
```

---

## 8️⃣ Prevent default form submission

```javascript
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
});
```

---

## 9️⃣ Change multiple elements using `querySelectorAll`

```javascript
document.querySelectorAll(".box").forEach(box => {
  box.style.backgroundColor = "blue";
});
```

---

## 🔟 Stop event bubbling (classic trap)

```javascript
child.addEventListener("click", (e) => {
  e.stopPropagation();
});
```

---

## 1️⃣1️⃣ Create elements from array (VERY COMMON)

```javascript
const items = ["Apple", "Banana", "Mango"];
const ul = document.getElementById("list");

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
```

---

## 1️⃣2️⃣ Hide / show element

```javascript
btn.addEventListener("click", () => {
  box.style.display =
    box.style.display === "none" ? "block" : "none";
});
```

---

**💡 Pro Tip:** Practice these patterns - they appear in 90% of DOM interviews!