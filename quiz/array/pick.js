/**
 * Implement a function called pick
 */

/**
 * @param {Object} obj
 * @param {Function} func
 * @return {Object}
 */
function pick(obj, func) {
  // YOUR CODE HERE
}

/**
 * Example test case
 */
const obj1 = { a: 1, b: 2, c: 3, d: 4 };
const obj2 = pick(obj1, (value, key) => value % 2 === 0);
console.log(obj2); // { b: 2, d: 4 }
