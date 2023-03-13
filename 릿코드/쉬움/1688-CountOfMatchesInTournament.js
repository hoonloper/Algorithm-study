/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
  let count = 0;
  while (n !== 1) {
    count += Math.floor(n / 2);
    n = n % 2 === 1 ? Math.floor(n / 2) + 1 : Math.floor(n / 2);
  }
  return count;
};
