---
sidebar_position: 2
---
# Built-in Functions in Javascript
## Array
- add/remove element
  - push(...items) -- add element to the end of
  - pop() -- remove an element from the end of the array
  - shift() -- remove an element from the beginneing of the array
  - upshift(...items) -- add elements to the beginning of the array
  - splice(pos,deleteCount,...items) -- remove `deleteCount` elements starting from the `pos` and insert `items`
  - slice(start,end) -- create a new array by copying elements from index `start` to index `end`(excluding `end`)
  - concat(...items) -- return a new array: copy all elements from the current array and append items to it. If any item in items is an array, its elements are taken.
- search element
  - indexOf/lastIndexOf(item,pos)
  - includes(value)
  - find/filter(func)
  - findIndex
- iterating over arrays
  - foreach(func)
- array transformation
  - map -- Create a new array by calling func on each element
  - sort -- Sort the array in place and return it
  - reverse -- Reverse the array in place and return it
  - split -- split an string to array and return it
  - join -- convert a string to an array and return it
  - reduce -- compute a signgle value on the array by calling `func` on each element,passing intermediates results between calls
  - reduceRight(func,initial)
- others
  - Array.isArray(arr)
  - Array.prototype.some(callback)


```javascript title="Array.prototype.map()"
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

```javascript
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
```




## Others
### Arguments Object
```javascript
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1
  console.log(arguments[1]);
  // expected output: 2
  console.log(arguments[2]);
  // expected output: 3
}
func1(1, 2, 3);
```

```javascript title="Example: Traverse parameters and calculate the sum"
function add() {
    let sum = 0
        for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
add()                           // 0
add(1)                          // 1
add(1,2,3,4);                   // 10
```
