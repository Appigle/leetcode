66. Plus One

/\*\*

- @param {number[]} digits
- @return {number[]}
  \*/
  function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
  if (digits[i] < 9) {
  digits[i] += 1;
  return digits;
  }
  digits[i] = 0; // reset to 0 and carry over
  }

      // All digits were 9, so we need an extra digit at the front
      digits.unshift(1);
      return digits;

  }
