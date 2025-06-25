/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray2(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  let start = 0;
  let tempStart = 0;
  let end = 0;

  console.log(`Initial state:`);
  console.log(
    `currentSum: ${currentSum}, maxSum: ${maxSum}, start: ${start}, end: ${end}`
  );
  console.log('---');

  for (let i = 1; i < nums.length; i++) {
    console.log(`i = ${i}, nums[i] = ${nums[i]}`);

    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      tempStart = i;
      console.log(`  → Start new subarray at index ${i}`);
    } else {
      currentSum += nums[i];
      console.log(`  → Extend subarray, currentSum becomes ${currentSum}`);
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      start = tempStart;
      end = i;
      console.log(
        `  ✅ New max found! maxSum = ${maxSum}, subarray: nums[${start}..${end}]`
      );
    } else {
      console.log(`  maxSum remains ${maxSum}`);
    }

    console.log(`  tempStart: ${tempStart}, start: ${start}, end: ${end}`);
    console.log('---');
  }

  const maxSubarray = nums.slice(start, end + 1);
  console.log('🔚 Final Result:');
  console.log('Maximum subarray:', maxSubarray);
  console.log('Maximum sum:', maxSum);

  return maxSum;
}

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubArray2(nums);

/**
 * i	nums[i]	currentSum = max(nums[i], currentSum + nums[i])	maxSum = max(maxSum, currentSum)	Explanation
1	1	max(1, -2+1) = 1	max(-2, 1) = 1	Start new subarray at 1
2	-3	max(-3, 1+(-3)) = -2	max(1, -2) = 1	Continue is worse, so start over
3	4	max(4, -2+4) = 4	max(1, 4) = 4	New max found
4	-1	max(-1, 4+(-1)) = 3	max(4, 3) = 4	Continue the subarray
5	2	max(2, 3+2) = 5	max(4, 5) = 5	New max found
6	1	max(1, 5+1) = 6	max(5, 6) = 6 ✅	New max found
7	-5	max(-5, 6+(-5)) = 1	max(6, 1) = 6	Continue but max doesn't change
8	4	max(4, 1+4) = 5	max(6, 5) = 6	Not the highest
 */

/**
 * Initial state:
 * currentSum: -2, maxSum: -2, start: 0, end: 0
 * ---
 * i = 1, nums[i] = 1
 * → Start new subarray at index 1
 * ✅ New max found! maxSum = 1, subarray: nums[1..1]
 * tempStart: 1, start: 1, end: 1
 * ---
 * i = 2, nums[i] = -3
 * → Extend subarray, currentSum becomes -2
 * maxSum remains 1
 * tempStart: 1, start: 1, end: 1
 * ---
 * i = 3, nums[i] = 4
 * ✅ New max found! maxSum = 4, subarray: nums[3..3]
 * tempStart: 3, start: 3, end: 3
 * ---
 * i = 4, nums[i] = -1
 * → Extend subarray, currentSum becomes 3
 * maxSum remains 4
 * tempStart: 3, start: 3, end: 3
 * ---
 * i = 5, nums[i] = 2
 * → Extend subarray, currentSum becomes 5
 * ✅ New max found! maxSum = 5, subarray: nums[3..5]
 * tempStart: 3, start: 3, end: 5
 * ---
 * i = 6, nums[i] = 1
 * → Extend subarray, currentSum becomes 6
 * ✅ New max found! maxSum = 6, subarray: nums[3..6]
 * tempStart: 3, start: 3, end: 6
 * ---
 * i = 7, nums[i] = -5
 * → Extend subarray, currentSum becomes 1
 * maxSum remains 6
 * tempStart: 3, start: 3, end: 6
 * ---
 * i = 8, nums[i] = 4
 * → Extend subarray, currentSum becomes 5
 * maxSum remains 6
 * tempStart: 3, start: 3, end: 6
 * ---
 * 🔚 Final Result:
 * Maximum subarray: (4) [4, -1, 2, 1]
 * Maximum sum: 6
 */
