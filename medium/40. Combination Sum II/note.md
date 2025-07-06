## 🔍 Differences from Combination Sum I

| Feature                  | Combination Sum I                    | **Combination Sum II** ✅                |
| ------------------------ | ------------------------------------ | ---------------------------------------- |
| Reuse elements           | Allowed                              | ❌ Only once per element                 |
| Duplicates in candidates | Ignored or handled later             | ✅ Must skip duplicates                  |
| Need to sort input first | Optional                             | ✅ Required to skip duplicates correctly |
| Goal                     | Find combinations that sum to target | Same, but without duplicates and reusing |

---

## ✅ Backtracking Strategy for Combination Sum II

We use **backtracking** with the following constraints:

1. **Sort** the input to handle duplicates easily.
2. **Skip duplicates** when the same number appears in the same position.
3. Each candidate is used at **most once**.
4. Only add combinations that exactly match the `target`.

---

## ✅ JavaScript Implementation

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b); // Sort to handle duplicates

  function backtrack(start, path, sum) {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    if (sum > target) return;

    for (let i = start; i < candidates.length; i++) {
      // Skip duplicates at the same recursion depth
      if (i > start && candidates[i] === candidates[i - 1]) continue;

      path.push(candidates[i]);
      backtrack(i + 1, path, sum + candidates[i]); // i + 1: no reuse
      path.pop(); // backtrack
    }
  }

  backtrack(0, [], 0);
  return result;
};
```

---

## 🧪 Examples

### Example 1

```js
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
/*
[
  [1,1,6],
  [1,2,5],
  [1,7],
  [2,6]
]
*/
```

### Example 2

```js
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
/*
[
  [1,2,2],
  [5]
]
*/
```

---

## 🔁 Optional Logging for Clarity

Add this inside the `backtrack` function to see the steps:

```js
console.log(`start=${start}, path=${JSON.stringify(path)}, sum=${sum}`);
```

---

## ⚙️ Time Complexity

- Worst-case: **O(2^n)** — exponential due to combination possibilities.
- Sorting: **O(n log n)**
- Pruning & duplicate skipping improves actual performance.
