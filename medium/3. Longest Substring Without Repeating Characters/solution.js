/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
  let set = new Set();
  let maxLen = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    maxLen = Math.max(i - left + 1, maxLen);
  }
  return maxLen;
};
