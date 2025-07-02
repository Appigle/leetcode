This problem is a generalization of the **3Sum** problem: now, instead of finding triplets that sum to the target, we are looking for **quadruplets**.

---

## 🧠 Problem Understanding

You are given an integer array `nums` and an integer `target`.
Your goal is to **find all unique combinations of four numbers** such that their sum is equal to `target`.

### 🔍 Example

```js
nums = [1, 0, -1, 0, -2, 2], target = 0

// Output: [
  [-2, -1, 1, 2],
  [-2, 0, 0, 2],
  [-1, 0, 0, 1]
]
```

---

## 🧩 Algorithm Idea: Two Pointers + Sorting

### 🔑 Key Ideas:

1. **Sort the array** to make it easier to avoid duplicates and use two pointers.
2. **Fix two numbers with two loops**.
3. Use **two pointers** for the remaining two numbers.
4. **Skip duplicates** carefully.

### 💡 Time Complexity:

- **O(n³)** — Three nested loops (or two loops and two pointers).
- Acceptable for `n ≤ 200`.

---

## ✅ JavaScript Implementation

```js
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate i

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // skip duplicate j

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);

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
    }
  }

  return result;
};
```

---

## 🧪 Test Example

```js
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

---

## 🧱 Extension: General n-Sum Problem

Great! The **n-Sum problem** is a generalization of 2Sum, 3Sum, and 4Sum. It's about finding **unique combinations of `n` numbers** in an array that sum up to a **target value**.

---

## 🧠 Problem

> Given an array `nums`, an integer `target`, and an integer `n`, find all **unique n-tuples** such that their sum is equal to `target`.

---

## 🔄 Recursive Approach for n-Sum

### 💡 Key Insight:

- Reduce the **n-Sum** problem to an **(n-1)-Sum** problem recursively.
- Base case is `2Sum`, which can be solved with **two pointers** (because the array is sorted).

---

## 🧩 Algorithm Steps

1. **Sort the array** to handle duplicates and enable two-pointer technique.
2. Define a recursive function `nSum(nums, target, n, start)`:

   - If `n === 2`: use two pointers to find all pairs that sum to `target`.
   - Else:

     - Loop through array from `start` to `len - n + 1`:

       - Skip duplicates.
       - Recursively call `nSum` for `n - 1` elements with updated target and start index.

---

## ✅ JavaScript Implementation

```js
var nSum = function (nums, target, n, start = 0) {
  const res = [];
  const len = nums.length;
  if (n < 2 || len < n) return res;

  nums.sort((a, b) => a - b);

  const helper = (start, target, n, path) => {
    if (n === 2) {
      let left = start,
        right = nums.length - 1;
      while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
          res.push([...path, nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    } else {
      for (let i = start; i < len - n + 1; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        helper(i + 1, target - nums[i], n - 1, [...path, nums[i]]);
      }
    }
  };

  helper(start, target, n, []);
  return res;
};
```

---

## 🧪 Example Test Cases

```js
// 4Sum
console.log(nSum([1, 0, -1, 0, -2, 2], 0, 4));
// Output: [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]

// 3Sum
console.log(nSum([-1, 0, 1, 2, -1, -4], 0, 3));
// Output: [[-1,-1,2], [-1,0,1]]

// 2Sum
console.log(nSum([1, 2, 3, 4, 5], 6, 2));
// Output: [[1,5],[2,4]]
```

---

## 🔍 Time Complexity

- Worst case: **O(nⁿ⁻¹)** (combinatorial explosion for large `n`)
- Acceptable for **small `n` (e.g. ≤ 4 or 5)**

---

## 📌 Summary

| Problem | Use nSum?    | Alternative?          |
| ------- | ------------ | --------------------- |
| 2Sum    | ✅ Base case | HashMap (if unsorted) |
| 3Sum    | ✅ nSum(n=3) | Custom 3Sum solution  |
| 4Sum    | ✅ nSum(n=4) | Custom 4Sum solution  |
