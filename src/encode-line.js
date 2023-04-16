const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newstr = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      if(count) newstr += (count + 1);
      newstr += str[i];
      count = 0;
    }
    else {
      count++;
    }
  }
  return newstr;
}

//console.log(encodeLine('aabbbc'));

module.exports = {
  encodeLine
};
