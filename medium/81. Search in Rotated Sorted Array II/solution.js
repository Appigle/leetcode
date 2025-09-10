const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mv = nums[mid];
    let leftVal = nums[left];
    let rightVal = nums[right];
    if (mv === target) return true;
    if (mv === rightVal) {
      right--;
      continue;
    }
    if (mv < rightVal) {
      if (target > mv && target <= rightVal) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target < mv && target >= leftVal) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search2 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mv = nums[mid];

    if (target === mv) return true;

    if (mv === nums[right]) {
      right--;
      continue;
    }
    if (mv < nums[right]) {
      if (mv < target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target >= nums[left] && target < mv) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
};
