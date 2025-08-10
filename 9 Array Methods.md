# shift() and unshift() Array Methods

## 1. shift()

- Removes the first element from an array
- Returns the removed element
- Changes the original array

### Example:

```javascript
let arr = [10, 20, 30];
let removed = arr.shift();
console.log(removed); // 10
console.log(arr); // [20, 30]
```

## 2. unshift()

- Adds one or more elements to the beginning of an array
- Returns the new length of the array
- Changes the original array

### Example:

```javascript
let arr = [20, 30];
let newLength = arr.unshift(10, 15);
console.log(newLength); // 4
console.log(arr); // [10, 15, 20, 30]
```

 
## other methods:
pop 
push
slice
splice
join
flat 
spread
isArray
from
of
concat  (slow)
