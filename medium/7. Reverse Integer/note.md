## 🧠 Problem Explanation

You are given an integer `x`. Your job is to **reverse its digits**.

Examples:

- `123` becomes `321`
- `-123` becomes `-321`
- `120` becomes `21` (notice the zero is dropped from the end)

But there’s one extra **important condition**:

> If the reversed number goes outside the 32-bit signed integer range
> `[-2³¹, 2³¹ - 1]`
> that is
> `[-2147483648, 2147483647]`,
> then return `0`.

---

## 💡 Strategy

1. Handle the negative sign.
2. Convert number to string and reverse the digits.
3. Convert back to number.
4. Check if the reversed number is within the 32-bit signed integer range.
5. Return the reversed number or `0`.

---

## ✅ JavaScript Solution

```javascript
var reverse = function (x) {
  const isNegative = x < 0;
  let reversedStr = Math.abs(x).toString().split('').reverse().join('');
  let reversedNum = parseInt(reversedStr);

  if (isNegative) reversedNum *= -1;

  // 32-bit signed integer range check
  if (reversedNum < -(2 ** 31) || reversedNum > 2 ** 31 - 1) {
    return 0;
  }

  return reversedNum;
};
```

---

## 🔍 Example Walkthrough

### Input: `x = -123`

1. `isNegative = true`
2. `Math.abs(x)` → `123`
3. `"123"` → `["1","2","3"]` → `["3","2","1"]` → `"321"` → `321`
4. Add back the sign → `-321`
5. It’s within range → ✅ Return `-321`

---

## 💻 Test Cases

```javascript
console.log(reverse(123)); // 321
console.log(reverse(-123)); // -321
console.log(reverse(120)); // 21
console.log(reverse(0)); // 0
console.log(reverse(1534236469)); // 0 → because reversed goes over 32-bit
```

---

If we’re **only allowed to use 32-bit signed integers** and **cannot use strings, arrays, or 64-bit values**, we can **solve this using pure math**, digit by digit, while checking for overflow _before it happens_.

---

## 🚀 Goal:

Reverse the digits of a number `x`, without exceeding the 32-bit signed integer range:

```
[-2^31, 2^31 - 1] = [-2147483648, 2147483647]
```

---

## 🔧 Key Insight: Detect Overflow Before It Happens

Suppose:

```js
let result = 0;
```

We build the reversed number digit by digit:

```js
let pop = x % 10; // get the last digit
x = Math.floor(x / 10); // chop off the last digit
result = result * 10 + pop;
```

But before we update `result`, we must **check if this will cause an overflow**.

---

## 🧠 Overflow Conditions

To avoid going beyond `2147483647` or `-2147483648`, do this before `result = result * 10 + pop`:

```js
if (
  result > Math.floor(INT_MAX / 10) ||
  (result === Math.floor(INT_MAX / 10) && pop > 7)
)
  return 0;
if (
  result < Math.ceil(INT_MIN / 10) ||
  (result === Math.ceil(INT_MIN / 10) && pop < -8)
)
  return 0;
```

Why `7` and `-8`?

- Last digit of `INT_MAX` is `7`
- Last digit of `INT_MIN` is `8`

---

## ✅ Full Code (No string ops, 32-bit safe)

```js
var reverse = function (x) {
  const INT_MAX = 2 ** 31 - 1; // 2147483647
  const INT_MIN = -(2 ** 31); // -2147483648

  let result = 0;

  while (x !== 0) {
    let pop = x % 10;
    x = (x / 10) | 0; // bitwise OR with 0 simulates Math.trunc() for 32-bit

    // Overflow detection
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && pop > 7)
    )
      return 0;
    if (
      result < Math.ceil(INT_MIN / 10) ||
      (result === Math.ceil(INT_MIN / 10) && pop < -8)
    )
      return 0;

    result = result * 10 + pop;
  }

  return result;
};
```

---

## 🧪 Test

```js
reverse(123); // 321
reverse(-123); // -321
reverse(120); // 21
reverse(1534236469); // 0 → exceeds 32-bit limit
```

---

## 💡 Summary

✅ No strings
✅ No arrays
✅ Works within 32-bit signed integer range
✅ Safe overflow detection before it happens
