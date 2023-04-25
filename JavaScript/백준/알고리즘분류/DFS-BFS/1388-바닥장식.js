const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    // 풀이
    const [N, M] = input.shift().split(' ').map(Number);
    const graph = input.map((el) => el.split(''));

    const visited = Array.from({ length: N + 1 }, () =>
      Array(M + 1).fill(false)
    );

    const checkRange = (x, y) => x < N && y < M;
    const bfs = (x, y, s) => {
      const queue = [[x, y]];

      while (queue.length) {
        const [xx, yy] = queue.shift();
        visited[xx][yy] = true;
        graph[xx][yy] = '';

        if (s === '-') {
          const dy = yy + 1;
          if (checkRange(xx, dy) && !visited[xx][dy] && graph[xx][dy] === s) {
            queue.push([xx, dy]);
          }
        } else {
          const dx = xx + 1;
          if (checkRange(dx, yy) && !visited[dx][yy] && graph[dx][yy] === s) {
            queue.push([dx, yy]);
          }
        }
      }
    };

    let answer = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (visited[i][j]) continue;
        if (graph[i][j] === '-') {
          bfs(i, j, '-');
        } else {
          bfs(i, j, '|');
        }
        answer += 1;
      }
    }

    console.log(answer);
  });
