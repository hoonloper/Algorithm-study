const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N, M], ...arr] = input.map((el) => el.split(' ').map(Number));
    const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
    for (const [u, v] of arr) {
      graph[u][v] = 1;
      graph[v][u] = 1;
    }

    const dfsVisited = Array(N + 1).fill(false);
    let dfsCount = 0;

    const DFS = (node) => {
      if (dfsVisited[node]) return;
      dfsVisited[node] = true;
      for (let i = 0; i <= N; i++) {
        if (graph[node][i] === 1 && !dfsVisited[i]) {
          DFS(i);
        }
      }
    };

    for (let i = 1; i <= N; i++) {
      if (!dfsVisited[i]) {
        DFS(i);
        dfsCount++;
      }
    }
    console.log(dfsCount);

    const bfsVisited = Array(N + 1).fill(false);
    let bfsCount = 0;

    for (let i = 1; i <= N; i++) {
      if (!bfsVisited[i]) {
        const queue = [i];
        while (queue.length) {
          let node = queue.shift();
          bfsVisited[node] = true;
          for (let i = 0; i <= N; i++) {
            if (graph[node][i] === 1 && !bfsVisited[i]) {
              bfsVisited[i] = true;
              queue.push(i);
            }
          }
        }
        bfsCount++;
      }
    }

    console.log(bfsCount);
  });
