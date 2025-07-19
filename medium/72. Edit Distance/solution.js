/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const w1len = word1.length;
  const w2len = word2.length;
  const dp = Array.from({ length: w1len + 1 }, () =>
    new Array(w2len + 1).fill(0)
  );

  // <= -> we have base case: all delete or all insert
  for (let i = 0; i <= w1len; i++) dp[i][0] = i;
  for (let j = 0; j <= w2len; j++) dp[0][j] = j;
  // start from 1 and use <=
  for (let i = 1; i <= w1len; i++) {
    for (let j = 1; j <= w2len; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[w1len][w2len];
};

const minDistance2 = (word1, word2) => {
  const w1len = word1.length;
  const w2len = word2.length;
  const dp = Array.from({ length: w1len + 1 }, () =>
    new Array(w2len + 1).fill(0)
  );

  for (let i = 0; i <= w1len; i++) dp[i][0] = i;
  for (let j = 0; j <= w2len; j++) dp[0][j] = j;

  for (let i = 1; i <= w1len; i++) {
    for (let j = 1; j <= w2len; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }
  return dp[w1len][w2len];
};
