### **Longest Substring Without Repeating Characters**

---

## ✅ Problem Summary

Given a string `s`, find the **length** of the **longest substring** that contains **no repeating characters**.

> A **substring** is a **contiguous** block of characters in the string (unlike a subsequence).

---

### 🧠 Key Insight: Use the **Sliding Window** Technique

This approach keeps track of a moving window of characters that are all unique:

- Expand the right side of the window to include new characters.
- Shrink the left side when a duplicate is found.
- Always keep track of the **maximum length**.

---

## ✅ JavaScript Code (Efficient Sliding Window)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
```

---

## 🔍 Walkthrough Example

For `s = "pwwkew"`:

| Step | Left | Right | Char | Set       | Action              | maxLength |
| ---- | ---- | ----- | ---- | --------- | ------------------- | --------- |
| 1    | 0    | 0     | p    | {p}       | Add 'p'             | 1         |
| 2    | 0    | 1     | w    | {p, w}    | Add 'w'             | 2         |
| 3    | 0    | 2     | w    | w already | Remove 'p' → left=1 | 2         |
| 4    | 1    | 2     | w    | w already | Remove 'w' → left=2 | 2         |
| 5    | 2    | 2     | w    | Add 'w'   | Unique again        | 2         |
| 6    | 2    | 3     | k    | {w, k}    | Add 'k'             | 2         |
| 7    | 2    | 4     | e    | {w, k, e} | Add 'e'             | 3         |
| 8    | 2    | 5     | w    | w already | Shrink left         | 3         |

✅ Longest is `"wke"` with length `3`.

---

## 🧠 Time & Space Complexity

- **Time Complexity**: O(n) — Each character is visited at most twice (once added, once removed).
- **Space Complexity**: O(min(n, m)) — `n` is string length, `m` is char set size (ASCII → 128 max).

---

## 📌 Summary

This problem is a textbook example of:

- Efficient string traversal
- Real-world usage of a **Set**
- Sliding Window pattern

## ✅ Enhanced JavaScript Code

```javascript
/**
 * @param {string} s
 * @return {{ length: number, start: number, end: number, substring: string }}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxLength = 0;
  let start = 0;
  let end = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      start = left;
      end = right;
    }
  }

  return {
    length: maxLength,
    start: start,
    end: end,
    substring: s.slice(start, end + 1),
  };
};
```

---

## 🧪 Example Test

```javascript
console.log(lengthOfLongestSubstring('pwwkew'));
```

### Output:

```js
{
  length: 3,
  start: 2,
  end: 4,
  substring: "wke"
}
```

---

## ✅ Summary

This version gives you:

- `length`: the length of the longest valid substring
- `start`: starting index of the substring
- `end`: ending index of the substring
- `substring`: the actual substring itself
