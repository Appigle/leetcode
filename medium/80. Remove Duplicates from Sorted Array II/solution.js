/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;

  for (n of nums) {
    if (i < 2 || n > nums[i - 2]) {
      nums[i] = n;
      i++;
    }
  }
  return i;
};
