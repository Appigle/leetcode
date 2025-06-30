### 🔍 Problem Explanation

You are given an integer array `nums`. Your goal is to find **all unique triplets** (combinations of 3 different elements at different indices) such that their **sum is zero**. The result must not contain duplicate triplets.

---

### 🧠 Key Concepts (Algorithm Knowledge)

This is a variation of the **3Sum problem**, a classic interview question. To solve it efficiently:

#### ✅ Use Sorting + Two-Pointer Technique:

1. **Sort** the array first.
2. Iterate through the array with index `i`.
3. For each `i`, use **two pointers** (`left` and `right`) to find pairs `j` and `k` such that:
   `nums[i] + nums[left] + nums[right] === 0`
4. Skip duplicates to ensure unique triplets.

#### ✅ Time Complexity:

- Sorting: O(n log n)
- Two-pointer traversal per element: O(n)
- Total: **O(n²)**, which is acceptable for `n <= 3000`.

---

### ✅ JavaScript Code

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Step 1: Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    // Step 2: Skip duplicate numbers for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Increase the sum
      } else {
        right--; // Decrease the sum
      }
    }
  }

  return result;
};
```

---

### 🧪 Example Walkthrough

#### Input:

```js
nums = [-1, 0, 1, 2, -1, -4];
```

#### Sorted:

```js
[-4, -1, -1, 0, 1, 2];
```

#### Found triplets:

- `[-1, -1, 2]`
- `[-1, 0, 1]`

---

### 📌 Edge Cases

| Input              | Output                     | Notes                   |
| ------------------ | -------------------------- | ----------------------- |
| `[0,0,0]`          | `[[0,0,0]]`                | Only one valid triplet  |
| `[0,1,1]`          | `[]`                       | No triplet sums to zero |
| `[-2, 0, 1, 1, 2]` | `[[-2, 0, 2], [-2, 1, 1]]` | Handles duplicates      |

---

The **nSum problem** is a generalization of the classic **two-sum**, **three-sum**, and **four-sum** problems. The goal is to find **unique combinations of `n` numbers** in an array that sum up to a given target.

---

### 🧠 Core Idea

Use **recursion + two pointers**:

- **Sort the array** to handle duplicates easily.
- **Recursively reduce the nSum** problem into a **2Sum** problem.
- Solve the 2Sum using the **two-pointer** technique.

---

### ✅ Template Solution for `nSum`

```js
function nSum(nums, n, target) {
  nums.sort((a, b) => a - b); // Sort the array first

  return kSum(nums, n, 0, target);
}

function kSum(nums, k, start, target) {
  const res = [];

  if (k === 2) {
    // Base case: 2Sum
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum === target) {
        res.push([nums[left], nums[right]]);
        // Skip duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return res;
  }

  // Recursive case: reduce kSum to (k-1)Sum
  for (let i = start; i < nums.length - k + 1; i++) {
    // Pruning
    if (i > start && nums[i] === nums[i - 1]) continue;
    if (nums[i] * k > target) break; // Too large
    if (nums[nums.length - 1] * k < target) continue; // Too small

    const subRes = kSum(nums, k - 1, i + 1, target - nums[i]);

    for (let subset of subRes) {
      res.push([nums[i], ...subset]);
    }
  }

  return res;
}
```

---

### 💡 Example Usage

```js
// For 3Sum:
console.log(nSum([-1, 0, 1, 2, -1, -4], 3, 0));
// Output: [ [-1, -1, 2], [-1, 0, 1] ]

// For 4Sum:
console.log(nSum([1, 0, -1, 0, -2, 2], 4, 0));
// Output: [ [-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1] ]
```

---

### 🚀 Advantages

- ✅ Handles **any n** ≥ 2
- ✅ Automatically handles **duplicates**
- ✅ Efficient for reasonable sizes (n ≤ 4 or 5)

---

### 📌 Time Complexity

- Worst-case: **O(n^(k-1))** for `k`-sum because:

  - You recurse through `n` elements `k-2` times
  - Each 2Sum step is O(n)

---
