To **traverse a matrix in spiral order**, we simulate how we would draw a spiral on paper. That is, we go **right**, then **down**, then **left**, then **up**, and repeat until all elements are visited.

---

### ✅ Intuition

We use **four boundaries**:

- `top`: initial row index
- `bottom`: last row index
- `left`: initial column index
- `right`: last column index

At each step, we:

1. Traverse from **left to right** across the top row.
2. Traverse from **top to bottom** along the right column.
3. Traverse from **right to left** across the bottom row (if not already visited).
4. Traverse from **bottom to top** up the left column (if not already visited).

After each direction, we **shrink the corresponding boundary**.

---

### 🧠 JavaScript Implementation

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    // Traverse from right to left (only if we still have a row to process)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // Traverse from bottom to top (only if we still have a column to process)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }

  return result;
};
```

---

### 🔄 Example Walkthrough

**Input:**

```js
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

**Output:**

```
[1, 2, 3, 6, 9, 8, 7, 4, 5]
```

**Steps:**

- → 1 2 3
- ↓ 6 9
- ← 8 7
- ↑ 4
- → 5

---

### 🧩 Time and Space Complexity

- **Time:** O(m × n) — We visit every cell once.
- **Space:** O(1) — Except the result array.

---
