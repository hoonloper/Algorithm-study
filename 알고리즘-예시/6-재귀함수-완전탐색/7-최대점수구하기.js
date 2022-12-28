const solution = (limit, scores) => {
  const [len, limitTime] = limit;
  let answer = Number.MIN_SAFE_INTEGER;
  const DFS = (level, time, score) => {
    if (limitTime < time) return;
    if (level === len) {
      answer = Math.max(answer, score);
    } else {
      DFS(level + 1, time + scores[level][1], score + scores[level][0]);
      DFS(level + 1, time, score);
    }
  };
  DFS(0, 0, 0);
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
