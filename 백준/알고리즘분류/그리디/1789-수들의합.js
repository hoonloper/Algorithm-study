const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const S = +input[0];
  let cnt = 0;
  let num = 1;
  let sum = 0;
  while (true) {
    if (sum > S) {
      cnt--;
      break;
    }
    sum += num;
    cnt++;
    num++;
  }
  console.log(cnt);
});

1789;
