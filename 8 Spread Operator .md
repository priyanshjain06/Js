# JavaScript Spread Operator Guide

The **spread operator** (`...`) is like opening a container and spilling out its contents into another place.

It's used to **expand** elements of an **array**, **object**, or **iterable** into individual elements.

## 1. Syntax

```javascript
...iterable
```

Where `iterable` could be an array, string, object (since ES2018), or any iterable.

## 2. Uses of Spread Operator

### a) Copying arrays

```javascript
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2); // [1, 2, 3]
console.log(arr1 === arr2); // false (different references)
```

### b) Merging arrays

```javascript
let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]
```

### c) Expanding in function calls

```javascript
let nums = [5, 2, 9];
console.log(Math.max(...nums)); // 9
```

### d) Copying objects

```javascript
let obj1 = { name: "Priyansh", age: 22 };
let obj2 = { ...obj1 };
console.log(obj2); // { name: "Priyansh", age: 22 }
console.log(obj1 === obj2); // false
```

### e) Merging objects

```javascript
let defaults = { theme: "light", font: "Arial" };
let userSettings = { font: "Roboto" };
let settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: "light", font: "Roboto" }
```

### f) Converting strings to arrays

```javascript
let str = "Hi!";
console.log([...str]); // ["H", "i", "!"]
```
