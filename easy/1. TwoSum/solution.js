/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Optimized Hash Map Solution (O(n) time, O(n) space)
 * 💡 Strategy:
 * Use a hash map (Map) to store number -> index.
 *
 * As you iterate, check if target - currentNumber is already in the map.
 *
 * 🔁 Visualization (Example: nums = [2, 7, 11, 15], target = 9):
 * Index	num	target - num	In map?	Action
 * 0	2	7	❌	Add 2 → 0
 * 1	7	2	✅	Return [0, 1]
 */
function twoSum2(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(`Checking nums[${i}] = ${nums[i]}, need ${complement}`);
    if (map.has(complement)) {
      console.log(`Found ${complement} at index ${map.get(complement)}`);
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
    console.log(`Map now:`, Object.fromEntries(map));
  }
}
