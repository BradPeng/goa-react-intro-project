/**
 * Implement the every() function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */

/**
 * @param {number[]} arr
 * @param {Function} func
 * @return {boolean}
 */
function every(arr, func) {
  // YOUR CODE HERE
}

/**
 * Example test case
 */
const arr = [1, 2, 3, 4, 5];
const bool = every(arr, (num, index) => num > 0);
console.log(bool); // true
