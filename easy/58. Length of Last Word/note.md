## ✅ Goal:

Return the **length** of the **last word** in the string `s`.

> A word is defined as a **substring of letters with no spaces**.

---

## ✅ JavaScript Solution (Clean & Simple):

```js
function lengthOfLastWord(s) {
  return s.trim().split(' ').pop().length;
}
```

---

### 🔍 Explanation (brief steps):

1. `trim()` → removes spaces from both ends.
2. `split(" ")` → splits string into an array of words.
3. `pop()` → gets the last word.
4. `length` → gets the length of that word.

---

### 🧪 Example:

```js
s = "   fly me   to   the moon  "

After trim: "fly me   to   the moon"
After split: ["fly", "me", "to", "the", "moon"]
Last word: "moon"
Length: 4 ✅
```

---

## ✅ Time & Space Complexity:

| Metric | Value |
| ------ | ----- |
| Time   | O(n)  |
| Space  | O(n)  |

---

## 🧠 Alternate (No Extra Space) — Traverse from the end:

```js
function lengthOfLastWord(s) {
  let i = s.length - 1;
  let length = 0;

  // Skip trailing spaces
  while (i >= 0 && s[i] === ' ') i--;

  // Count characters in last word
  while (i >= 0 && s[i] !== ' ') {
    length++;
    i--;
  }

  return length;
}
```

### ✅ Time: O(n)

### ✅ Space: O(1)

This is more **memory-efficient**, especially for long strings.

---
