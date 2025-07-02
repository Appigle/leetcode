### 🔢 Problem Explanation

You are given a string `digits` containing digits from `'2'` to `'9'`.
Each digit maps to a set of letters on a traditional phone keypad:

```
2 -> abc
3 -> def
4 -> ghi
5 -> jkl
6 -> mno
7 -> pqrs
8 -> tuv
9 -> wxyz
```

### 🎯 Goal

Return **all possible combinations** of letters that the digits could represent.
Return in **any order**.

---

### 🧠 Algorithm Strategy: **Backtracking**

This is a classic **backtracking** problem, similar to generating permutations or combinations. For each digit, you recursively try all its letters combined with previous choices.

---

### ✅ JavaScript Solution (Backtracking)

```js
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const result = [];

  const backtrack = (index, path) => {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    const letters = phoneMap[digits[index]];
    for (const letter of letters) {
      backtrack(index + 1, path + letter);
    }
  };

  backtrack(0, '');
  return result;
};
```

---

### 🧪 Example Walkthrough

**Input**: `"23"`
Digit `'2'` → `"abc"`
Digit `'3'` → `"def"`

Combinations:

- a + d → "ad"
- a + e → "ae"
- a + f → "af"
- b + d → "bd"
- ...
- c + f → "cf"

Output:

```js
['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
```

---

### 📦 Edge Case

```js
Input: '';
Output: [];
```

---

### ⏱️ Time Complexity

- Worst-case total combinations: **3⁴ = 81** (if all digits have 3-4 letters, and max length is 4)
- So, **O(4ⁿ)** where n = digits.length

---

## ✅ 1. **Iterative Version (BFS Style)**

We’ll use a queue and build up combinations level by level instead of using recursion.

```js
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  let result = [''];

  for (let digit of digits) {
    const letters = phoneMap[digit];
    const temp = [];
    for (let combo of result) {
      for (let letter of letters) {
        temp.push(combo + letter);
      }
    }
    result = temp; // update to next level combinations
  }

  return result;
};
```

---

## 🌲 2. **Visual Tree Diagram of Recursion**

Let’s take `digits = "23"` as an example:

```
         ""             (start)
       /  |  \
      a   b   c         ← from digit '2'

   / | \ /|\ /|\
  d e f d e f d e f     ← from digit '3'

Leaves: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

Each level corresponds to one digit, and we branch into all the possible letters mapped to that digit.

---

## 🪵 3. **Recursive Version with Console Logging**

Here’s the recursive version again, now with logging to show the backtracking steps:

```js
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const result = [];

  const backtrack = (index, path) => {
    console.log(`📍 Called backtrack(index: ${index}, path: "${path}")`);

    if (index === digits.length) {
      console.log(`✅ Complete combination: "${path}"`);
      result.push(path);
      return;
    }

    const letters = phoneMap[digits[index]];
    console.log(`🔢 Digit '${digits[index]}' → Letters "${letters}"`);

    for (const letter of letters) {
      console.log(`👉 Adding letter '${letter}' to path "${path}"`);
      backtrack(index + 1, path + letter);
      console.log(`🔙 Backtracking from letter '${letter}'`);
    }
  };

  backtrack(0, '');
  return result;
};

// Try it!
letterCombinations('23');
```
