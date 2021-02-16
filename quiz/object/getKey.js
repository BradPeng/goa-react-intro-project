/**
 * Implement a function getKey() that takes an object's value and returns the corresponding key.
 */

/**
 * @param {Object} object
 * @param {number} value
 * @return {string}
 */
function getKey(object, value) {
  // YOUR CODE HERE
}

/**
 * Example test case
 */
const object = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  z: 26,
};
const value = 4;
console.log(getKey(object, value) === 'd');
