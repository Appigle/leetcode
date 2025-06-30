### ✅ Roman Numeral Value Map

We list all **standard and subtractive forms** in **descending order** so that we can match from largest to smallest:

```js
[
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
];
```

---

### 🧠 Algorithm Steps (Greedy):

1. Start with an empty result string `res = ""`.
2. Iterate through the Roman numeral map.
3. While the current number `num` is **greater than or equal to** the current Roman value:

   - Append the Roman symbol to the result.
   - Subtract the value from `num`.

4. Repeat until `num === 0`.

---

### ✅ JavaScript Implementation

```js
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  let result = '';

  for (const [symbol, value] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
};
```

---

### 🔍 Example: Convert 3749 to Roman

Break down:

- 3000 → MMM
- 700 → DCC
- 40 → XL
- 9 → IX
  **Result: "MMMDCCXLIX"**

Try it:

```js
console.log(intToRoman(3749)); // Output: "MMMDCCXLIX"
```

To convert a **Roman numeral string** back into an **integer**, you can use a **greedy algorithm** similar to the forward direction, but this time reading **left to right**, **checking for subtractive combinations** (like `IV`, `IX`, etc.) before individual characters.

---

### 🧠 Roman Numerals Key Concept:

- Roman numerals are normally written **largest to smallest**, left to right.
- But if a **smaller value precedes a larger one**, we **subtract** it (e.g. `IV` = 5 - 1 = 4).
- So we need to:

  - Compare the **current** symbol with the **next** symbol.
  - If current < next → **subtract**
  - Else → **add**

---

### ✅ Roman Symbol Map:

```js
const romanMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
```

---

### ✅ JavaScript Code Implementation:

```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    if (next && current < next) {
      // Subtractive case (e.g. IV, IX, etc.)
      total -= current;
    } else {
      // Normal case
      total += current;
    }
  }

  return total;
};
```

---

### 🧪 Example Walkthrough:

**Input:** `"MCMXCIV"`
**Explanation:**

- `M` (1000)
- `CM` = 900 → subtract `C` (100), add `M` (1000) = +900
- `XC` = 90 → subtract `X` (10), add `C` (100) = +90
- `IV` = 4 → subtract `I` (1), add `V` (5) = +4
  → Total = 1000 + 900 + 90 + 4 = `1994`

---

### 📌 Summary:

- Use a map for symbol-to-value.
- Loop through the string.
- If current < next → subtract, else → add.
- Time Complexity: **O(n)**
- Space Complexity: **O(1)**
