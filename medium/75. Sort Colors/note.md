You're tackling the **Set Matrix Zeroes** problem — a classic question that tests your ability to manipulate matrices **in-place**, with a clever use of existing memory.

---

## ✅ Problem Summary

Given a matrix:

- If any element is `0`, **set its entire row and column to `0`**
- Do it **in-place** (no extra matrix allowed)
- Optimize space to **constant space (O(1))**

---

## 🧠 Step-by-Step Explanation (Constant Space)

### 📌 Key Insight:

We can **reuse the first row and first column** of the matrix to store which rows and columns should be set to `0`.

But we need to be careful, because the **first row and column themselves** might contain `0`, and we might overwrite useful info.

### 👣 Steps:

---

### 1️⃣ Scan the matrix to record rows/cols to zero

- Use **first row** to mark columns
- Use **first column** to mark rows
- Use two flags: `firstRowHasZero`, `firstColHasZero` to separately remember if the first row or column originally had any `0`.

---

### 2️⃣ Zero out cells based on markers in first row/column

If `matrix[i][j]` needs to be `0`, then:

- `matrix[i][0] === 0` or `matrix[0][j] === 0`

---

### 3️⃣ Finally, zero out the **first row and column** if needed

---

## ✅ JavaScript Code (O(1) Space):

```javascript
function setZeroes(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstRowHasZero = false;
  let firstColHasZero = false;

  // Check if first row has any zero
  for (let j = 0; j < n; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // Check if first column has any zero
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // Use first row and column to mark zero rows and columns
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // mark row
        matrix[0][j] = 0; // mark column
      }
    }
  }

  // Zero out cells based on the markers
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero out first row if needed
  if (firstRowHasZero) {
    for (let j = 0; j < n; j++) {
      matrix[0][j] = 0;
    }
  }

  // Zero out first column if needed
  if (firstColHasZero) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }
}
```

---

## 🔍 Example Walkthrough

Input:

```js
[
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
```

After steps:

```js
[
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
];
```

---

## 🧮 Time & Space Complexity

| Metric | Value    |                         |
| ------ | -------- | ----------------------- |
| Time   | O(m × n) |                         |
| Space  | O(1)     | ✅ constant extra space |

---

Let's do a **step-by-step dry run** using a sample input to see exactly how the algorithm works.

---

## 🧪 Sample Input:

```js
matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
target = 16;
```

---

### 📐 Dimensions:

- `m = 3` (rows)
- `n = 4` (columns)
- So total elements: `m * n = 12`
- The virtual 1D array looks like:

  ```
  Index:  0  1  2  3   4   5   6   7   8   9   10  11
  Value: [1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 60]
  ```

---

## 🔁 Binary Search Step-by-Step

### Step 1: Initialize

```js
left = 0
right = m * n - 1 = 11
```

---

### Step 2: First iteration

```js
mid = Math.floor((0 + 11) / 2) = 5
row = Math.floor(5 / 4) = 1
col = 5 % 4 = 1
value at matrix[1][1] = 11
```

Compare `11 < 16` → Target is to the **right**

```js
left = mid + 1 = 6
```

---

### Step 3: Second iteration

```js
mid = Math.floor((6 + 11) / 2) = 8
row = Math.floor(8 / 4) = 2
col = 8 % 4 = 0
value = matrix[2][0] = 23
```

Compare `23 > 16` → Target is to the **left**

```js
right = mid - 1 = 7
```

---

### Step 4: Third iteration

```js
mid = Math.floor((6 + 7) / 2) = 6
row = Math.floor(6 / 4) = 1
col = 6 % 4 = 2
value = matrix[1][2] = 16
```

✅ Match found! Return `true`

---

## ✅ Final Result:

```js
true;
```

---

## 🧠 Summary of Conversions:

| mid | row | col | matrix\[row]\[col] | Action          |
| --- | --- | --- | ------------------ | --------------- |
| 5   | 1   | 1   | 11                 | left = 6        |
| 8   | 2   | 0   | 23                 | right = 7       |
| 6   | 1   | 2   | 16                 | 🎯 Found target |

---
