/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 0;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const val = mid * mid;
    if (val === x) return mid;
    if (val < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

const mySqrt2 = (x) => {
  return Math.floor(Math.sqrt(x));
};

mySqrt2(4);
