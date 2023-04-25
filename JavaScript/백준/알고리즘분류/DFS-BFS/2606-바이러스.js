const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N], [M], ...arr] = input.map((el) => el.split(' ').map(Number));
    const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

    for (const [a, b] of arr) {
      graph[a][b] = 1;
      graph[b][a] = 1;
    }

    // DFS 풀이
    const dfsVisited = Array.from({ length: N + 1 }, () => false);
    let dfsCount = 0;
    const DFS = (node) => {
      if (dfsVisited[node]) return;
      dfsVisited[node] = true;
      dfsCount++;
      for (let i = 0; i <= N; i++) {
        if (graph[node][i] === 1 && !dfsVisited[i]) {
          DFS(i);
        }
      }
    };

    DFS(1);
    console.log(dfsCount - 1);

    // BFS 풀이
    const bfsVisited = Array.from({ length: N + 1 }, () => false);
    let bfsCount = 0;
    const queue = [1];

    while (queue.length) {
      let node = queue.shift();
      bfsVisited[node] = true;
      for (let i = 0; i <= N; i++) {
        if (graph[node][i] === 1 && !bfsVisited[i]) {
          bfsVisited[i] = true;
          bfsCount++;
          queue.push(i);
        }
      }
    }

    console.log(bfsCount);
  });
