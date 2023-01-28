const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [N, M] = input.shift().split(' ').map(Number);
    const lands = input.pop().split(' ').map(Number);
    const arr = input.map((el) => el.split(' ').map(Number));
    const graph = Array.from({ length: N + 1 }, () => []);

    for (const [a, b, c] of arr) {
      graph[a].push([b, c]);
      graph[b].push([a, c]);
    }

    let lt = 0;
    let rt = 1000000000;
    let answer = 0;

    const bfs = (mid) => {
      const visited = Array.from({ length: N + 1 }, () => false);
      const queue = [lands[0]];
      visited[lands[0]] = true;

      while (queue.length) {
        const x = queue.shift();

        for (const [i, w] of graph[x]) {
          if (!visited[i] && w >= mid) {
            visited[i] = true;
            queue.push(i);
          }
        }
      }
      if (visited[lands[1]]) return true;
      else return false;
    };

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);

      if (bfs(mid)) {
        lt = mid + 1;
        answer = Math.max(answer, mid);
      } else {
        rt = mid - 1;
      }
    }

    console.log(answer);
  });
