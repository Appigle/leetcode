To solve this problem in **O(log n)** time, we use **binary search** twice:

1. Once to find the **first occurrence** of the target.
2. Once to find the **last occurrence** of the target.

---

### ✅ Intuition:

Because the array is **sorted**, we can use **binary search** to efficiently zoom in on the target. By slightly modifying the standard binary search:

- We find the **first position** where the value equals `target`.
- Then, we find the **last position**.

---

### ✅ Final Code (JavaScript):

```javascript
function searchRange(nums, target) {
  const findBound = (isFirst) => {
    let left = 0,
      right = nums.length - 1,
      bound = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) {
          right = mid - 1; // move left to find first
        } else {
          left = mid + 1; // move right to find last
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return bound;
  };

  return [findBound(true), findBound(false)];
}
```

---

### 🧪 Example:

```js
searchRange([5, 7, 7, 8, 8, 10], 8); // Output: [3, 4]
searchRange([5, 7, 7, 8, 8, 10], 6); // Output: [-1, -1]
searchRange([], 0); // Output: [-1, -1]
```

---

### 🧠 Time Complexity:

- `O(log n)` for each binary search.
- Total: `O(log n)` ✅

---

Your code is **mostly correct**, but there are two small issues:

### ✅ Issues:

1. `right` is not declared properly with `let`:

   ```js
   let left = 0;
   right = len - 1; // ❌ `right` is undeclared
   ```

2. You are using a **linear search (`while`)** to expand left and right after finding the target. That breaks the **O(log n)** constraint.

---

### 🔧 Corrected Version (fixing variable declaration only — still O(n)):

```js
var searchRange = function (nums, target) {
  const len = nums.length;
  if (len === 0) return [-1, -1];
  let left = 0,
    right = len - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      let t1 = mid;
      let t2 = mid;
      while (t1 >= 0 && nums[t1] === target) t1--;
      while (t2 < len && nums[t2] === target) t2++;
      return [t1 + 1, t2 - 1];
    }
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [-1, -1];
};
```

---

### ⚠️ However, this is **not** `O(log n)` due to `while (t1...)` and `while (t2...)`.

If you want the **O(log n)** correct solution, here's the optimized version using **binary search twice**:

### ✅ Optimal `O(log n)` Version:

```js
var searchRange = function (nums, target) {
  const findBound = (isFirst) => {
    let left = 0,
      right = nums.length - 1,
      bound = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        bound = mid;
        if (isFirst) right = mid - 1;
        else left = mid + 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return bound;
  };

  return [findBound(true), findBound(false)];
};
```
