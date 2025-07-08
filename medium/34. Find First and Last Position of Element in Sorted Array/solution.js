/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *  O(n)
 */
var searchRange = function (nums, target) {
  const len = nums.length;
  if (len === 0) return [-1, -1];
  let left = 0;
  right = len - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      let t1 = mid;
      let t2 = mid;
      while (t1 >= 0 && nums[t1] === target) t1--;
      while (t2 < len && nums[t2] === target) t2++;
      return [t1 + 1, t2 - 1];
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return [-1, -1];
};
