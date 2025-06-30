const threeSum = (nums) => {
  const result = [];
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
    let left = i + 1;
    let right = sortedNums.length - 1;
    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      if (sum === 0) {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        while (sortedNums[left] === sortedNums[left + 1]) left++;
        while (sortedNums[right] === sortedNums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum2 = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Step 1: Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    // Step 2: iterate to n-3
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates

    let left = i + 1; // Step 3: Start left pointer after i
    let right = nums.length - 1; // Step 4: Start right pointer at the end

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]; // Step 5: Try this triplet

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]); // Found a triplet

        while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate left
        while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate right

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Increase sum
      } else {
        right--; // Decrease sum
      }
    }
  }

  return result;
};
