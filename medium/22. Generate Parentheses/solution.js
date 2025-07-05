const generateParenthesis = (n) => {
  const result = [];
  const generate = (current, open, close) => {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }
    if (open < n) {
      generate(current + '(', open + 1, close);
    }
    if (close < open) {
      generate(current + ')', open, close + 1);
    }
  };
  generate('', 0, 0);
  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis2 = function (n) {
  const result = [];
  const backtrack = (current, open, close) => {
    if (current.length / 2 === n) {
      result.push(current);
      return;
    }

    if (open < n) {
      backtrack(current + '(', open + 1, close);
    }
    if (close < open) {
      backtrack(current + ')', open, close + 1);
    }
  };
  backtrack('', 0, 0);
  return result;
};
