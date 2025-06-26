# 🧗 LeetCode 70: Climbing Stairs - Master Notes

## 📌 Problem Description

You are climbing a staircase. It takes `n` steps to reach the top.  
Each time you can either climb **1 or 2 steps**.

> Return the number of distinct ways to climb to the top.

---

## ✅ Base Problem (1 or 2 steps)

### 🧠 Recurrence Relation

To reach step `n`, you can come from:

- step `n - 1` (1 step)
- step `n - 2` (2 steps)

So:

```text
ways(n) = ways(n - 1) + ways(n - 2)
```

---

### 📘 Base Cases

```js
ways(1) = 1  // [1]
ways(2) = 2  // [1+1], [2]
```

---

## ✅ Solutions

### 1. Recursive (Brute Force)

```js
function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}
```

❌ **Time**: O(2ⁿ)
✅ **Space**: O(n) stack

---

### 2. Recursive + Memoization

```js
function climbStairs(n, memo = {}) {
  if (n <= 2) return n;
  if (memo[n]) return memo[n];
  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
}
```

✅ **Time**: O(n)
✅ **Space**: O(n)

---

### 3. Dynamic Programming (Bottom-Up)

```js
function climbStairs(n) {
  if (n <= 2) return n;

  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```

✅ **Time**: O(n)
✅ **Space**: O(n)

---

### 4. Optimized DP (O(1) space)

```js
function climbStairs(n) {
  if (n <= 2) return n;

  let a = 1,
    b = 2;

  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}
```

✅ **Time**: O(n)
✅ **Space**: O(1)

---

## 🔄 Extension: 1, 2, or 3 Steps Allowed

### Recurrence:

```text
ways(n) = ways(n - 1) + ways(n - 2) + ways(n - 3)
```

### Code:

```js
function climbStairs(n) {
  if (n === 0) return 1;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1,
    b = 1,
    c = 2;

  for (let i = 3; i <= n; i++) {
    const temp = a + b + c;
    a = b;
    b = c;
    c = temp;
  }

  return c;
}
```

---

## 🔁 Generalized Climbing Stairs (Any step sizes)

```js
function climbStairs(n, steps) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let step of steps) {
      if (i - step >= 0) {
        dp[i] += dp[i - step];
      }
    }
  }

  return dp[n];
}
```

### Example:

```js
climbStairs(5, [1, 3, 5]); // Output: 5
```

### Explanation:

Ways to reach step 5:

- \[1,1,1,1,1]
- \[1,1,3]
- \[1,3,1]
- \[3,1,1]
- \[5]

---

## 📈 Complexity Summary

| Version                | Time      | Space |
| ---------------------- | --------- | ----- |
| Recursive              | O(2ⁿ)     | O(n)  |
| Memoized Recursion     | O(n)      | O(n)  |
| Bottom-Up DP (array)   | O(n)      | O(n)  |
| Optimized Iterative DP | O(n)      | O(1)  |
| Generalized Step Sizes | O(n \* k) | O(n)  |

---

## ✅ Learning Points

- The original problem maps to the Fibonacci sequence.
- Allowing more steps generalizes it to Tribonacci or beyond.
- Dynamic programming is key to avoid redundant work.
- Space optimization is always worth looking for.

---
