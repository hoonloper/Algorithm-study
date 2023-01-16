const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const N = +input.shift();
    const nodes = input.map((el) => el.split(' ').map(Number));
    const tree = Array.from({ length: N + 1 }, () => []);

    if (N === 1) {
      console.log(0);
      return;
    }

    for (const [p, c, d] of nodes) {
      tree[p].push([c, d]);
      tree[c].push([p, d]);
    }
    tree.sort((a, b) => a[0] - b[0]);

    const bfs = (L) => {
      const visited = Array(N + 1).fill(false);
      const queue = [[L, 0]];
      let max = { node: 0, dist: 0 };
      while (queue.length) {
        const [node, dist] = queue.shift();
        if (visited[node]) continue;

        visited[node] = true;

        if (max.dist < dist) max = { node, dist };

        for (let [nextNode, nextDist] of tree[node]) {
          queue.push([nextNode, dist + nextDist]);
        }
      }

      return max;
    };

    console.log(bfs(bfs(1).node).dist);
  });
