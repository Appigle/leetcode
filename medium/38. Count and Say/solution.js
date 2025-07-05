const countAndSay = (n) => {
  let result = '1';
  for (let i = 2; i <= n; i++) {
    result = say(result);
  }
  return result;
};

const say = (str) => {
  let result = '';
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += count + str[i - 1];
      count = 1;
    }
  }
  result += count + str[str.length - 1];
  return result;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay2 = function (n) {
  let result = '1';

  for (let i = 2; i <= n; i++) {
    let current = '';
    let count = 1;
    for (let j = 1; j < result.length; j++) {
      if (result[j] === result[j - 1]) {
        count++;
      } else {
        current += `${count}${result[j - 1]}`;
        count = 1;
      }
    }
    current += `${count}${result[result.length - 1]}`;
    result = current;
  }
  return result;
};
