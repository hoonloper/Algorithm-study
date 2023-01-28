const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N, I, start], ...arr] = input.map((el) =>
      el.split(' ').map(Number)
    );
    const answer = Array(N).fill(0);
    const graph = Array.from({ length: N + 1 }, () => []);
    const visited = Array.from({ length: I + 1 }, () => false);

    for (const [a, b] of arr) {
      graph[a].push(b);
      graph[b].push(a);
    }

    let count = 1;

    const dfs = (s) => {
      visited[s] = true;
      answer[s - 1] = count++;
      if (!graph[s].length) return;
      graph[s].sort((a, b) => a - b);
      for (const x of graph[s]) {
        if (!visited[x]) {
          dfs(x);
        }
      }
    };

    dfs(start);

    console.log(answer.join('\n'));
  });
