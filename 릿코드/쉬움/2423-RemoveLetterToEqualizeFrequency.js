/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  for (let i = 0; i < word.length; i++) {
    const arr = word.split('');
    arr.splice(i, 1);
    const obj = {};
    for (let j = 0; j < arr.length; j++) {
      if (obj[arr[j]]) {
        obj[arr[j]] += 1;
      } else {
        obj[arr[j]] = 1;
      }
    }
    const size = new Set(Object.values(obj)).size;
    if (size === 1) {
      return true;
    }
  }
  return false;
};
