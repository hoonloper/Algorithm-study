const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const number = +input[0];
  const queue = [];
  for (let i = 1; i <= number; i++) {
    queue.push(i);
  }
  while (queue.length !== 1) {
    queue.shift();
    queue.push(queue.shift());
  }

  console.log(queue[0]);
});
