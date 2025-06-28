const isPalindrome = (s) => {
  const cleaned = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
};

isPalindrome('A man, a plan, a canal: Panama');

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function (s) {
  if (!s) return true;
  const clean = s.replaceAll(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0;
  let right = clean.length - 1;
  const mid = Math.floor(clean.length / 2);
  for (let i = 0; i < mid; i++) {
    if (clean[left + i] !== clean[right - i]) {
      return false;
    }
  }
  return true;
};

var isPalindrome3 = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
};

function isAlphaNumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}
