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
  - indexOf/lastIndexOf(searchElement, fromIndex)-- from `fromIndex`, return index of searched element
  - includes(value)
  - find/filter(func) -- Filter elements through a func, returning the first value/all values for which func returns true
  - findIndex
- iterating over arrays
  - foreach(func) -- Call func on each element without returning anything
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

```javascript title="truncates (cuts off) the dot and the digits to the right of it, no matter whether the argument is a positive or negative number"
Math.trunc(-Infinity); // -Infinity
Math.trunc("-1.123"); // -1
Math.trunc(-0.123); // -0
Math.trunc(-0); // -0
Math.trunc(0); // 0
Math.trunc(0.123); // 0
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(Infinity); // Infinity

```

The Math.round() static method returns the value of a number rounded to the nearest integer.
```javascript
Math.round(0.9) // 1
Math.round(5.95) // 6 
Math.round(5.5), // 6
Math.round(5.05) // 5
Math.round(-5.05) // -5 
Math.round(-5.5) // -5
Math.round(-5.95) // -6
```



### Converting Numbers to Strings in Different Bases
In JavaScript, the `.toString(base)` method allows you to convert a number into its string representation in a given numeric system or base. The `base` parameter specifies the base of the numeric system to which the number will be converted. One notable feature is that `base=36` is the maximum base supported. In base-36, numbers can be represented using digits from 0 to 9 and letters from A to Z.

This feature can be particularly handy when dealing with scenarios like shortening URLs, where you need to convert a lengthy identifier into a shorter form. By utilizing a base-36 numeric system, you can succinctly represent numbers.

When using `.toString(base)`, it's advisable to enclose the number in parentheses to ensure clarity, especially when working with expressions. For example, `(300).toString(16)` explicitly indicates to the runtime environment that the number is part of an expression and should be treated as such.

### Equality comparisons and sameness
- IsLooselyEqual: ==
- IsStrictlyEqual: ===
- SameValue: Object.is()
- SameValueZero: used by many built-in operations
  - Same-value-zero equality is not exposed as a JavaScript API, but can be implemented with custom code

| x                 | y                 | ==      | ===     | Object.is | SameValueZero |
| ----------------- | ----------------- | ------- | ------- | --------- | ------------- |
| undefined         | undefined         | ✅ true  | ✅ true  | ✅ true    | ✅ true        |
| null              | null              | ✅ true  | ✅ true  | ✅ true    | ✅ true        |
| true              | true              | ✅ true  | ✅ true  | ✅ true    | ✅ true        |
| false             | false             | ✅ true  | ✅ true  | ✅ true    | ✅ true        |
| 'foo'             | 'foo'             | ✅ true  | ✅ true  | ✅ true    | ✅ true        |
| 0                 | 0                 | ✅ true  | ✅ true  | ✅ true    | ✅ true        |
| +0                | -0                | ✅ true  | ✅ true  | ❌ false   | ✅ true        |
| +0                | 0                 | ✅ true  | ✅ true  | ✅ true    | ✅ true        |
| -0                | 0                 | ✅ true  | ✅ true  | ❌ false   | ✅ true        |
| 0n                | -0n               | ✅ true  | ✅ true  | ✅ true    | ✅ true        |
| 0                 | false             | ✅ true  | ❌ false | ❌ false   | ❌ false       |
| ""                | false             | ✅ true  | ❌ false | ❌ false   | ❌ false       |
| ""                | 0                 | ✅ true  | ❌ false | ❌ false   | ❌ false       |
| '0'               | 0                 | ✅ true  | ❌ false | ❌ false   | ❌ false       |
| '17'              | 17                | ✅ true  | ❌ false | ❌ false   | ❌ false       |
| [1, 2]            | '1,2'             | ✅ true  | ❌ false | ❌ false   | ❌ false       |
| new String('foo') | 'foo'             | ✅ true  | ❌ false | ❌ false   | ❌ false       |
| null              | undefined         | ✅ true  | ❌ false | ❌ false   | ❌ false       |
| null              | false             | ❌ false | ❌ false | ❌ false   | ❌ false       |
| undefined         | false             | ❌ false | ❌ false | ❌ false   | ❌ false       |
| `{ foo: 'bar' }`  | `{ foo: 'bar' }`  | ❌ false | ❌ false | ❌ false   | ❌ false       |
| new String('foo') | new String('foo') | ❌ false | ❌ false | ❌ false   | ❌ false       |
| 0                 | null              | ❌ false | ❌ false | ❌ false   | ❌ false       |
| 0                 | NaN               | ❌ false | ❌ false | ❌ false   | ❌ false       |
| 'foo'             | NaN               | ❌ false | ❌ false | ❌ false   | ❌ false       |
| NaN               | NaN               | ❌ false | ❌ false | ✅ true    | ✅ true        |