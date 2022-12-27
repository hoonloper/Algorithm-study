const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const times = input[1]
    .split(' ')
    .map((el) => +el)
    .sort((a, b) => a - b);
  let sum = 0;
  const answer = times
    .map((el) => (sum += el))
    .reduce((acc, el) => acc + el, 0);
  console.log(answer);
});
