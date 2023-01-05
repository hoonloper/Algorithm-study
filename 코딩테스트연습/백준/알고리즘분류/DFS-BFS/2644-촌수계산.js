const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[n], [person1, person2], [m], ...arr] = input.map((el) =>
      el.split(' ').map(Number)
    );
    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [node1, node2] of arr) {
      graph[node1].push(node2);
      graph[node2].push(node1);
    }

    const visited = Array(n + 1).fill(false);
    const queue = [person1];
    let count = 0;
    let answer = '';

    while (queue.length) {
      count++;
      const len = queue.length;

      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        visited[node] = true;
        for (const x of graph[node]) {
          if (!visited[x]) {
            if (x === person2) answer += count;
            queue.push(x);
          }
        }
      }
      if (answer) break;
    }
    console.log(answer ? answer : -1);
  });
