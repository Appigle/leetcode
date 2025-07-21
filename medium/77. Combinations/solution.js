/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const current = [];
  const backtrack = (start) => {
    if (current.length === k) {
      result.push([...current]);
      return;
    }
    for (let i = start; i <= n; i++) {
      current.push(i);
      backtrack(i + 1);
      current.pop();
    }
  };
  backtrack(1);
  return result;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const backtracking = (start, path) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtracking(i + 1, path);
      path.pop();
    }
  };
  backtracking(1, []);
  return result;
};
