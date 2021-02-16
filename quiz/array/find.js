/**
 * Implement the find() function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 */

/**
 * @param {Object[]} arr
 * @param {Function} func
 * @return {Object}
 */
function find(arr, func) {
  // YOUR CODE HERE
}

/**
 * Example test case
 */
const arr = [{ val: 3 }, { val: 1 }, { val: 2 }];
const res = find(arr, ({ val }, index) => val === 1);
console.log(res === arr[1]); // true
