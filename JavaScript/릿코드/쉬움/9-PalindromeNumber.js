/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const num = x + '';
  const q = Math.floor(num.length / 2);

  for (let i = 0; i < q; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
