const singleNumber = (nums) => {
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [num, count] of map) {
    if (count === 1) return num;
  }
};

singleNumber([2, 2, 1]);

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function (nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};
