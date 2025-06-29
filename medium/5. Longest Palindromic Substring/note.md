## ✅ Problem Summary

Given a string `s`, find the **longest substring** of `s` which is a **palindrome** (reads the same forwards and backwards).

---

## 🧠 Algorithm Knowledge

### Common approaches:

1. **Expand Around Center** (Optimal O(n²) time, O(1) space):

   - Every palindrome mirrors around its center.
   - The center can be a single character (odd length) or two characters (even length).
   - For each index, expand outwards to find the longest palindrome with that center.

2. **Dynamic Programming** (O(n²) time and space):

   - Use a 2D table `dp[i][j]` indicating if substring `s[i..j]` is palindrome.
   - Fill table bottom-up, then find max palindrome.

3. **Manacher's Algorithm** (O(n) time):

   - More complex but optimal.
   - Not commonly asked in interviews unless for deep optimization.

---

## ✅ Code: Expand Around Center (Recommended)

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;

  let start = 0;
  let maxLen = 1;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1; // length of palindrome
  };

  for (let i = 0; i < s.length; i++) {
    // Odd length palindrome
    let len1 = expandAroundCenter(i, i);
    // Even length palindrome
    let len2 = expandAroundCenter(i, i + 1);

    let len = Math.max(len1, len2);
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLen);
};
```

---

## 🔍 Example Walkthrough: "babad"

- For `i = 0` ("b"):

  - Odd palindrome center at 0 → "b" (len=1)
  - Even palindrome center at 0,1 → "ba" not palindrome (len=0)

- For `i = 1` ("a"):

  - Odd palindrome center at 1 → "bab" (len=3)
  - Even palindrome center at 1,2 → "ab" not palindrome

- Update max palindrome to "bab".

- Continue for all characters, final answer "bab" or "aba" (both valid).

---

## 🧠 Complexity

- Time: O(n²) — two nested loops due to expanding around each center.
- Space: O(1) — only variables used for tracking indices and lengths.
