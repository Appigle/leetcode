const isPalindrome = (x) => {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome2 = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reversedHalf = 0;
  while (x > reversedHalf) {
    // stop when x <= reversedHalf means the index has reached at the half of the num
    let digit = x % 10; // get the last digit from x
    reversedHalf = reversedHalf * 10 + digit;
    x = Math.floor(x / 10); // resign the x value divide by 10 (reduce one digit)
  }
  // even vs odd
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};
