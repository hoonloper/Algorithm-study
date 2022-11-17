const solution = ([N, M]) => {
  let answer = [];
  const tmp = Array.from({ length: M }, () => 0);
  const DFS = (l) => {
    if (l === M) {
      answer.push([...tmp]);
    } else {
      for (let i = 1; i <= N; i++) {
        tmp[l] = i;
        DFS(l + 1);
      }
    }
  };
  DFS(0);
  return answer;
};

console.log(solution([3, 2]));
