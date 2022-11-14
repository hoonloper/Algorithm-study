const solution = (n, f) => {
  // 파스칼 삼각형이 4일경우 1 3 3 1의 규칙을 가지고 있음
  // 3C0, 3C1, 3C2, 3C3
  // 5일 경우 1 4 6 4 1
  let answer;
  let flag;
  const dy = Array.from(Array(11), () => Array(11).fill(0));
  const ch = Array.from({ length: n + 1 }, () => 0);
  const b = Array.from({ length: n }, () => 0);
  const p = Array.from({ length: n }, () => 0);
  const combi = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  };
  const DFS = (L, sum) => {
    if (flag) return;
    if (L === n && sum === f) {
      answer = [...p];
      flag = 1;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          p[L] = i;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  };
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  return answer;
};

console.log(solution(4, 16));
