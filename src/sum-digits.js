const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numArray = n.toString().split('');
  while (numArray.length > 1) {
    numArray = numArray.reduce((sum, a) => sum + Number(a), 0).toString().split('');
  }
  return Number(numArray.join(''));
}

console.log(getSumOfDigits(100));
console.log(getSumOfDigits(91));

module.exports = {
  getSumOfDigits
};
