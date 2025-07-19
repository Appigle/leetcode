You're describing the classic **Edit Distance** problem, also known as the **Levenshtein Distance**. It's solved using **Dynamic Programming (DP)**.

---

## 🎯 Problem Summary

Given two strings `word1` and `word2`, return the **minimum number of operations** (insert, delete, replace) required to convert `word1` to `word2`.

---

## 🧠 Key Idea (DP)

Let `dp[i][j]` represent the **minimum number of operations** needed to convert:

- the first `i` characters of `word1` to the first `j` characters of `word2`.

We build up the solution bottom-up using this recurrence:

### 🧾 Recurrence:

If `word1[i - 1] === word2[j - 1]`
→ characters match, no change needed:

```js
dp[i][j] = dp[i - 1][j - 1];
```

Else:

```js
dp[i][j] =
  1 +
  Math.min(
    dp[i - 1][j], // delete from word1
    dp[i][j - 1], // insert into word1
    dp[i - 1][j - 1] // replace
  );
```

---

## ✅ JavaScript Code

```javascript
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  // Base cases: converting from empty string
  for (let i = 0; i <= m; i++) dp[i][0] = i; // delete all
  for (let j = 0; j <= n; j++) dp[0][j] = j; // insert all

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // no change
      } else {
        dp[i][j] =
          1 +
          Math.min(
            dp[i - 1][j], // delete
            dp[i][j - 1], // insert
            dp[i - 1][j - 1] // replace
          );
      }
    }
  }

  return dp[m][n];
}
```

---

## 🧪 Examples

### Example 1:

```js
minDistance('horse', 'ros'); // Output: 3
```

**Steps:**

- horse → rorse (replace h → r)
- rorse → rose (delete r)
- rose → ros (delete e)

---

### Example 2:

```js
minDistance('intention', 'execution'); // Output: 5
```

---

## ⏱ Time and Space Complexity

| Metric | Value    |
| ------ | -------- |
| Time   | O(m × n) |
| Space  | O(m × n) |

Can be optimized to **O(n)** space if you only keep two rows at a time.
