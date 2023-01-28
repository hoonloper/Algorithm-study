const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [A, B, V] = input[0].split(' ');
  const days = Math.ceil((+V - +B) / (+A - +B));

  console.log(days);
});
