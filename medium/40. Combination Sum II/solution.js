const combinationSum2 = (candidates, target) => {
  const result = [];
  candidates.sort((a, b) => a - b);
  const backtrack = (start, target, current) => {
    if (target === 0) {
      result.push([...current]);
      return;
    }
    if (target < 0) return;
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      current.push(candidates[i]);
      backtrack(i, target - candidates[i], current);
      current.pop();
    }
  };
  backtrack(0, target, []);
  return result;
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum22 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const backtrack = (start, path, sum) => {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(i + 1, path, sum + candidates[i]);
      path.pop();
    }
  };
  backtrack(0, [], 0);
  return result;
};
