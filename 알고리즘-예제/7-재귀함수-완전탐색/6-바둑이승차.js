const solution = (weight, arr) => {
  const len = arr.length;
  let answer = Number.MIN_SAFE_INTEGER;
  const DFS = (level, sum) => {
    if (sum > weight) return;
    if (level === len) {
      answer = Math.max(answer, sum);
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }
  };
  DFS(0, 0);
  return answer;
};

console.log(solution(259, [81, 58, 42, 33, 61]));
