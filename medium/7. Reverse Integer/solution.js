const reverse = (x) => {
  const reversed = parseInt(x.toString().split('').reverse().join(''));
  if (reversed > Math.pow(2, 31) - 1 || reversed < Math.pow(-2, 31)) {
    return 0;
  }
  return x < 0 ? -reversed : reversed;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

/**
 * @param {number} x
 * @return {number}
 */
var reverse2 = function (x) {
  const isNegative = x < 0;
  const n = Math.abs(x).toString().split('').reverse().join('');
  const n2 = parseInt(n);
  const n3 = isNegative ? n2 * -1 : n2;
  if (n3 > 2 ** 31 - 1 || n3 < -(2 ** 31)) return 0;
  return n3;
};
