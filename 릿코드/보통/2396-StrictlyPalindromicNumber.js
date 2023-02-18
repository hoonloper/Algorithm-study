/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  const bin = n.toString(2);
  const len = bin.length;
  if (len === 1) return true;
  const x = Math.floor(bin / 2);
  for (let i = 0; i < x; i++) {
    if (bin[i] !== bin[len - 1]) return false;
  }
  return true;
};
