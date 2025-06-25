const isValid = (s) => {
  const stack = [];
  const map = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (map[last] !== s[i]) return false;
    }
  }
  return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid2 = function (s) {
  if (!s) return false;
  const stack = [];
  const charMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let c of s) {
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      if (stack.pop() !== charMap[c]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

isValid2('()');

/** funny solution */
const isValid3 = (s) => {
  while (s.includes('()') || s.includes('[]') || s.includes('{}')) {
    s = s.replace('()', '').replace('[]', '').replace('{}', '');
  }
  return s.length === 0;
};

isValid3('()');
