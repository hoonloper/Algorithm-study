/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const str = s.trim().split(' ');
  return str[str.length - 1].length;
};
