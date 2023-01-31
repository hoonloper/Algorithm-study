const solution = (n, m) => {
  // 메모이 제이션 - 시간 속도 차이 미쳤음 꼭 숙지해야 함.
  const dy = Array.from(Array(n + 1), () => Array(m + 1));
  const MemoDFS = (n, m) => {
    if (dy[n][m] > 0) return dy[n][m];
    if (m === 0 || n === m) return 1;
    return (dy[n][m] = MemoDFS(n - 1, m - 1) + MemoDFS(n - 1, m));
  };
  const answer = MemoDFS(n, m);

  // 재귀
  // const DFS = (n, m) => {
  //   if (m === 0 || n === m) return 1;
  //   return DFS(n - 1, m - 1) + DFS(n - 1, m);
  // };
  // const answer = DFS(n, m);
  return answer;
};

console.log(solution(33, 19));
