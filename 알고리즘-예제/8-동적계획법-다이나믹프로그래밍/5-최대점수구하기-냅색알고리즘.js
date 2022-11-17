const solution = ([len, time], arr) => {
  let answer = 0;
  const dy = Array.from({ length: time + 1 }, () => 0);

  for (let i = 0; i < len; i++) {
    const ps = arr[i][0];
    const pt = arr[i][1];
    for (let j = time; j >= pt; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }
  answer = dy[time];

  return answer;
};

console.log(
  solution(
    [5, 20],
    [
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ]
  )
);
