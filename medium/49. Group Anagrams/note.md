To **group anagrams** from a list of strings, you need to identify which words are just **rearrangements of the same letters**. A great way to do this is by **using the sorted version of each word as a key** — because anagrams share the same letters, sorting them will make them identical.

---

### ✅ Example:

For the input:

```js
['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
```

If we sort each word:

- "eat" → "aet"
- "tea" → "aet"
- "tan" → "ant"
- "ate" → "aet"
- "nat" → "ant"
- "bat" → "abt"

We can then group them by their sorted version:

```js
{
  "aet": ["eat", "tea", "ate"],
  "ant": ["tan", "nat"],
  "abt": ["bat"]
}
```

---

### ✅ JavaScript Code:

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let str of strs) {
    // Sort the characters of the string
    const key = str.split('').sort().join('');

    // Add to map
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  // Return the grouped anagrams
  return Array.from(map.values());
};
```

---

### ✅ Time and Space Complexity:

- **Time Complexity**: `O(n * k log k)`

  - `n` = number of strings
  - `k` = maximum length of a string
  - Sorting each string takes `O(k log k)`

- **Space Complexity**: `O(n * k)`

  - For storing all the anagram groups

---

### 🔍 Edge Cases:

- `[""]` → `[[""]]`
- `["a"]` → `[["a"]]`
- `[]` → `[]`

---

Using **character frequency** instead of sorting can give **better performance** when dealing with many long strings, since sorting each string costs `O(k log k)` and frequency counting is `O(k)`.

---

### ✅ Idea:

Instead of sorting each string, count how many times each character appears, and use that as a **unique key** to group anagrams.

- For example, `"eat"`, `"tea"`, and `"ate"` all have:

  - 1 `a`, 1 `e`, and 1 `t`

So their frequency key would be:
`a1e1t1` or as an array: `[1,0,0,0,1,...]`

---

### ✅ JavaScript Code Using Frequency Key:

```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let str of strs) {
    // Create frequency array of size 26
    const count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Use the frequency array as a key (convert to string)
    const key = count.join('#'); // '#' avoids ambiguity like "11" vs "1#1"

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }

  return Array.from(map.values());
};
```

---

### ✅ Time and Space Complexity:

- **Time Complexity**: `O(n * k)`

  - `n` = number of strings
  - `k` = max string length
  - Counting characters in each string is `O(k)`

- **Space Complexity**: `O(n * k)`

  - For map keys and grouped results

---

### 🆚 Frequency vs Sorting:

| Approach                  | Time per string | More efficient for           |
| ------------------------- | --------------- | ---------------------------- |
| Sorting (`sort().join()`) | `O(k log k)`    | Short strings                |
| Frequency count           | `O(k)`          | Long strings or large inputs |

---
