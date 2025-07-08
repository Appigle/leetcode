const myPow = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 === 0) return myPow(x * x, n / 2);
  return x * myPow(x * x, (n - 1) / 2);
};

console.log(myPow(2, 10));

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow2 = function (x, n) {
  if (n === 0) return 1;
  let N = n;
  if (N < 0) {
    x = 1 / x;
    N = -N;
  }
  let result = 1;
  while (N > 0) {
    if (N % 2 === 1) {
      result *= x;
    }
    x *= x;
    N = Math.floor(N / 2);
  }
  return result;
};
