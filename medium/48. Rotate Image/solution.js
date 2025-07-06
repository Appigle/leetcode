const rotate = (matrix) => {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < len; i++) {
    matrix[i].reverse();
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate2 = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    // j = i + 1 does two things:
    // 1. Avoids redundant swaps: You only visit each pair once
    // 2. Skips diagonal elements: No need to swap matrix[i][i] with itself
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};
