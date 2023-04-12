const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let array = [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]]];

class DepthCalculator {
  calculateDepth(a) {
    console.log(this);
    let allResults = [1];
    let result = 1;
    function deepCountInside(b) {
      result++;
      for (let i = 0; i < b.length; i++) {
        console.log(this);
        if (Array.isArray(b[i])) {
          deepCountInside(b[i]);
        }
      }
      allResults.push(result);
      result = 1;
    }
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        deepCountInside(a[i]);
      }
    }
    return Math.max(...allResults);
  }
}
const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);

console.log(calculateDepth(array));

module.exports = {
  DepthCalculator
};
