To **merge overlapping intervals**, the key idea is to **sort the intervals by their starting point** and then combine any intervals that overlap.

---

### ✅ Step-by-Step Approach

1. **Sort** the intervals based on the starting time.
2. **Initialize** an empty result array.
3. **Iterate** over the sorted intervals:

   - If the result array is empty or the current interval does **not overlap** with the last one in the result, just add it.
   - If it **does overlap**, **merge** the current interval with the last one in the result by updating the `end` time.

---

### 🧠 JavaScript Implementation

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals.length) return [];

  // Step 1: Sort intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    const current = intervals[i];

    if (current[0] <= last[1]) {
      // Overlapping: merge them
      last[1] = Math.max(last[1], current[1]);
    } else {
      // No overlap: add to result
      result.push(current);
    }
  }

  return result;
};
```

---

### 🔄 Example

#### Input:

```js
[
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
```

**Sorted:**

```js
[
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
```

- Merge \[1,3] and \[2,6] → \[1,6]
- \[8,10] doesn’t overlap with \[1,6]
- \[15,18] doesn’t overlap with \[8,10]

#### Output:

```js
[
  [1, 6],
  [8, 10],
  [15, 18],
];
```

---

### 🧩 Time and Space Complexity

- **Time:** O(n log n) – for sorting the intervals.
- **Space:** O(n) – for storing the merged intervals.
