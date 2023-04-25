/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  return operations.reduce((acc, el) => {
    acc += el[1] === '+' ? 1 : -1;
    return acc;
  }, 0);
};
