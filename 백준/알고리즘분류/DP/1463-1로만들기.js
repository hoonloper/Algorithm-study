const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const x = +input[0];
    const visited = Array.from({ length: x + 1 }, () => 0);

    const bfs = (n) => {
      const queue = [[n, 0]];

      while (queue.length) {
        const [num, count] = queue.shift();

        if (num === 1) {
          return count;
        }
        if (!visited[num]) {
          visited[num] = 1;
          if (num % 3 === 0) {
            queue.push([num / 3, count + 1]);
          }
          if (num % 2 === 0) {
            queue.push([num / 2, count + 1]);
          }
          queue.push([num - 1, count + 1]);
        }
      }
    };
    console.log(bfs(x));
  });
