const exist = (board, word) => {
  const m = board.length;
  const n = board[0].length;
  const visited = new Array(m).fill(false).map(() => new Array(n).fill(false));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const backtracking = (r, c, index) => {
    if (index === word.length) return true;
    if (
      r < 0 ||
      c < 0 ||
      r >= m ||
      c >= n ||
      visited[r][c] ||
      board[r][c] !== word[index]
    )
      return false;
    visited[r][c] = true;
    for (const [dr, dc] of directions) {
      if (backtracking(r + dr, c + dc, index + 1)) return true;
    }
    visited[r][c] = false;
    return false;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtracking(i, j, 0)) return true;
    }
  }
  return false;
};

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist2 = function (board, word) {
  const m = board.length;
  const n = board[0].length;

  const dfs = (r, c, idx) => {
    if (idx === word.length) {
      return true;
    }

    const condition =
      r >= m || c >= n || r < 0 || c < 0 || word[idx] != board[r][c]; // out of bounds or mismatch
    if (condition) {
      return false;
    }

    const temp = board[r][c]; // temporarily mark visited
    board[r][c] = '#';

    // explore neighbors
    const found =
      dfs(r + 1, c, idx + 1) ||
      dfs(r - 1, c, idx + 1) ||
      dfs(r, c + 1, idx + 1) ||
      dfs(r, c - 1, idx + 1);

    // restore cell (backtrack)
    board[r][c] = temp;
    return found;
  };
  // try to start from every cell
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }
  return false;
};
