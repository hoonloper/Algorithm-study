const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, K] = input[0].split(' ').map(Number);
  const queue = [];
  const newQueue = [];
  let count = 0;

  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.length > 0) {
    count++;
    if (count % K === 0) {
      newQueue.push(queue.shift());
    } else {
      queue.push(queue.shift());
    }
  }
  console.log('<' + newQueue.join(', ') + '>');
});
