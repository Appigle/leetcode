const multiply2 = (num1, num2) => {
  if (num1 === '0' || num2 === '0') return '0';
  const m = num1.length;
  const n = num2.length;
  const result = Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (num1[i] - '0') * (num2[j] - '0');
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + result[p2];
      result[p2] = sum % 10;
      result[p1] += Math.floor(sum / 10);
    }
  }
  return result.join('').replace(/^0+/, '');
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  const len1 = num1.length;
  const len2 = num2.length;
  const result = new Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    const digit1 = num1[i] - '0'; // -> ASCII convert string number to number
    for (let j = len2 - 1; j >= 0; j--) {
      const digit2 = num2[j] - '0';

      const val = digit1 * digit2 + result[i + j + 1];
      result[i + j + 1] = val % 10;
      result[i + j] += Math.floor(val / 10);
    }
  }

  while (result[0] === 0) {
    result.shift();
  }

  return result.join('');
};
