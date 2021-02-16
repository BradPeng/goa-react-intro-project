/**
 * Implement a function called clone that takes an object and returns the shallow copy of the object
 */

/**
 * @param {Object} obj
 * @return {Object}
 */
function clone(obj) {
  // YOUR CODE HERE
}

/**
 * Example test case
 */
const obj1 = { a: 1, b: 2, c: 3, d: { e: 4 } };
const obj2 = clone(obj1);
console.log(obj1 === obj2); // false
console.log(obj2); // { a: 1, b: 2, c: 3, d: { e: 4 } };
obj2.d.e = 5;
console.log(obj1); // { a: 1, b: 2, c: 3, d: { e: 5 } };