### 🔧 Problem Recap:

You’re given an array `digits`, where each element is a digit of a **large number**.
Your task is to **add 1** to the number and return the new array of digits.

---

### ✅ Example:

```js
Input: [1, 2, 3];
Represents: 123;
Output: [1, 2, 4]; // Because 123 + 1 = 124
```

---

### ✅ JavaScript Solution:

```js
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(1);
  return digits;
}
```

---

### 🧠 Explanation (brief sentences):

1. **Start from the last digit** (rightmost), because we add from the ones place.
2. If the digit is **less than 9**, we just add 1 and return the array.
   👉 No carry needed.
3. If the digit is **9**, we turn it into 0 and carry over 1 to the next left digit.
4. Repeat until:

   - You find a digit that’s not 9, or
   - You finish the loop (all digits were 9)

5. If **all digits were 9** (like `[9,9,9]`), we need to **add a new digit** at the beginning:

   ```js
   digits.unshift(1); // e.g., [0, 0, 0] → [1, 0, 0, 0]
   ```

---

### 🧪 Example Walkthrough: `[9, 9, 9]`

| Step | Array      | Action                       |
| ---- | ---------- | ---------------------------- |
| i=2  | \[9, 9, 9] | 9 → 0, carry                 |
| i=1  | \[9, 9, 0] | 9 → 0, carry                 |
| i=0  | \[9, 0, 0] | 9 → 0, carry                 |
| Done | \[0, 0, 0] | unshift 1 → \[1, 0, 0, 0] ✅ |

---

### ⏱ Time & Space Complexity:

- **Time**: O(n) — you may loop through all digits in the worst case
- **Space**: O(1) extra if modifying in-place, O(n) total if you count return value

---
