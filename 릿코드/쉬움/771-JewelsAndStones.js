/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  jewels = jewels.split('');
  stones = stones.split('');
  return stones.filter((el) => jewels.includes(el)).length;
};
