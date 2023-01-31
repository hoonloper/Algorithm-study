const solution = (n, arr, m) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const DFS = (L, sum) => {
    if (sum > m || L >= answer) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  };
  DFS(0, 0);
  return answer;
};
console.log(solution(3, [1, 2, 5], 15));

/* 초기 코드
const solution = (n, arr, m) => {
  let answer = Number.MAX_SAFE_INTEGER;
  const DFS = (L, sum) => {
    if (sum > m) return;
    if (sum === m) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  };
  DFS(0, 0);
  return answer;
};
console.log(solution(3, [1, 2, 5], 15));
*/
