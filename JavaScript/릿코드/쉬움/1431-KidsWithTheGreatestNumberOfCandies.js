/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  return candies.map((candie) => candie + extraCandies >= Math.max(...candies));
};
