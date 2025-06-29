## Problem Explanation

You write the characters of a string in a zigzag pattern on a given number of rows, then read line by line to produce the output.

For example, with numRows = 3, `"PAYPALISHIRING"` looks like:

```
P   A   H   N
A P L S I I G
Y   I   R
```

Reading line by line: `"PAHNAPLSIIGYIR"`.

---

## Approach

- Use an array of strings to represent each row.
- Traverse the input string `s` character by character.
- Use a variable to track the current row.
- Use a direction flag to move "down" or "up" the rows.
- Append each character to the appropriate row string.
- At the end, concatenate all rows.

---

## JavaScript Solution

```javascript
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows = new Array(Math.min(numRows, s.length)).fill('').map(() => '');

  let currentRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currentRow] += char;
    // Change direction if we hit top or bottom
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow += goingDown ? 1 : -1;
  }

  return rows.join('');
};
```

---

## Example Usage

```javascript
console.log(convert('PAYPALISHIRING', 3)); // "PAHNAPLSIIGYIR"
console.log(convert('PAYPALISHIRING', 4)); // "PINALSIGYAHRPI"
console.log(convert('A', 1)); // "A"
```

---

## Complexity

- **Time:** O(n), where n is length of string — each character is visited once.
- **Space:** O(n), we store all characters in row arrays.

---

### Problem Summary (in simple terms):

You have a string, like `"PAYPALISHIRING"`, and a number of rows, say 3.
You need to write the string characters in a zigzag pattern across these rows, like writing down then diagonally up repeatedly, and then read the rows one by one to form a new string.

---

### What does zigzag mean?

Imagine writing the letters like this (for 3 rows):

```
P   A   H   N
A P L S I I G
Y   I   R
```

- First, you go **down** from top row to bottom row, writing one letter per row.
- When you reach the bottom row, you go **diagonally up** until you reach the top row again.
- Then repeat going down, then diagonally up, and so on.

---

### How to solve it?

1. **Think of each row as a bucket** to store letters.
2. **Start at the first row**, and for each character:

   - Put the character into the current row bucket.
   - Move to the next row down if you're going down.
   - If you reach the bottom row, start moving back **up** one row at a time.
   - If you reach the top row again, start moving down.

3. After processing all characters, join all the buckets (rows) into one string.

---

### Example walkthrough:

Input: `"PAYPALISHIRING"`, numRows = 3

- Start at row 0, going down:

  - 'P' → row 0
  - 'A' → row 1
  - 'Y' → row 2 (bottom)

- Now go up diagonally:

  - 'P' → row 1
  - 'A' → row 0 (top)

- Go down again:

  - 'L' → row 1
  - 'I' → row 2 (bottom)

- Up diagonally again:

  - 'S' → row 1
  - 'H' → row 0 (top)

- Continue this until all letters are placed.

Finally, read row by row:

Row 0: P A H N
Row 1: A P L S I I G
Row 2: Y I R

Join: `"PAHNAPLSIIGYIR"`

---

### Code summary:

```javascript
if numRows === 1:
  return s  // No zigzag needed

Create an array of empty strings for each row

Set currentRow = 0 and direction goingDown = false

For each character in s:
  Add char to rows[currentRow]
  If currentRow == 0 or currentRow == numRows - 1:
    Reverse direction
  Move currentRow up or down based on direction

Join all rows to get the final string
```

---

### Why is this approach good?

- You only pass through the string **once** (O(n) time).
- You use extra space for rows, but it's proportional to the string size.
- Simple logic with clear direction changes.
