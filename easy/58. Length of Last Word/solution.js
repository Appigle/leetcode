/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  if (!s) return 0;
  const words = s.split(' ');
  console.log('words', words);
  let lastWord = words.pop();
  while (!lastWord) {
    lastWord = words.pop();
  }
  return lastWord.length;
};

const lengthOfLastWord2 = (s = '') => {
  return s.trim().split(' ').pop().length;
};

lengthOfLastWord2('Hello World');
