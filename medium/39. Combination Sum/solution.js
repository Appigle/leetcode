const combinationSum = (candidates, target) => {
  const result = [];
  const backtrack = (start, target, current) => {
    if (target === 0) {
      result.push([...current]);
      return;
    }
    if (target < 0) return;
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) continue;
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
var combinationSum2 = function (candidates, target) {
  const result = [];
  const backtrack = (start, path, sum) => {
    if (sum === target) {
      result.push([...path]);
    }
    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path, sum + candidates[i]);
      path.pop(); // <- backtrack
    }
  };
  backtrack(0, [], 0);
  return result;
};
