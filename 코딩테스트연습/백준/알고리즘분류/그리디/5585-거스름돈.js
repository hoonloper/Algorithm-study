const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const money = 1000 - +input[0];
  const coins = [500, 100, 50, 10, 5, 1];
  let sum = money;
  let count = 0;

  for (const coin of coins) {
    if (sum < coin) continue;
    const x = Math.floor(sum / coin);
    sum -= coin * x;
    count += x;
  }

  console.log(count);
});
