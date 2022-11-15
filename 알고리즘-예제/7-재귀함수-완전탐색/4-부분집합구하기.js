const solution = (n) => {
  const answer = [];
  const check = Array.from({ length: n + 1 }, () => 0);
  const DFS = (v) => {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (check[i] === 1) tmp += i;
      }
      if (tmp.length > 0) answer.push(+tmp);
      return;
    } else {
      check[v] = 1;
      DFS(v + 1);

      check[v] = 0;
      DFS(v + 1);
    }
  };

  DFS(1);

  return answer;
};

const n = 3;

console.log(solution(n));
