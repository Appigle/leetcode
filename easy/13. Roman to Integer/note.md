## 🔍 Step-by-Step Visual Explanation

Let’s walk through the example:

### 🧪 Example Input: `"MCMXCIV"`

> Roman Numeral Breakdown:

- M = 1000
- CM = 900
- XC = 90
- IV = 4

So total = 1000 + 900 + 90 + 4 = **1994**

---

### ▶ Code Loop Walkthrough

```js
s = "M C M X C I V"
      ↑
      i = 0
```

| Index | s\[i] | s\[i+1] | romanMap\[s\[i]] | romanMap\[s\[i+1]] | Compare    | Action | total |
| ----- | ----- | ------- | ---------------- | ------------------ | ---------- | ------ | ----- |
| 0     | M     | C       | 1000             | 100                | 1000 > 100 | +1000  | 1000  |
| 1     | C     | M       | 100              | 1000               | 100 < 1000 | -100   | 900   |
| 2     | M     | X       | 1000             | 10                 | 1000 > 10  | +1000  | 1900  |
| 3     | X     | C       | 10               | 100                | 10 < 100   | -10    | 1890  |
| 4     | C     | I       | 100              | 1                  | 100 > 1    | +100   | 1990  |
| 5     | I     | V       | 1                | 5                  | 1 < 5      | -1     | 1989  |
| 6     | V     | —       | 5                | —                  | —          | +5     | 1994  |

✅ **Final Output: 1994**

---

## ✅ Algorithm Summary

For every character:

- If the current character is **less than the next**, **subtract**.
- Otherwise, **add**.

---

## 🧪 More Test Cases

### 1. `"III"`

```
I + I + I = 1 + 1 + 1 = 3
```

✅ Output: `3`

### 2. `"IX"`

```
I = 1, X = 10
Since 1 < 10 → 10 - 1 = 9
```

✅ Output: `9`

### 3. `"XL"`

```
X = 10, L = 50 → 50 - 10 = 40
```

✅ Output: `40`

### 4. `"CCXLVII"`

```
C = 100
C = 100
X = 10
L = 50 → XL = 40
V = 5
I = 1
I = 1

Total: 100 + 100 + 40 + 5 + 1 + 1 = 247
```

✅ Output: `247`

### 5. `"MMMCMXCIX"`

```
M = 1000
M = 1000
M = 1000
CM = 900
XC = 90
IX = 9

Total: 3000 + 900 + 90 + 9 = 3999
```

✅ Output: `3999` (largest valid Roman numeral)

---

## 🧠 Tip for Debugging

You can insert this inside the loop to debug:

```js
console.log(`i=${i}, current=${current}, next=${next}, total=${total}`);
```
