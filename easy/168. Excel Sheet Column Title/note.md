## ✅ Problem Recap

We are converting a number (like `1`, `28`, or `701`) into a **string** that represents an Excel column title.

For example:

| Number | Excel Title |
| ------ | ----------- |
| 1      | A           |
| 26     | Z           |
| 27     | AA          |
| 28     | AB          |
| 701    | ZY          |

---

## ✅ The Code

```js
var convertToTitle = function (columnNumber) {
  let result = '';

  while (columnNumber > 0) {
    columnNumber--; // Adjust to 0-based index
    const remainder = columnNumber % 26;
    const char = String.fromCharCode(65 + remainder); // 65 is 'A'
    result = char + result; // Prepend the character
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
};
```

---

## 🔍 Line-by-Line Walkthrough

### `let result = '';`

We start with an empty string `result`. We’ll **build our final answer by adding letters to the front**.

---

### `while (columnNumber > 0) {`

We keep going until we’ve processed the entire number. Each loop pulls out **one letter** from right to left (just like converting to base-26).

---

### `columnNumber--;`

This line is **very important**. It adjusts for the fact that Excel column titles are **1-based**, but JavaScript character math is **0-based**.

For example:

- `1 → A`, but `'A'.charCodeAt(0) = 65`, which matches **0** after subtracting 1.

---

### `const remainder = columnNumber % 26;`

We take the **remainder** after dividing by 26. This gives us a number from **0 to 25**, where:

- 0 → `'A'`
- 25 → `'Z'`

---

### `const char = String.fromCharCode(65 + remainder);`

We convert the number (0–25) to a character using **ASCII codes**.

- `'A'.charCodeAt(0)` is `65`
- So, `String.fromCharCode(65 + 0)` → `'A'`
- `String.fromCharCode(65 + 25)` → `'Z'`

✅ Now we’ve translated one "digit" in Excel's base-26 system.

---

### `result = char + result;`

We **prepend** the new character to the result string. This is because we’re getting the **least significant character** first (right to left).

---

### `columnNumber = Math.floor(columnNumber / 26);`

Now we move to the next digit to the left, just like dividing a number by 10 in decimal.

---

### After loop: `return result;`

Once we’ve processed all digits, `result` holds the final Excel column name.

---

## 🧪 Example: `columnNumber = 28`

Let's simulate:

1. `columnNumber = 28`

2. `columnNumber-- → 27`, `remainder = 27 % 26 = 1` → `char = 'B'`

   - `result = 'B'`
   - `columnNumber = Math.floor(27 / 26) = 1`

3. `columnNumber-- → 0`, `remainder = 0` → `char = 'A'`

   - `result = 'A' + 'B' = 'AB'`
   - `columnNumber = Math.floor(0 / 26) = 0`

✅ Done! Output is `"AB"`

---

## 🎯 Summary

- Subtract 1 to shift from 1-based to 0-based
- Use `% 26` to find the current character
- Use `Math.floor(/ 26)` to move left
- Prepend each letter to build the final title

---
