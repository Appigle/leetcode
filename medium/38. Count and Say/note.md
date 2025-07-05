## 🧠 Problem Summary

You're given a positive integer `n`. You need to return the `n`th term of the **Count-and-Say** sequence.

### 🔁 How the sequence works:

Each term is **described by counting** the previous term.

#### Examples:

| n   | countAndSay(n) | Explanation                       |
| --- | -------------- | --------------------------------- |
| 1   | `"1"`          | Base case                         |
| 2   | `"11"`         | One 1 → "1 one" → `"11"`          |
| 3   | `"21"`         | Two 1s → "2 ones" → `"21"`        |
| 4   | `"1211"`       | One 2, One 1 → `"1211"`           |
| 5   | `"111221"`     | One 1, One 2, Two 1s → `"111221"` |

---

## ✅ Iterative Solution Code (JavaScript)

```javascript
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let result = '1'; // countAndSay(1)

  for (let i = 2; i <= n; i++) {
    let current = '';
    let count = 1;

    for (let j = 1; j < result.length; j++) {
      if (result[j] === result[j - 1]) {
        count++;
      } else {
        current += count.toString() + result[j - 1];
        count = 1;
      }
    }

    // Add the last group
    current += count.toString() + result[result.length - 1];
    result = current;
  }

  return result;
};
```

---

## 🔍 Step-by-Step Example (n = 5)

Let's trace the output at each step:

```
n = 1 → "1"
n = 2 → "11"       (one 1)
n = 3 → "21"       (two 1s)
n = 4 → "1211"     (one 2, one 1)
n = 5 → "111221"   (one 1, one 2, two 1s)
```

---

## 💡 Key Concepts:

- Use a **loop** from 2 to `n` to build each term from the previous one.
- Use a **counter** to track how many times a digit appears consecutively.
- When the current digit changes, append `count + digit` to the new string.

---

## 📦 Time and Space Complexity:

- **Time**: O(n \* m) where `m` is the length of the string at each step (can grow exponentially in size).
- **Space**: O(m) for storing intermediate strings.
