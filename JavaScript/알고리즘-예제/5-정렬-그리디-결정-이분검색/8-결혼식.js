const solution = (n, arr) => {
  const timetable = [];
  let answer = 0;
  let cnt = 0;

  for (const x of arr) {
    timetable.push([x[0], 's'], [x[1], 'e']);
  }

  timetable.sort((a, b) =>
    a[0] === b[0] ? a[1].charCodeAt() - b[1].charCodeAt() : a[0] - b[0]
  );

  for (const [time, status] of timetable) {
    status === 's' ? cnt++ : cnt--;

    answer = Math.max(answer, cnt);
  }

  return answer;
};

const n = 5;
const arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(n, arr));
