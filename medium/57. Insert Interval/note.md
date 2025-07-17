To **insert a new interval into a list of non-overlapping, sorted intervals**, and **merge** if necessary, we can follow this clear step-by-step approach.

---

### ✅ Strategy

Given that `intervals` is **sorted by start time** and non-overlapping:

1. **Add all intervals that come _before_ `newInterval`** (i.e., end < newInterval.start).
2. **Merge all intervals that _overlap_ with `newInterval`**.
3. **Add all intervals that come _after_ `newInterval`** (i.e., start > newInterval.end).

---

### 🧠 JavaScript Implementation

```javascript
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const result = [];
  let i = 0;
  const n = intervals.length;

  // 1. Add all intervals before newInterval
  while (i < n && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // 2. Merge overlapping intervals
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // 3. Add remaining intervals
  while (i < n) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};
```

---

### 🔄 Example Trace

#### Input:

```js
intervals = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
newInterval = [4, 8];
```

#### Steps:

- Add \[1,2]
- Merge \[3,5], \[6,7], \[8,10] into \[3,10] with newInterval
- Add \[12,16]

#### Output:

```js
[
  [1, 2],
  [3, 10],
  [12, 16],
];
```

---

### ⏱ Time and Space Complexity

- **Time:** O(n), where n is the number of intervals.
- **Space:** O(n) for the result array.

---
