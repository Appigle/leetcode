Here’s a full implementation of `myAtoi(s)` in JavaScript that **follows all the steps** you outlined: whitespace trimming, sign detection, digit reading, stopping at non-digit characters, and clamping to 32-bit signed integer limits.

---

### ✅ JavaScript Code

```js
var myAtoi = function (s) {
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  const INT_MIN = -(2 ** 31); // -2147483648

  let i = 0;
  let result = 0;
  let sign = 1;

  // Step 1: Skip leading whitespace
  while (i < s.length && s[i] === ' ') {
    i++;
  }

  // Step 2: Check sign
  if (i < s.length && (s[i] === '-' || s[i] === '+')) {
    sign = s[i] === '-' ? -1 : 1;
    i++;
  }

  // Step 3: Read digits until non-digit
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
    result = result * 10 + digit;

    // Step 4: Clamp if out of bounds
    if (sign * result < INT_MIN) return INT_MIN;
    if (sign * result > INT_MAX) return INT_MAX;

    i++;
  }

  return sign * result;
};
```

---

### 🔍 Explanation of Steps

| Step                                 | What It Does                                 |        |           |
| ------------------------------------ | -------------------------------------------- | ------ | --------- |
| `while (s[i] === ' ')`               | Skips leading whitespace                     |        |           |
| \`if (s\[i] === '-'                  |                                              | '+')\` | Sets sign |
| `while (s[i] >= '0' && s[i] <= '9')` | Reads digit-by-digit until non-digit         |        |           |
| `result = result * 10 + digit`       | Builds integer                               |        |           |
| Clamping check                       | Makes sure result stays within 32-bit bounds |        |           |

---

### 🧪 Test Cases

```js
console.log(myAtoi('42')); // 42
console.log(myAtoi('   -042')); // -42
console.log(myAtoi('1337c0d3')); // 1337
console.log(myAtoi('0-1')); // 0
console.log(myAtoi('words and 987')); // 0
console.log(myAtoi('91283472332')); // 2147483647 (clamped)
console.log(myAtoi('-91283472332')); // -2147483648 (clamped)
console.log(myAtoi('')); // 0
```

---

### 💡 Summary

| Feature                              | Supported |
| ------------------------------------ | --------- |
| Trims spaces                         | ✅        |
| Detects + / - sign                   | ✅        |
| Reads digits only                    | ✅        |
| Stops at non-digit                   | ✅        |
| Ignores leading zeros in result      | ✅        |
| Clamps to 32-bit int range           | ✅        |
| Works for both empty & invalid input | ✅        |

Let's break down this line:

```js
const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);
```

---

### 🧠 What It Does:

It **converts a character** (like `'7'`) into its corresponding **numeric digit** (like `7`), using **character codes**.

---

### 🧩 Character Codes Refresher:

- `'0'.charCodeAt(0)` gives the ASCII code of `'0'`, which is **48**
- `'1'.charCodeAt(0)` is **49**
- `'2'` is **50**
- …
- `'9'` is **57**

So:

```js
'7'.charCodeAt(0) - '0'.charCodeAt(0)
= 55 - 48
= 7 ✅
```

This reliably turns any digit character `'0'`–`'9'` into its actual number `0`–`9`.

---

### 🧮 Then This Line:

```js
result = result * 10 + digit;
```

This builds the integer digit by digit (from left to right), just like how we read multi-digit numbers:

> For string `"42"`:

- First digit: `4` → `result = 0 * 10 + 4 = 4`
- Second digit: `2` → `result = 4 * 10 + 2 = 42`

---

### ✅ Why This Works

Imagine you're reading `'123'`:

```js
result = 0
→ result = 0 * 10 + 1 = 1
→ result = 1 * 10 + 2 = 12
→ result = 12 * 10 + 3 = 123
```

---

### 🔍 Why Not Use `parseInt(s[i])`?

You _could_, but this method using charCode is:

- **Faster** (no string parsing engine overhead)
- **Safer** (guaranteed to only handle one character)
- **Common** in competitive coding/interview code

---

you **can use the `.trim()` method** in JavaScript—but **be careful** when implementing `myAtoi()`.

---

### ✅ What `.trim()` does:

```js
s = s.trim();
```

This removes **all leading and trailing whitespace** from the string.

---

### 🤔 Why you might **not** want to use it directly in `myAtoi`:

The official algorithm for `myAtoi()` **only ignores leading spaces**, not trailing spaces. For example:

````js
Input: "   -42abc"
→ valid → parses `-42`

But:

Input: "   -42   "
→ valid → parses `-42` (trailing whitespace is ignored *after* reading the number)

If you use `.trim()`, this is fine ✅
But if the input is something like `"   -42abc"`, trimming won’t remove `"abc"` — which is **correct behavior**.

---

### ✅ So when is `s.trim()` safe to use?

If you're only concerned with **removing leading and trailing whitespace**, and your input **doesn't contain invalid trailing characters**, you can use `.trim()`.

However, if you want **full control and compliance with LeetCode's rules**, it's better to **manually skip leading whitespace**:

```js
let i = 0;
while (s[i] === ' ') i++;
````

---

### ✅ Final verdict:

- `.trim()` is OK if you're okay trimming _both_ ends and your logic handles the rest correctly.
- But for strict `myAtoi()` behavior, **manually skipping leading spaces** (like in LeetCode's model solution) is the most accurate.

---
