To generate an `n x n` matrix filled with numbers from `1` to `n²` in spiral order, we can simulate the process step by step:

### Spiral Order Pattern:

- Start at the top-left and go right
- Then go down the right side
- Then go left along the bottom
- Then go up the left side
- Repeat this process, moving inwards, until the matrix is filled.

### JavaScript Solution:

```javascript
function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let top = 0,
    bottom = n - 1;
  let left = 0,
    right = n - 1;
  let num = 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // Traverse down
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // Traverse from right to left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }

    // Traverse up
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }

  return matrix;
}
```

### Examples:

**Input:** `n = 3`
**Output:**

```js
[
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
```

**Input:** `n = 1`
**Output:**

```js
[[1]];
```
