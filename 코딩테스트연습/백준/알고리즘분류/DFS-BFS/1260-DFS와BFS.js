const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N, M, V], ...arr] = input.map((el) => el.split(' ').map(Number));
    const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
    for (const [a, b] of arr) {
      graph[a][b] = 1;
      graph[b][a] = 1;
    }
    const dfsVisited = Array.from({ length: N + 1 }, () => false);
    const dfsResult = [];
    const DFS = (node) => {
      if (dfsVisited[node]) return;
      dfsVisited[node] = true;
      dfsResult.push(node);
      for (let i = 0; i <= N; i++) {
        if (graph[node][i] === 1 && !dfsVisited[i]) {
          DFS(i);
        }
      }
    };

    DFS(V);

    const bfsVisited = Array.from({ length: N + 1 }, () => false);
    const bfsResult = [];
    const queue = [];
    queue.push(V);
    bfsResult.push(V);
    while (queue.length) {
      let node = queue.shift();
      bfsVisited[node] = true;
      for (let i = 0; i <= N; i++) {
        if (graph[node][i] === 1 && !bfsVisited[i]) {
          bfsVisited[i] = true;
          bfsResult.push(i);
          queue.push(i);
        }
      }
    }
    console.log(dfsResult.join(' '));
    console.log(bfsResult.join(' '));
  });
