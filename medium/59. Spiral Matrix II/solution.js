const generateMatrix = (n) => {
  const result = Array.from({ length: n }, () => Array(n).fill(0));
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;
  let num = 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = num++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = num++;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = num++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = num++;
    }
    startCol++;
  }
  return result;
};

generateMatrix(3);

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix2 = function (n) {
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;
  let left = 0;
  let num = 1;
  const result = Array.from({ length: n }, () => new Array(n).fill(0));
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result[top][i] = num;
      num++;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result[i][right] = num;
      num++;
    }
    right--;
    if (bottom >= top) {
      for (let i = right; i >= left; i--) {
        result[bottom][i] = num;
        num++;
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result[i][left] = num;
        num++;
      }
      left++;
    }
  }
  return result;
};
