## 🔍 Problem Restatement

- You’re given a 2D grid of characters `board`.
- You need to check if you can trace out `word` by walking through cells:

  - Allowed moves: up, down, left, right.
  - Can’t reuse the same cell twice in one path.

---

## 🧠 Key Ideas

1. **DFS + Backtracking**:

   - Start from any cell that matches the **first letter** of `word`.
   - Explore neighbors recursively for the next letter.
   - Mark a cell as **visited** (so you don’t reuse it), then restore it (backtrack) when returning.

2. **Pruning** (important for performance):

   - If the character doesn’t match → stop early.
   - If the remaining word is longer than the number of available cells → stop.
   - (Advanced) Pre-check if board contains enough of each character of `word`.

---

## ✅ JavaScript Implementation

```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  function dfs(r, c, idx) {
    // All chars matched
    if (idx === word.length) return true;

    // Out of bounds or mismatch
    if (r < 0 || c < 0 || r >= m || c >= n || board[r][c] !== word[idx]) {
      return false;
    }

    // Mark visited (temporarily)
    const temp = board[r][c];
    board[r][c] = '#';

    // Explore neighbors
    const found =
      dfs(r + 1, c, idx + 1) ||
      dfs(r - 1, c, idx + 1) ||
      dfs(r, c + 1, idx + 1) ||
      dfs(r, c - 1, idx + 1);

    // Restore cell (backtrack)
    board[r][c] = temp;

    return found;
  }

  // Try to start from every cell
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};
```

---

## 🔄 Example Walkthrough

Input:

```js
board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
word = 'ABCCED';
```

- Start at `(0,0) = A` → matches `A`.
- Explore right `(0,1) = B` → matches `B`.
- Explore right `(0,2) = C` → matches `C`.
- Down `(1,2) = C` → matches next `C`.
- Down `(2,2) = E` → matches `E`.
- Left `(2,1) = D` → matches `D`. ✅ Found.

---

## ⏱ Complexity

- **Time:** O(m·n·4^L), where `L = word.length`.

  - Each cell can branch into 4 directions.

- **Space:** O(L) recursion depth (backtracking stack).

---

⚡ Follow-up optimization for larger boards:

- **Pre-count pruning**: If `word` has more occurrences of a letter than `board`, immediately return `false`.
- **Choose rare start letters first**: If the first/last letter of `word` is less frequent on the board, start from that to prune faster.
