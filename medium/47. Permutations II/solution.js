/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const len = nums.length;
  const used = new Array(len).fill(false);
  const backtrack = (path) => {
    if (path.length === len) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

      path.push(nums[i]);
      used[i] = true;
      backtrack(path);

      path.pop();
      used[i] = false;
    }
  };
  backtrack([]);
  return result;
};
