# JavaScript Objects and Memory Management

## What is an Object in JavaScript?

👉 An object is a collection of key–value pairs, and it is stored in Heap memory.

**Example:**

```javascript
let user = {
  name: "Priyansh",
  age: 21
};
```

---

## JavaScript Memory Types

JavaScript mainly uses two memory areas:

1️⃣ **Stack** (for primitives & references)  
2️⃣ **Heap** (for objects & functions)

---

## Stack Memory 🧱

**Stores:**
- Primitive values (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`)
- References (addresses) to heap objects

**Example:**

```javascript
let a = 10;
let b = a;
```

**Stack:**

```
a → 10
b → 10
```

---

## Heap Memory 🗄️

**Stores:**
- Objects
- Arrays
- Functions

**Example:**

```javascript
let obj = { x: 5 };
```

**Heap:**

```
{ x: 5 }   ← stored here
```

**Stack:**

```
obj → reference (address)
```

---

## Objects are Stored by Reference ⚠️

This is the **MOST important rule**.

**Example:**

```javascript
let obj1 = { name: "A" };
let obj2 = obj1;

obj2.name = "B";
console.log(obj1.name); // B
```

**Why?**
- `obj1` and `obj2` point to same heap object
- Changing one changes the other

**Diagram:**

```
Stack:
obj1 ─┐
      ├──> Heap: { name: "B" }
obj2 ─┘
```

---

## Primitive vs Object Comparison

### Primitive comparison

```javascript
let x = 5;
let y = 5;
console.log(x === y); // true
```

### Object comparison

```javascript
let a = { v: 1 };
let b = { v: 1 };
console.log(a === b); // false
```

**Why?**
- Different heap memory locations

---

## Copying Objects (Avoid reference issue)

### ❌ Wrong way (reference copy)

```javascript
let a = { n: 1 };
let b = a;
```

### ✅ Shallow copy

```javascript
let b = { ...a };
```

### ✅ Deep copy

```javascript
let b = JSON.parse(JSON.stringify(a));
```

---

## Function + Heap Example

```javascript
function update(obj) {
  obj.value = 20;
}

let data = { value: 10 };
update(data);
console.log(data.value); // 20
```

**Why?**
- `data` reference passed
- Heap object modified

---

## Garbage Collection 🧹

JavaScript automatically frees heap memory when:
- No variable references an object

**Example:**

```javascript
let obj = { x: 1 };
obj = null; // eligible for garbage collection
```