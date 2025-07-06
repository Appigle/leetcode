## ✅ Approach: Simulate Manual Multiplication

### 🔢 Key Idea:

Multiply digit-by-digit from right to left and place the result in the correct index of a result array.

- If `num1` has length `m`, and `num2` has length `n`, the **maximum length** of the product is `m + n`.
- Place the product of `num1[i] * num2[j]` at positions `i + j` (carry) and `i + j + 1` (current digit).

---

## ✅ Example:

Let’s multiply `"123"` × `"456"`

```
      123
   ×  456
   -------
      738   ← 123 × 6
     615    ← 123 × 5 (shifted one position left)
    492     ← 123 × 4 (shifted two positions left)
   -------
    56088
```

---

## ✅ JavaScript Code:

```javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const m = num1.length,
    n = num2.length;
  const result = new Array(m + n).fill(0);

  // Multiply each digit and add to the result
  for (let i = m - 1; i >= 0; i--) {
    const digit1 = num1[i] - '0';
    for (let j = n - 1; j >= 0; j--) {
      const digit2 = num2[j] - '0';
      const sum = digit1 * digit2 + result[i + j + 1];

      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // Skip leading zeros
  let i = 0;
  while (i < result.length && result[i] === 0) i++;

  return result.slice(i).join('');
};
```

---

## 🔁 Step-by-Step Example: multiply("123", "456")

- result = `[0, 0, 0, 0, 0, 0]` (length = 3 + 3)
- Multiply digits from right to left:

  - `3 × 6 = 18`, added to index 5 → `result[5] = 8`, carry 1 → `result[4] += 1`
  - Continue this for all digits.

- After processing, result = `[0, 5, 6, 0, 8, 8]`
- Skip leading `0`, return `"56088"`

---

## 🧠 Time & Space Complexity

- **Time**: `O(m * n)` — Every digit in `num1` multiplies with every digit in `num2`.
- **Space**: `O(m + n)` — The result array holds at most `m + n` digits.

---

Let's break down this line:

```javascript
const digit1 = num1[i] - '0';
```

### 🤔 What does `num1[i] - '0'` do?

This is a **common trick in JavaScript (and many other languages)** to convert a digit **character** (like `'3'`) to its **number** (like `3`), **without using** `parseInt()` or `Number()`.

---

### 🔍 Why does it work?

In JavaScript, strings and characters are backed by **Unicode code points** (just like ASCII for digits `'0'` to `'9'`).

Here’s the key:

- `'0'.charCodeAt(0)` = 48
- `'1'.charCodeAt(0)` = 49
- `'2'.charCodeAt(0)` = 50
- …
- `'9'.charCodeAt(0)` = 57

So:

```js
('5' - '0' === 53 - 48) === 5;
```

When you subtract two characters, JavaScript **implicitly converts** both to numbers (their char codes) before subtracting.

---

### ✅ So this:

```js
const digit1 = num1[i] - '0';
```

Is **functionally the same as**:

```js
const digit1 = parseInt(num1[i], 10);
```

But it’s shorter, and often used in competitive coding or performance-critical code.

---

### 🧪 Example:

```js
console.log('7' - '0'); // 7
console.log('9' - '0'); // 9
console.log('a' - '0'); // NaN (not a digit)
```

---

### 🚫 Don’t use this trick on non-digits!

It only works safely if you're 100% sure the character is between `'0'` and `'9'`.

---

Let’s walk through this part of the logic:

```js
const sum = digit1 * digit2 + result[i + j + 1];
result[i + j + 1] = sum % 10;
result[i + j] += Math.floor(sum / 10);
```

We're using this logic to simulate how multiplication works **by hand**, digit by digit, **from right to left**, and storing the result in the correct position in the `result[]` array.

---

## 📌 The Key Idea

When multiplying two numbers:

```
      123
   x  456
  ------
     738   ← 123 * 6 (unit's place)
    615    ← 123 * 5 (tens place, shift 1 left)
   492     ← 123 * 4 (hundreds place, shift 2 left)
  ------
   56088
```

Every digit in the result comes from **multiplying two digits** and **placing the result in the correct column**.

---

## 📐 Array Indexing: Why `i + j + 1` and `i + j`?

Let’s say:

- `num1` has length `m`
- `num2` has length `n`
- So `result` has length `m + n` to store the full result

We loop through:

```js
for (let i = m - 1; i >= 0; i--) {
  for (let j = n - 1; j >= 0; j--) {
```

And we do:

```js
const sum = digit1 * digit2 + result[i + j + 1];
result[i + j + 1] = sum % 10;
result[i + j] += Math.floor(sum / 10);
```

Here’s why:

### ✅ `i + j + 1`: The **ones place**

This is where the product of `num1[i] * num2[j]` **lands**. Why?

- When multiplying from **right to left**, `i` is the index in `num1`, and `j` in `num2`.
- So the **place value** of the digit is: `i + j + 1`

  - `+1` because we are **storing from the end** (the least significant digit is at the end of the array).

### ✅ `i + j`: The **tens place**

After placing the one's digit, we **carry over** the tens digit to the left, i.e., `i + j`.

---

## 📊 Example: num1 = "12", num2 = "34"

```js
num1 = "12" → [1, 2]
num2 = "34" → [3, 4]
result = [0, 0, 0, 0] // length = 4
```

- `2 * 4 = 8` → goes to `result[1 + 1] = result[2]`
- `2 * 3 = 6` → goes to `result[1 + 0] = result[1]`
- `1 * 4 = 4` → goes to `result[0 + 1] = result[1]`
- `1 * 3 = 3` → goes to `result[0 + 0] = result[0]`

All of this accumulates into the correct places.

---

## 🔁 Summary

| Operation         | Result Index | Why                         |
| ----------------- | ------------ | --------------------------- |
| `digit1 * digit2` | `i + j + 1`  | The digit’s immediate place |
| `carry over`      | `i + j`      | Add to the next left place  |

---
