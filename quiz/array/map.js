/**
 * Implement the map() function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

/**
 * @param {Object} obj
 * @param {Function} func
 * @return {string[]}
 */
function map(obj, func) {
  // YOUR CODE HERE
}

/**
 * Example test case
 */
const obj = { a: 1, b: 2, c: 3 };
const arr = map(obj, (num, key) => key);
console.log(arr); // ['a', 'b', 'c'];
