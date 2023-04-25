const solution = (n, arr) => {
  return arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
};

const n = 5;
const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(n, arr));
