const isValidSudoku = (board) => {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const boxes = new Array(9).fill(0).map(() => new Array(9).fill(0));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num !== '.') {
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
          return false;
        }
        rows[i][num] = 1;
        cols[j][num] = 1;
        boxes[boxIndex][num] = 1;
      }
    }
  }
  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku2 = function (board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === '.') continue;
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val))
        return false;
      rows[i].add(val);
      cols[j].add(val);
      boxes[boxIndex].add(val);
    }
  }
  return true;
};
