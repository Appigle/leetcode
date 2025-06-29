const convertToTitle = (columnNumber) => {
  let result = '';
  while (columnNumber > 0) {
    columnNumber--;
    result = String.fromCharCode(65 + (columnNumber % 26)) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};

convertToTitle(28);

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle2 = function (columnNumber) {
  let result = '';

  while (columnNumber > 0) {
    // 1(A) base -> 0 base
    columnNumber--;
    const remainder = columnNumber % 26;
    const char = String.fromCharCode(65 + remainder);
    result = char + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};
