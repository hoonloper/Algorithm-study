const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const k = +input.shift();
  const weight = input.map((el) => +el).sort((a, b) => a - b);
  let min = weight[0] * k;

  for (let i = 1; i < k; i++) {
    const newMin = weight[i] * (k - i);
    if (min < newMin) min = newMin;
  }

  console.log(min);
});
