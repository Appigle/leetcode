the **Combinations** problem — a classic **backtracking** problem.

---

## 🧠 Problem Summary

Given two integers `n` and `k`, return **all possible combinations** of `k` numbers **from the range \[1, n]**.

- You must **choose `k` distinct numbers**
- The result should include **all combinations**
- Order of numbers within a combination doesn’t matter (e.g. `[1,2]` is same as `[2,1]`, so only include one)

---

## ✅ Best Approach: Backtracking

### 🎯 Idea:

Use **backtracking (DFS)** to:

- Build a combination step by step
- Backtrack when the combination reaches size `k`
- Use pruning to avoid unnecessary work

---

## ✅ JavaScript Code:

```javascript
function combine(n, k) {
  const result = [];

  function backtrack(start, path) {
    if (path.length === k) {
      result.push([...path]); // push a copy
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i); // choose
      backtrack(i + 1, path); // explore
      path.pop(); // un-choose (backtrack)
    }
  }

  backtrack(1, []);
  return result;
}
```

---

## 🔁 Step-by-Step Example:

### Input:

```js
(n = 4), (k = 2);
```

### DFS Tree:

```text
Start from 1:
- [1,2]
- [1,3]
- [1,4]
Start from 2:
- [2,3]
- [2,4]
Start from 3:
- [3,4]
```

✅ Output:

```js
[
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [3, 4],
];
```

---

## ⏱ Time Complexity:

| Metric | Value              |
| ------ | ------------------ |
| Time   | O(C(n, k))         |
| Space  | O(k) for recursion |

C(n, k) = number of combinations = `n! / (k! * (n-k)!)`

---

## 🔁 Constraints:

- `1 <= n <= 20` → safe for recursion
- `1 <= k <= n`

---
