const intToRoman = (num) => {
  const roman = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' },
  ];
  let result = '';
  for (let i = 0; i < roman.length; i++) {
    while (num >= roman[i].value) {
      result += roman[i].symbol;
      num -= roman[i].value;
    }
  }
  return result;
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman2 = function (num) {
  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];
  let result = '';
  for (let i = 0; i < romanMap.length; i++) {
    const [symbol, value] = romanMap[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
};
