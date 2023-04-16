const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = n.toString().split('');
  let max = 0;
  for (let i = 0; i < num.length; i++) {
    num.splice(i, 1);
    if (Number(num.join('')) > max) max = Number(num.join(''));
    num = n.toString().split('');
  }
  return max;
}

module.exports = {
  deleteDigit
};
