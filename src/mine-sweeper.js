const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

let matrix = [
[true, false, false],
[false, true, false],
[false, false, false]
];

function minesweeper(matrix) {
  let resultMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    resultMatrix[i] = matrix[i].slice();
  }
  for (let i = 0; i < resultMatrix.length; i++) {
    for (let j = 0; j < resultMatrix[i].length; j++) {
      let count = 0;
      let ajacent = [];
      if (i > 0) {
        ajacent.push(matrix[i-1][j]);
        if (j > 0) ajacent.push(matrix[i-1][j-1]);
        if (j < matrix.length - 1) ajacent.push(matrix[i-1][j+1]);
      }
      if (i < matrix.length - 1) {
        ajacent.push(matrix[i+1][j]);
        if (j > 0) ajacent.push(matrix[i+1][j-1]);
        if (j < matrix.length - 1) ajacent.push(matrix[i+1][j+1]);
      }
      if (j > 0) ajacent.push(matrix[i][j-1]);
      if (j < matrix.length - 1) ajacent.push(matrix[i][j+1]);
      for (let k = 0; k < ajacent.length; k++) {
        if (ajacent[k] === true) count++;
      }
      resultMatrix[i][j] = count;
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
