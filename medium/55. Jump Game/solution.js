const canJump = (nums) => {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
};

canJump([2, 3, 1, 1, 4]);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump2 = function (nums) {
  let farthest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false;
    }
    farthest = Math.max(farthest, i + nums[i]);
  }
  return true;
};
