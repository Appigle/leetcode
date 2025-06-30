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
