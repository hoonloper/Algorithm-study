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
      const queue = [[n, [n]]];

      while (queue.length) {
        const [count, answerArr] = queue.shift();
        if (count === 1) {
          return [answerArr.length - 1, answerArr.join(' ')];
        }
        if (!visited[count]) {
          visited[count] = 1;
          if (count % 3 === 0) {
            queue.push([count / 3, [...answerArr, count / 3]]);
          }
          if (count % 2 === 0) {
            queue.push([count / 2, [...answerArr, count / 2]]);
          }
          queue.push([count - 1, [...answerArr, count - 1]]);
        }
      }
    };
    console.log(bfs(x).join('\n'));
  });
