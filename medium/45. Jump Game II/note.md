This problem is a classic **Greedy Algorithm** problem: **Jump Game II**.

---

## 🧠 **Problem Summary**

You’re given an array `nums`, where each `nums[i]` tells you the **maximum number of steps you can jump forward** from index `i`.

You start at index `0`, and you want to reach the last index (`nums.length - 1`) using **as few jumps as possible**.

---

### ✅ **Goal**

Return the **minimum number of jumps** required to reach the last index.

---

### 🔍 Example Breakdown

#### Example 1:

`nums = [2,3,1,1,4]`

- **Jump 1**: From index 0, you can go up to index 2. Jump to index 1 (value 3).
- **Jump 2**: From index 1, you can jump up to 3 steps (index 4).

➡️ **Answer: 2 jumps**

---

### 💡 Key Insight:

You want to track:

- The **farthest index** you can reach at each step.
- The **end of your current jump range**.
- When you reach the end of the range, **increment the jump counter** and update the range.

---

## ✅ **Greedy Algorithm Code (JavaScript)**

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);

    // If we've reached the end of the range for the current jump
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
    }
  }

  return jumps;
};
```

---

### 🔁 How It Works:

Let's trace `nums = [2,3,1,1,4]`:

- `i = 0`:

  - `farthest = max(0, 0 + 2) = 2`
  - `i == currentEnd` → `jumps = 1`, `currentEnd = 2`

- `i = 1`:

  - `farthest = max(2, 1 + 3) = 4`

- `i = 2`:

  - `i == currentEnd` → `jumps = 2`, `currentEnd = 4`

Now `i == nums.length - 1`, so we're done!

---

### ⏱️ Time & Space Complexity

- **Time**: O(n) — Only one pass through the array.
- **Space**: O(1) — Constant space.
