const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example

 *
 * The result should be 9
 */

function getMatrixElementsSum(matrix) {
  let sum = 0;
  let excludedIndexes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!excludedIndexes.includes(j)) sum += matrix[i][j];
      if (matrix[i][j] === 0) excludedIndexes.push(j);
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
