var subsets = function (nums) {
  const result = [];
  const backtracking = (start, path) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1, path);
      path.pop();
    }
  };
  backtracking(0, []);
  return result;
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const backtracking = (start, path) => {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); // choose
      backtracking(i + 1, path); // explore
      path.pop(); // back track (un-choose)
    }
  };
  backtracking(0, []);
  return result;
};
