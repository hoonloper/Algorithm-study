const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
const v8 = require('v8');
v8.setFlagsFromString('--stack-size=512');
const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[n, m], ...graph] = input.map((el) => el.split(' ').map(Number));
    const moves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    const visited = Array.from({ length: n + 1 }, () =>
      Array(m + 1).fill(false)
    );
    // const dfs = (y, x) => {
    //   visited[y][x] = true;
    //   graph[y][x] = 0;
    //   count++;

    //   moves.forEach(([dy, dx]) => {
    //     const [ny, nx] = [dy + y, dx + x];
    //     if (ny >= 0 && ny < n && nx >= 0 && nx < m && graph[ny][nx] === 1) {
    //       dfs(ny, nx);
    //     }
    //   });
    // };
    // const answer = [];
    // for (let y = 0; y < n; y++) {
    //   for (let x = 0; x < m; x++) {
    //     if (graph[y][x] === 0 || visited[y][x]) continue;
    //     dfs(y, x);
    //     answer.push(count);
    //     count = 0;
    //   }
    // }
    const bfs = (y, x) => {
      const queue = [[y, x]];
      let count = 1;

      while (queue.length) {
        const [y, x] = queue.shift();
        graph[y][x] = 0;
        visited[y][x] = true;

        moves.forEach(([dy, dx]) => {
          const [ny, nx] = [dy + y, dx + x];
          if (
            ny >= 0 &&
            ny < n &&
            nx >= 0 &&
            nx < m &&
            graph[ny][nx] === 1 &&
            visited[ny][nx] === false
          ) {
            count++;
            graph[ny][nx] = 0;
            queue.push([ny, nx]);
          }
        });
      }

      return count;
    };
    const answer = [];
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < m; x++) {
        if (graph[y][x] === 0 || visited[y][x]) continue;
        const count = bfs(y, x);
        answer.push(count);
      }
    }
    const ans = answer.length
      ? answer.length + '\n' + Math.max(...answer)
      : '0\n0';
    console.log(ans);
  });
