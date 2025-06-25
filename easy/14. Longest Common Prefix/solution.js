/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = '';
  const len = strs.length;
  if (len === 0) return result;
  let firstItem = strs[0];
  for (let i = 0; i < firstItem.length; i++) {
    result = firstItem.slice(0, i);
    console.log('result:1:: ', result);
    for (let j = 0; j < len; j++) {
      if (!strs[j].startsWith(result)) {
        console.log('result:2:: ', result);
        return result.slice(0, i - 1);
      }
    }
  }
};
