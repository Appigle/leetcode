the **Subsets (Power Set)** problem — a classic **backtracking** or **bit manipulation** question.

---

## 🧠 Problem Summary

Given a list of **unique integers**, return **all possible subsets** (also known as the **power set**).

- The result must include the empty set `[]`.
- Order doesn't matter.
- No duplicates are allowed.

---

## ✅ Approach 1: Backtracking (DFS)

This is the most intuitive and flexible way to generate subsets.

### 🔧 Idea:

- At each index, we have two choices: **include** the number or **skip** it.
- Recursively build up subsets and backtrack.

---

### ✅ JavaScript Code (Backtracking):

```javascript
function subsets(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]); // Add current subset

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]); // Choose
      backtrack(i + 1, path); // Explore
      path.pop(); // Un-choose (backtrack)
    }
  }

  backtrack(0, []);
  return result;
}
```

---

### 🧪 Example:

Input:

```js
[1, 2, 3];
```

Result:

```js
[
  [], // nothing chosen
  [1],
  [1, 2],
  [1, 2, 3],
  [1, 3],
  [2],
  [2, 3],
  [3],
];
```

---

## ⏱ Time Complexity

| Metric | Value       |                           |
| ------ | ----------- | ------------------------- |
| Time   | O(2^n)      |                           |
| Space  | O(2^n \* n) | (for storing all subsets) |

Because there are `2^n` possible subsets for `n` elements.

---

## ✅ Optional: Bitmasking Approach

Each subset corresponds to a **bitmask** of length `n` (0 = exclude, 1 = include).

Example:
For `nums = [1, 2, 3]`:

- `000` → `[]`
- `101` → `[1, 3]`
- `111` → `[1, 2, 3]`

Let me know if you’d like this version too!

---

## 🔚 Summary:

- Use backtracking to build all combinations.
- Great recursive practice.
- `[]` is always included.
- No need to sort or deduplicate (input is unique).
