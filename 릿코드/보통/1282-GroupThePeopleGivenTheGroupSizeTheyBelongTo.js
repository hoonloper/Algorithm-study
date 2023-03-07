/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const obj = groupSizes.reduce(
    (acc, el, i) => ({ ...acc, [el]: acc[el] ? acc[el] + `${i} ` : i + ' ' }),
    {}
  );
  const answer = [];
  for (const key in obj) {
    const str = obj[key]
      .split(' ')
      .filter((el) => el)
      .map(Number);
    for (let i = 0; i < str.length; i += +key) {
      answer.push(str.slice(i, i + +key));
    }
  }
  return answer;
};
