const jump = (nums) => {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }
  return jumps;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump2 = function (nums) {
  let jump = 0;
  let farthest = 0;
  let currentEnd = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    if (i === currentEnd) {
      jump++;
      currentEnd = farthest;
    }
  }
  return jump++;
};
