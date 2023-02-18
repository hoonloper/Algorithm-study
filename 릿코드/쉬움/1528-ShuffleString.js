/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const obj = indices.reduce((acc, el, i) => ({ ...acc, [el]: s[i] }), {});
  return Object.values(obj).join('');
};
