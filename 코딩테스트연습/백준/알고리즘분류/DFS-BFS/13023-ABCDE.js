const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N, M], ...arr] = input.map((el) => el.split(' ').map(Number));
    const graph = Array.from({ length: N }, () => []);
    const check = Array.from({ length: N }, () => 0);
    let flag = 0;
    for (const [a, b] of arr) {
      graph[a].push(b);
      graph[b].push(a);
    }

    const dfs = (L, cnt) => {
      if (flag) return;
      if (cnt === 4) {
        flag = 1;
        return;
      }
      check[L] = 1;
      for (let i = 0; i < graph[L].length; i++) {
        if (!check[graph[L][i]]) {
          dfs(graph[L][i], cnt + 1);
        }
      }
      check[L] = 0; // 체크를 해제한다.
    };

    for (let i = 0; i < N; i++) {
      dfs(i, 0);
    }

    console.log(flag);
  });
