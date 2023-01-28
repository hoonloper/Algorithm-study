const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let max = 0;
  let sum = 0;
  const arr = input.map(Number);

  for (const n of arr) {
    const x = sum;
    sum += n;
    if (sum - 100 >= 0) {
      const absX = Math.abs(100 - x);
      const absSum = Math.abs(sum - 100);
      if (absX >= absSum) {
        max = sum;
      } else {
        max = x;
      }
      break;
    }
  }

  console.log(max ? max : sum);
});
