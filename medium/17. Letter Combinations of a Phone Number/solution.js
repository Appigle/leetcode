const letterCombinations = (digits) => {
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const result = [];
  const backtrack = (index, path) => {
    if (path.length === digits.length) {
      result.push(path.join(''));
      return;
    }
    const letters = map[digits[index]];
    for (const letter of letters) {
      backtrack(index + 1, [...path, letter]);
    }
  };
  backtrack(0, []);
  return result;
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations2 = function (digits) {
  const lettersMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };
  let len = digits.length;
  if (len === 0) return [];
  const result = [];
  const backStracing = (index, path) => {
    if (index === len) {
      result.push(path);
      return;
    }
    const letters = lettersMap[digits[index]];
    for (letter of letters) {
      backStracing(index + 1, path + letter);
    }
  };
  backStracing(0, '');
  return result;
};
