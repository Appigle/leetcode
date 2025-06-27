```javascript
for (let j = 1; j < i; j++) {
  row[j] = result[i - 1][j - 1] + result[i - 1][j];
}
```

And asking: **"When `i = 0`, wouldn't `result[i - 1]` be `result[-1]` (undefined) and crash?"**

---

### ✅ Short Answer:

**No, the code will not crash**, because the **inner loop is never entered when `i = 0`**.

---

### 📌 Detailed Explanation:

Here’s the full loop:

```javascript
for (let i = 0; i < numRows; i++) {
  const row = new Array(i + 1).fill(1); // Every row starts/ends with 1s

  for (let j = 1; j < i; j++) {
    row[j] = result[i - 1][j - 1] + result[i - 1][j];
  }

  result.push(row);
}
```

### Key Points:

- When `i = 0`, the inner loop runs:

  ```javascript
  for (let j = 1; j < 0; j++) {
  ```

  - The condition `1 < 0` is false, so **the loop body never executes**.

- Therefore, `result[i - 1]` (i.e., `result[-1]`) is **never accessed** when `i = 0`.

---

### ✅ Safe and Intended Design:

- The outer loop builds the rows.
- The inner loop fills in the "middle" values for rows `i >= 2`.
- Rows `0` and `1` are hardcoded with all 1s by:

  ```js
  new Array(i + 1).fill(1);
  ```

---

### 🧪 Safe Execution Trace:

| i   | `row`          | Inner loop runs? | result after push          |
| --- | -------------- | ---------------- | -------------------------- |
| 0   | `[1]`          | ❌               | `[[1]]`                    |
| 1   | `[1, 1]`       | ❌               | `[[1], [1, 1]]`            |
| 2   | `[1, _, 1]`    | ✅ j = 1         | `[[1], [1, 1], [1, 2, 1]]` |
| 3   | `[1, _, _, 1]` | ✅ j = 1,2       | `[[1], ..., [1, 3, 3, 1]]` |

---

### ✅ Summary

- `result[i - 1]` is only used **when `i >= 2`**.
- So, **no crash** and this logic is **safe and intentional**.
