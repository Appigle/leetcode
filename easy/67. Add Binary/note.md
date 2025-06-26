Binary Addition Rules:
| a | b | carry | result | new carry |
| - | - | ----- | ------ | --------- |
| 0 | 0 | 0 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 |

Sure! Let’s walk through the `addBinary` function **step by step**, showing how it works at each loop iteration with an example.

---

## ✅ Example Input:

```js
a = '1010';
b = '1011';
```

This represents:

```
   1010  (a) = 10 in decimal
+  1011  (b) = 11 in decimal
---------
  10101        = 21 in decimal (expected result)
```

---

## ✅ Initial Setup:

```js
let i = 3; // points to a[3] = '0'
let j = 3; // points to b[3] = '1'
let carry = 0;
let result = [];
```

---

## 🔄 Loop-by-loop Breakdown:

### 🔁 Loop 1:

```js
sum = 0 (carry) + 0 (a[3]) + 1 (b[3]) = 1
result.push(1)        // result = [1]
carry = 0
i = 2, j = 2
```

### 🔁 Loop 2:

```js
sum = 0 + 1 (a[2]) + 1 (b[2]) = 2
result.push(0)         // result = [1, 0]
carry = 1
i = 1, j = 1
```

### 🔁 Loop 3:

```js
sum = 1 (carry) + 0 (a[1]) + 0 (b[1]) = 1
result.push(1)         // result = [1, 0, 1]
carry = 0
i = 0, j = 0
```

### 🔁 Loop 4:

```js
sum = 0 + 1 (a[0]) + 1 (b[0]) = 2
result.push(0)         // result = [1, 0, 1, 0]
carry = 1
i = -1, j = -1
```

### 🔁 Loop 5 (final carry):

```js
sum = 1 (carry) + 0 + 0 = 1
result.push(1)         // result = [1, 0, 1, 0, 1]
carry = 0
```

Now loop exits.

---

## ✅ Final Step:

```js
return result.reverse().join('');
// result = [1, 0, 1, 0, 1] → reverse → [1, 0, 1, 0, 1]
// join → "10101"
```

---

## ✅ Final Output:

```js
'10101';
```

---

### 🔍 Summary of `result` after each loop:

| Loop | sum | result (before reverse) | carry |
| ---- | --- | ----------------------- | ----- |
| 1    | 1   | \[1]                    | 0     |
| 2    | 2   | \[1, 0]                 | 1     |
| 3    | 1   | \[1, 0, 1]              | 0     |
| 4    | 2   | \[1, 0, 1, 0]           | 1     |
| 5    | 1   | \[1, 0, 1, 0, 1]        | 0     |

---
