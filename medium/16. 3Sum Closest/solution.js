const threeSumClosest = (nums, target) => {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closest;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest2 = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === target) return currentSum;
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
};
