# 🔄 JavaScript Loops & Array Methods Guide

---

## 🔁 1. `for...of` - Iterate Over Values

```js
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value); // 10, 20, 30
}
```

**✅ Purpose:** Iterate over **values** in iterable objects  
**🎯 Works on:** Arrays, strings, maps, sets  
**❌ Doesn't work on:** Plain objects (`{}`)  
**🔥 Best for:** When you just need **values**

---

## 🔁 2. `for...in` - Iterate Over Keys

```js
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key);      // "a", "b"
  console.log(obj[key]); // 1, 2
}
```

**✅ Purpose:** Iterate over **keys (property names)**  
**🎯 Works on:** Objects and arrays (better for objects)  
**⚠️ Caution:** Iterates over enumerable properties (including inherited ones)

---

## 🔁 3. `.forEach()` - Side Effects

```js
const arr = [1, 2, 3];
arr.forEach((value, index) => {
  console.log(value, index); // 1 0, 2 1, 3 2
});
```

**✅ Purpose:** Iterate through each array element  
**🎯 Works on:** Arrays only  
**❌ Cannot:** Use `break` or `return`  
**🔥 Best for:** Performing actions (logging, API calls)

---

## 🔍 4. `.map()` - Transform Data

```js
const arr = [1, 2, 3];
const squared = arr.map(num => num * num); // [1, 4, 9]
```

**✅ Purpose:** Create **new array** by transforming each element  
**🎯 Returns:** New array (original unchanged)  
**🔥 Best for:** Data transformation

---

## 🔍 5. `.filter()` - Filter Data

```js
const arr = [1, 2, 3, 4];
const evens = arr.filter(num => num % 2 === 0); // [2, 4]
```

**✅ Purpose:** Create **new array** with elements matching condition  
**🎯 Returns:** New filtered array  
**🔥 Best for:** Including/excluding items based on condition

---

## 🔄 6. `.reduce()` - Aggregate Data

```js
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, curr) => acc + curr, 0); // 10
```

**✅ Purpose:** Reduce array to **single value**  
**🎯 Returns:** Single value (any type)  
**🔥 Best for:** Aggregating/combining data (totals, counts, objects)

---

## 📊 Comparison Table

| Method | Input | Output | Returns | Breakable | Best For |
|--------|-------|--------|---------|-----------|----------|
| **`for...of`** | Iterable | N/A | Nothing | ✅ Yes | Values |
| **`for...in`** | Object/Array | N/A | Nothing | ✅ Yes | Keys |
| **`.forEach()`** | Array | undefined | undefined | ❌ No | Side effects |
| **`.map()`** | Array | New Array |