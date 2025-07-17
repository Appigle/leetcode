const uniquePaths = (m, n) => {
  const dp = Array.from({ length: m }, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};

uniquePaths(3, 7);

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function (m, n) {
  const dp = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }
  return dp[n - 1];
};

function uniquePaths3(m, n) {
  function dfs(row, col) {
    // Out of bounds
    if (row >= m || col >= n) return 0;

    // Reached destination
    if (row === m - 1 && col === n - 1) return 1;

    // Move down + move right
    return dfs(row + 1, col) + dfs(row, col + 1);
  }

  return dfs(0, 0);
}
