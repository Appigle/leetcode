### ✅ Problem Explanation

You are given:

- An array `nums` of length `n`
- An integer `target`

You need to find **three distinct numbers** in `nums` such that their sum is **closest** to `target`.
You only need to return **the sum**, not the triplet itself.

---

### 🧠 Algorithm Intuition

This is a variation of the classic **3Sum problem**, but instead of finding a sum that equals the target, you need to find one **closest to the target**.

We use:

- **Sorting** (to use two pointers efficiently)
- **Two pointers** after fixing one element

---

### 🚀 Steps to Solve (Two Pointer + Greedy)

1. **Sort** the array
2. Fix one number (`nums[i]`), and use two pointers (`left` and `right`) to scan the rest
3. Keep track of the **closest sum** and **minimum difference**
4. If current sum is closer to `target`, update the result
5. Move pointers accordingly based on comparison between current sum and target

---

### ✅ JavaScript Code

```js
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b); // Step 1: Sort array
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const currentSum = nums[i] + nums[left] + nums[right];

      // If exact match, return early
      if (currentSum === target) return currentSum;

      // Update closest if needed
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      // Move pointers
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
};
```

---

### 🧪 Examples

#### Example 1:

```js
Input: nums = [-1,2,1,-4], target = 1
Sorted: [-4, -1, 1, 2]
Possible triplets:
- (-4, -1, 2) = -3
- (-1, 1, 2) = 2 ✅ closest to 1
Output: 2
```

#### Example 2:

```js
Input: nums = [0,0,0], target = 1
Sum: 0 + 0 + 0 = 0
Output: 0
```

---

### 📌 Time Complexity

- Sorting: O(n log n)
- Two-pointers: O(n²)
- **Total**: **O(n²)** — good for `n <= 500`
