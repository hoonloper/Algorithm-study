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
  const arr = input.map((el) => el.split(' ').map(Number));
  const p = [];
  let max = 0;
  arr.forEach((a, idx) => {
    p.push(0);
    for (let i = 0; i < 5; i++) {
      for (let j = i + 1; j < 5; j++) {
        for (let z = j + 1; z < 5; z++) {
          p[idx] = Math.max(p[idx], (a[i] + a[j] + a[z]) % 10);
        }
      }
    }
    max = Math.max(max, p[idx]);
  });
  let answer = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === max) {
      answer = i + 1;
    }
  }
  console.log(answer);
});
