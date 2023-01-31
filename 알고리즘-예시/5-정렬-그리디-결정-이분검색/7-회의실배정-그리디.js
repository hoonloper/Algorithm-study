const solution = (n, arr) => {
  let answer = 0;
  let et = 0;
  arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  for (const x of arr) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }

  return answer;
};

const n = 5;
const arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
const arr = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(n, arr));
