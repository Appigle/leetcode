To determine whether you can reach the **last index** of the array, given that each element tells you the **maximum number of steps you can jump** from that position, we can use a **greedy algorithm**.

---

### ✅ Intuition

- At each index, we try to keep track of the **farthest index we can reach**.
- If at any point the current index is **greater than the farthest reachable index**, we **cannot proceed further** — return `false`.
- If we can reach the last index or beyond, return `true`.

---

### 🧠 JavaScript Implementation

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let farthest = 0; // Max index we can reach

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false; // We can't even reach this point
    }
    farthest = Math.max(farthest, i + nums[i]);
  }

  return true;
};
```

---

### 🔄 Example Walkthrough

#### Example 1: `nums = [2,3,1,1,4]`

| Index | Value | Max Reachable   |
| ----- | ----- | --------------- |
| 0     | 2     | max(0, 0+2) = 2 |
| 1     | 3     | max(2, 1+3) = 4 |
| 2     | 1     | max(4, 2+1) = 4 |
| 3     | 1     | max(4, 3+1) = 4 |
| 4     | 4     | Already reached |

✅ Output: `true`

---

#### Example 2: `nums = [3,2,1,0,4]`

| Index | Value | Max Reachable           |
| ----- | ----- | ----------------------- |
| 0     | 3     | max(0, 0+3) = 3         |
| 1     | 2     | max(3, 1+2) = 3         |
| 2     | 1     | max(3, 2+1) = 3         |
| 3     | 0     | max(3, 3+0) = 3         |
| 4     | 4     | ❌ Cannot reach index 4 |

🚫 Output: `false`

---

### 🧩 Time and Space Complexity

- **Time:** O(n) – One pass through the array.
- **Space:** O(1) – Constant extra space.

---
