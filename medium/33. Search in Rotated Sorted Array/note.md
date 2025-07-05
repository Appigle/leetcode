### 🧠 Problem Summary:

You're given:

- A sorted array (in **ascending** order),
- **Rotated** at an unknown pivot,
- And you must find the **index** of a given `target`.

You **must** solve it in **O(log n)** time — which implies **binary search**.

---

### 🌀 Rotated Sorted Array Explained:

Say we start with:

```
Original:  [0, 1, 2, 4, 5, 6, 7]
Rotated:   [4, 5, 6, 7, 0, 1, 2] ← pivot at 4
Index:      0  1  2  3  4  5  6
```

We still want to do **binary search**, but because the array is rotated, we can't just do a regular one. So we adapt.

---

### 🔍 Key Insight:

For any middle element in the array (`nums[mid]`), **one side of the array is guaranteed to be sorted**.

#### So at each step:

1. Determine which side is sorted: left or right.
2. Use that info to decide where to move your search boundaries.

---

### ✅ Algorithm Steps:

```js
function search(nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // search left
      } else {
        left = mid + 1; // search right
      }
    }
    // Right half is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // search right
      } else {
        right = mid - 1; // search left
      }
    }
  }

  return -1; // target not found
}
```

---

### 🧪 Examples:

#### Input: `nums = [4,5,6,7,0,1,2]`, `target = 0`

- Output: `4` ✅

#### Input: `nums = [4,5,6,7,0,1,2]`, `target = 3`

- Output: `-1` ❌ not found

---

### 🧠 Why is it O(log n)?

- You're **halving the search space** on each iteration, just like normal binary search.

---
