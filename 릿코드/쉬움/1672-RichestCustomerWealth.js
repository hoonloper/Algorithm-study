/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  return Math.max(
    ...accounts.map((el) => el.reduce((acc, cur) => acc + cur, 0))
  );
};
