const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let count = 0;
  let x = +input[0];

  while (true) {
    if (x % 5 === 0) {
      count += x / 5;
      console.log(count);
      break;
    }
    x -= 3;
    count++;
    if (x < 0) {
      console.log('-1');
      break;
    }
  }
});
