/**
 * Implement the filter() function
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

/**
 * @param {number[]} arr
 * @param {Function} func
 * @return {number[]}
 */
function filter(arr, func) {
  // YOUR CODE HERE
}

/**
 * Example test case
 */
const arr1 = [1, 8, 5, 2, 7, 4];
const arr2 = filter(arr1, (value, index) => value > 5);
console.log(arr2); // [8, 7]
