const groupAnagrams2 = (strs) => {
  const map = new Map();
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }
  return Array.from(map.values());
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const count = new Array(26).fill(0);
    for (char of strs[i]) {
      count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const key = count.join('*');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(strs[i]);
  }

  return Array.from(map.values());
};
