# 🎯 JavaScript Variables: `var` vs `let` vs `const`

---

## 📊 Summary Table

| Feature            | `var`              | `let`             | `const`        |
| ------------------ | ------------------ | ----------------- | -------------- |
| **Scope**          | Function           | Block             | Block          |
| **Can update**     | ✅ Yes             | ✅ Yes            | ❌ No          |
| **Can re-declare** | ✅ Yes             | ❌ No             | ❌ No          |
| **Hoisted**        | ✅ Yes (undefined) | ✅ Yes (TDZ\*)    | ✅ Yes (TDZ\*) |
| **Use case**       | Legacy code        | General variables | Fixed values   |

> **🧠 TDZ = Temporal Dead Zone** — can't access the variable before it's declared.

---

## 🔴 1. `var` – The Old Way

```js
var name = "Alice";
```

### ⚙️ Key Points:

- ⚠️ Gets **hoisted** (moved to the top), but initialized as `undefined`
- ❌ Not block-scoped (can lead to bugs)

### ❗ Example:

```js
if (true) {
  var x = 10;
}
console.log(x); // ✅ 10 (still accessible outside block)
```

---

## 🟢 2. `let` – Modern and Safe

```js
let name = "Bob";
```

### ⚙️ Key Points:

- ❌ Cannot be re-declared in the same scope
- ✅ Gets hoisted, but not initialized (temporal dead zone)

### ✅ Example:

```js
if (true) {
  let y = 20;
}
console.log(y); // ❌ ReferenceError: y is not defined
```

---

## 🔵 3. `const` – For Constants

```js
const name = "Charlie";
```

### ⚙️ Key Points:

- ✅ **Block-scoped**

### ⛔ But not deeply immutable:

```js
const person = { name: "John" };
person.name = "Jane"; // ✅ Allowed (object properties can change)
```

---

## ✅ Best Practice:
To print :
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])