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
let allResults = [1];
let result = 1;

class DepthCalculator {
  calculateDepth(a, first = true) {
    if(first) {
      result = 1;
      allResults = [];
    }
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        result++
        this.calculateDepth(a[i], false);
      }
    }
    allResults.push(result);
    result = 1;
    return Math.max(...allResults);
  }
}
const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);

console.log(calculateDepth(array));

module.exports = {
  DepthCalculator
};
