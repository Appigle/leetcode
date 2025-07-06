To **rotate a square matrix by 90 degrees clockwise in-place**, follow **two main steps**:

---

### ✅ **Step-by-step Explanation**

Let’s say the input matrix is:

```
1 2 3
4 5 6
7 8 9
```

---

### ✅ Step 1: **Transpose the Matrix**

Swap `matrix[i][j]` with `matrix[j][i]`

**Result after transpose:**

```
1 4 7
2 5 8
3 6 9
```

---

### ✅ Step 2: **Reverse Each Row**

For each row, reverse its elements.

**Final Output:**

```
7 4 1
8 5 2
9 6 3
```

---

### ✅ JavaScript Code

```js
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};
```

---

### 🔍 Why This Works

- **Transposing** flips rows and columns.
- **Reversing rows** reorders the columns correctly for a 90° clockwise rotation.

---

### 🧠 Time & Space Complexity

- **Time:** O(n²) — both transpose and reverse touch every element once.
- **Space:** O(1) — in-place, no extra matrix used.

---

Great question! Let's walk through how to rotate a matrix **in-place** for **90°, 180°, 270°, and 360°** clockwise. We'll use a square `n x n` matrix and only **modify the matrix in-place** — without using extra memory.

---

## 🔄 Rotation Breakdown

### ✅ 90° Clockwise Rotation (🕘 ➡️ 🕐)

Two steps:

1. **Transpose the matrix** (flip across the diagonal)
2. **Reverse each row**

```js
function rotate90(matrix) {
  const n = matrix.length;

  // Step 1: Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse each row
  for (let row of matrix) {
    row.reverse();
  }
}
```

---

### ✅ 180° Clockwise Rotation (🕘 ➡️ 🕡)

Two steps:

1. **Reverse each row**
2. **Reverse the entire matrix (rows order)**

```js
function rotate180(matrix) {
  const n = matrix.length;

  // Step 1: Reverse each row
  for (let row of matrix) {
    row.reverse();
  }

  // Step 2: Reverse row order
  matrix.reverse();
}
```

**OR**, you can swap elements diagonally opposite directly:

```js
function rotate180Alt(matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n; j++) {
      [matrix[i][j], matrix[n - 1 - i][n - 1 - j]] = [
        matrix[n - 1 - i][n - 1 - j],
        matrix[i][j],
      ];
    }
  }
  if (n % 2 === 1) {
    const mid = Math.floor(n / 2);
    for (let j = 0; j < Math.floor(n / 2); j++) {
      [matrix[mid][j], matrix[mid][n - 1 - j]] = [
        matrix[mid][n - 1 - j],
        matrix[mid][j],
      ];
    }
  }
}
```

---

### ✅ 270° Clockwise (or 90° Counterclockwise)

Two steps:

1. **Transpose the matrix**
2. **Reverse each column** (instead of row)

```js
function rotate270(matrix) {
  const n = matrix.length;

  // Step 1: Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Step 2: Reverse columns
  for (let j = 0; j < n; j++) {
    for (let i = 0, k = n - 1; i < k; i++, k--) {
      [matrix[i][j], matrix[k][j]] = [matrix[k][j], matrix[i][j]];
    }
  }
}
```

---

### ✅ 360° Clockwise Rotation

Same as the **original matrix**, so no changes needed:

```js
function rotate360(matrix) {
  // Do nothing
}
```

---

## 🔄 Summary Table

| Degrees | Steps                                           |
| ------- | ----------------------------------------------- |
| 90°     | Transpose → Reverse rows                        |
| 180°    | Reverse rows → Reverse matrix OR swap opposites |
| 270°    | Transpose → Reverse columns                     |
| 360°    | No change                                       |

---
