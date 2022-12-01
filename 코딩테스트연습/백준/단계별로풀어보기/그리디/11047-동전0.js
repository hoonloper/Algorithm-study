const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, K] = input[0].split(' ').map((el) => +el);
  input.shift();
  const coins = input.map((el) => +el).sort((a, b) => b - a);
  let sum = 0;
  let num = K;
  for (const coin of coins) {
    if (coin > num) continue;
    sum += Math.floor(num / coin);
    num = num - Math.floor(num / coin) * coin;
  }
  console.log(sum);
});
