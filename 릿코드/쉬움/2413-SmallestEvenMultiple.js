/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  return (n * 1) % 2 === 0 ? n : n * 2;
};
