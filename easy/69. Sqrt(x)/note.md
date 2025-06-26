## ✅ **Goal:**

Given a non-negative integer `x`, return the **floor** of √x
(i.e., the **largest integer `r` such that `r * r ≤ x`**)

---

## ✅ Example:

- `x = 4` → √4 = 2 → ✅ return 2
- `x = 8` → √8 ≈ 2.828 → ✅ return **2** (round down)

---

## ✅ Constraints:

- You **cannot** use `Math.sqrt()` or `x ** 0.5`
- You must do it **manually**, efficiently

---

## ✅ Best Approach: **Binary Search (O(log x))**

```js
function mySqrt(x) {
  if (x < 2) return x;

  let left = 1;
  let right = Math.floor(x / 2);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) return mid;
    if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}
```

---

## 🧠 Step-by-step Explanation (Binary Search):

1. Use binary search between `1` and `x/2` (since √x is never more than x/2 when x > 1).
2. Try a `mid` number.
3. If `mid * mid == x`, return `mid`.
4. If `mid * mid < x`, move search to the **right half**.
5. If `mid * mid > x`, move search to the **left half**.
6. Loop ends when left > right — return `right`, because it’s the floor of the square root.

---

## 🧪 Example Trace: x = 8

| left | right | mid | mid² | action                 |
| ---- | ----- | --- | ---- | ---------------------- |
| 1    | 4     | 2   | 4    | square < x → left = 3  |
| 3    | 4     | 3   | 9    | square > x → right = 2 |

✅ End loop → return `right = 2`

---

## ✅ Time & Space:

| Metric | Value    |
| ------ | -------- |
| Time   | O(log x) |
| Space  | O(1)     |

---
