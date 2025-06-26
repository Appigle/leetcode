/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) return n;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    const current = first + second;
    first = second;
    second = current;
  }
  return second;
};

var climbStairs2 = function (n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};

climbStairs2(3);

// arbitrary steps
var climbStairs3 = function (n) {
  const steps = [1, 2, 5]; // arbitrary steps
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < steps.length; j++) {
      if (i >= steps[j]) {
        dp[i] += dp[i - steps[j]];
      }
    }
  }
  return dp[n];
};

climbStairs3(3);
