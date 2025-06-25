Here are **4 alternative approaches**, each with pros and cons:

---

## ✅ 1. **Horizontal Scanning** (left to right)

### 🔍 Idea:

Start with the first string as the prefix. Compare it with the next string, and shrink the prefix until it matches. Repeat.

### ✅ Code:

```js
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1); // remove last character
      if (prefix === '') return '';
    }
  }

  return prefix;
};
```

### ✅ Pros:

- Easy to implement
- Good readability

---

## ✅ 2. **Sorting-Based Approach**

### 🔍 Idea:

- Sort the strings lexicographically.
- The common prefix of the **first and last strings** will be the answer (since those are the most different).

### ✅ Code:

```js
var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  strs.sort(); // modifies the array

  let first = strs[0];
  let last = strs[strs.length - 1];

  let i = 0;
  while (i < first.length && first[i] === last[i]) {
    i++;
  }

  return first.slice(0, i);
};
```

### ✅ Pros:

- Smart shortcut
- Only compares two strings

### ❗ Cons:

- Sorting adds **O(n log n)** time

---

## ✅ 3. **Divide and Conquer**

### 🔍 Idea:

- Split the array in half
- Recursively find LCP in both halves
- Merge their results by comparing the two strings

### ✅ Code:

```js
function commonPrefix(str1, str2) {
  let i = 0;
  while (i < str1.length && str1[i] === str2[i]) {
    i++;
  }
  return str1.slice(0, i);
}

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  function lcp(start, end) {
    if (start === end) return strs[start];

    let mid = Math.floor((start + end) / 2);
    let left = lcp(start, mid);
    let right = lcp(mid + 1, end);
    return commonPrefix(left, right);
  }

  return lcp(0, strs.length - 1);
};
```

### ✅ Pros:

- Recursive elegance
- Performs well on large inputs

---

## ✅ 4. **Binary Search**

### 🔍 Idea:

- The LCP length is between 0 and the shortest string’s length.
- Binary search on the prefix length.

### ✅ Code:

```js
function isCommonPrefix(strs, length) {
  let prefix = strs[0].slice(0, length);
  return strs.every((str) => str.startsWith(prefix));
}

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  let minLen = Math.min(...strs.map((s) => s.length));
  let low = 0,
    high = minLen;

  while (low < high) {
    let mid = Math.floor((low + high + 1) / 2);
    if (isCommonPrefix(strs, mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return strs[0].slice(0, low);
};
```

### ✅ Pros:

- Efficient for large strings

### ❗ Cons:

- More complex than needed for small inputs

---

## 🏁 Summary

| Approach            | Time Complexity | Best Use Case                     |
| ------------------- | --------------- | --------------------------------- |
| Vertical Scanning   | O(S)            | Simple and readable               |
| Horizontal Scanning | O(S)            | Good for early mismatch cases     |
| Sorting-based       | O(S log n)      | Fewer comparisons, smart shortcut |
| Divide and Conquer  | O(S)            | Large arrays of long strings      |
| Binary Search       | O(S log m)      | Long strings, tight performance   |

> `S` = total characters in all strings
> `m` = length of the shortest string

---
