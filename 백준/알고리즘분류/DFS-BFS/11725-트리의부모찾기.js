const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N], ...nodes] = input.map((el) => el.split(' ').map(Number));
    const graph = Array.from({ length: N + 1 }, () => []);
    const visited = Array(N + 1).fill(false);
    const parent = Array(N + 1);
    const queue = [1];

    for (const [node1, node2] of nodes) {
      graph[node1].push(node2);
      graph[node2].push(node1);
    }

    while (queue.length) {
      const node = queue.shift();
      for (const x of graph[node]) {
        if (!visited[x]) {
          visited[x] = true;
          parent[x] = node;
          queue.push(x);
        }
      }
    }
    let answer = '';
    for (let k = 2; k < N + 1; k++) {
      answer += parent[k] + '\n';
    }
    console.log(answer);
  });
