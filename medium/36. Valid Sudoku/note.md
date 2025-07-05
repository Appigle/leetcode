To determine if a given 9×9 Sudoku board is **valid**, you need to ensure:

1. **Each row** contains the digits `1-9` **without duplication**.
2. **Each column** contains the digits `1-9` **without duplication**.
3. **Each 3×3 sub-box** (there are 9 in total) contains the digits `1-9` **without duplication**.

### ✅ Key Notes:

- You **do not** need to solve the puzzle.
- Empty cells are represented by `"."` and should be ignored.

---

### ✅ Approach:

We will:

- Traverse the board once.
- Use sets to track the values in:

  - Each row
  - Each column
  - Each 3x3 sub-box (keyed by `(row // 3, col // 3)`)

---

### ✅ Implementation (JavaScript):

```javascript
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];
      if (val === '.') continue;

      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
        return false;
      }

      rows[r].add(val);
      cols[c].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
};
```

---

### ✅ Example Walkthrough:

For input:

```js
board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
```

The function will return `true` — no duplicates in any row, column, or box.

---

### ❗ Time & Space Complexity:

- **Time:** O(81) = O(1), since board is 9x9.
- **Space:** O(1), fixed size sets for rows, cols, boxes.
  Great question! Let's break down the purpose and meaning of this line of code:

```js
const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
```

### 🎯 Purpose:

This line calculates **which 3×3 sub-box** a cell at position `(r, c)` belongs to in a **9x9 Sudoku board**.

---

### 🔢 Background:

The board is divided into 9 sub-boxes like this:

```
Box 0 | Box 1 | Box 2
------+-------+------
Box 3 | Box 4 | Box 5
------+-------+------
Box 6 | Box 7 | Box 8
```

Each box is a 3x3 square.

To uniquely identify a box, we map each `(row, col)` position into a single index between `0` and `8`.

---

### 🧠 Explanation of the Formula:

Let’s say `r` is the row and `c` is the column of a cell.

- `Math.floor(r / 3)` gives the vertical "zone":

  - Rows 0–2 → 0
  - Rows 3–5 → 1
  - Rows 6–8 → 2

- `Math.floor(c / 3)` gives the horizontal "zone":

  - Cols 0–2 → 0
  - Cols 3–5 → 1
  - Cols 6–8 → 2

To combine them into one number between `0–8`, we use:

```
boxIndex = (row zone) * 3 + (column zone)
```

#### 🔍 Example:

Say we are at `r = 4, c = 7`:

- `Math.floor(4 / 3)` → `1` (row is in the second group of rows)
- `Math.floor(7 / 3)` → `2` (col is in the third group of columns)

→ `boxIndex = 1 * 3 + 2 = 5`

So this cell is in **Box 5**.

---

### 🧩 Why We Do This:

This lets us use a flat array of 9 sets:

```js
const boxes = Array.from({ length: 9 }, () => new Set());
```

...instead of a 3D structure to track each sub-box's contents.
