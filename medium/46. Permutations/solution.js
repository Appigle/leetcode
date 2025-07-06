const permute = (nums) => {
  const result = [];
  const backtrack = (current) => {
    if (current.length === nums.length) {
      result.push([...current]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (current.includes(nums[i])) continue;
      current.push(nums[i]);
      backtrack(current);
      current.pop();
    }
  };
  backtrack([]);
  return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute2 = function (nums) {
  const result = [];
  const used = new Array(nums.length).fill(false);
  const backtrack = (path) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

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
