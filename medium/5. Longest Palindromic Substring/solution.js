/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let start = 0;
  let maxLen = 0;
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  };

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i); // odd
    const len2 = expandAroundCenter(i, i + 1); // even
    const mLen = Math.max(len1, len2);
    if (mLen > maxLen) {
      maxLen = mLen;
      start = i - Math.floor((mLen - 1) / 2);
    }
  }
  return s.substring(start, start + maxLen);
};
