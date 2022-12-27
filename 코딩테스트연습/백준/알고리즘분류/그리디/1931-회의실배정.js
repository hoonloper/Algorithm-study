const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.shift();
  const times = input.map((el) => el.split(' ').map((el) => +el));
  let et = 0;
  let answer = 0;
  times.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  for (const [start, end] of times) {
    if (start >= et) {
      answer++;
      et = end;
    }
  }
  console.log(answer);
});
