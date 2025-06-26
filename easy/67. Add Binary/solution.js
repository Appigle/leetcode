const addBinary = (a, b) => {
  let carry = 0;
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || carry > 0) {
    const bitA = i >= 0 ? parseInt(a[i]) : 0;
    const bitB = j >= 0 ? parseInt(b[j]) : 0;
    const sum = bitA + bitB + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
    i--;
    j--;
  }
  return result;
};

addBinary('11', '1');

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary2 = function (a, b) {
  let ai = a.length - 1;
  let bi = b.length - 1;
  const result = [];
  let carry = 0;
  while (ai >= 0 || bi >= 0 || carry) {
    let sum = carry;
    if (ai >= 0) sum += parseInt(a[ai--]);
    if (bi >= 0) sum += parseInt(b[bi--]);
    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  }
  return result.reverse().join('');
};
