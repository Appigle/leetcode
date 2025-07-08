To implement `pow(x, n)` efficiently, especially for large `n`, we can use **Exponentiation by Squaring**, a technique that reduces the time complexity from **O(n)** to **O(log n)**.

---

### ✅ Key Concepts:

- `xⁿ = x * xⁿ⁻¹`
- But we optimize using:

  - If `n` is **even**: `xⁿ = (x²)^(n/2)`
  - If `n` is **odd**: `xⁿ = x * (x²)^((n-1)/2)`

- If `n` is **negative**, we compute `1 / x^(-n)`

---

### ✅ JavaScript Code (Iterative):

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0) return 1;

  let N = n;
  if (n < 0) {
    x = 1 / x;
    N = -N;
  }

  let result = 1;
  while (N > 0) {
    if (N % 2 === 1) {
      result *= x;
    }
    x *= x;
    N = Math.floor(N / 2);
  }
  return result;
};
```

---

### ✅ Example Tracing for `x = 2`, `n = 10`:

```
Initial: x = 2, n = 10
Loop 1: n=10 → even → x = 4, n = 5
Loop 2: n=5 → odd → result *= 4 → x = 16, n = 2
Loop 3: n=2 → even → x = 256, n = 1
Loop 4: n=1 → odd → result *= 256 → x = 65536, n = 0
Final result = 1024
```

---

### ✅ Time and Space Complexity

- **Time Complexity**: O(log n)
- **Space Complexity**: O(1)

---

### ✅ Handles:

- Negative exponents
- Fractional bases
- Zero and one exponent edge cases

Let's break down this code snippet in detail. This is the **core logic of the "Exponentiation by Squaring"** algorithm, a very efficient method to compute `xⁿ` (x raised to the power n), especially for large exponents.

---

### 🔁 Code Context

```javascript
let result = 1;
while (N > 0) {
  if (N % 2 === 1) {
    result *= x;
  }
  x *= x;
  N = Math.floor(N / 2);
}
```

Suppose we want to calculate `x^n`. Here's how this loop helps do it efficiently:

---

### 🔍 Line-by-Line Explanation

---

#### ✅ `let result = 1;`

- This initializes the final result to `1`.
- Why 1? Because multiplying any number by 1 doesn't change it — so we use it as a neutral starting point.

---

#### 🔁 `while (N > 0) {`

- As long as the exponent `N` is greater than 0, we keep looping.

---

#### 🧮 `if (N % 2 === 1) { result *= x; }`

- This checks whether `N` is **odd**.
- If it is, we multiply the `result` by `x`.

**Why?**

- In exponentiation by squaring, when `N` is odd, we can't split it evenly. For example:

  - `x^5 = x * (x^4)` → we must multiply one more `x`.

- So, we "use up" one `x` and reduce `N` by 1 to make it even.

---

#### 💡 `x *= x;`

- This squares the base `x`.
- Why? Because when the exponent is even:

  - `x⁴ = (x²)²`, `x⁸ = ((x²)²)²`, etc.

- So we reduce the problem size significantly by squaring `x`.

---

#### ↘️ `N = Math.floor(N / 2);`

- This divides `N` by 2 and floors the result (removes the decimal).
- We're reducing the exponent at every step — making the algorithm **logarithmic** in time (`O(log N)`).

---

### 🔁 Full Loop Example

Let’s say we want to compute:
**x = 2, n = 5**

Step-by-step:

- `result = 1`, `x = 2`, `N = 5`
- Loop 1:

  - `N % 2 === 1` → result = 1 × 2 = 2
  - `x = 2 × 2 = 4`, `N = 2`

- Loop 2:

  - `N % 2 === 0` → skip multiplication
  - `x = 4 × 4 = 16`, `N = 1`

- Loop 3:

  - `N % 2 === 1` → result = 2 × 16 = 32
  - `x = 16 × 16 = 256`, `N = 0`

🔚 Loop ends. Return `result = 32`.

So: `2^5 = 32 ✅`

---

### 🚀 Why is this efficient?

Because it reduces the number of multiplications from **n** to **log₂(n)**:

- Instead of multiplying 2 × 2 × 2 × 2 × 2,
- You do:

  - Square → multiply → square → multiply, reducing the problem exponentially.

---

### 🧊 Important Note:

This works **only when `n` is non-negative**.
If you want to handle **negative exponents**, you should first:

```js
if (n < 0) {
  x = 1 / x;
  n = -n;
}
```

---

### ✅ Summary

| Line                    | Purpose                                   |
| ----------------------- | ----------------------------------------- |
| `let result = 1`        | Initialize the final answer               |
| `while (N > 0)`         | Loop while exponent is not zero           |
| `if (N % 2 === 1)`      | If exponent is odd, include `x` in result |
| `x *= x`                | Square the base                           |
| `N = Math.floor(N / 2)` | Halve the exponent                        |
