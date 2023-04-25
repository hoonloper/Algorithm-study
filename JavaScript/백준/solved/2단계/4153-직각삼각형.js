const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.pop();
  const answer = input.map((el) => {
    const [A, B, C] = el.split(' ').sort((a, b) => +a - +b);
    return Number(A) ** 2 + Number(B) ** 2 === Number(C) ** 2
      ? 'right'
      : 'wrong';
  });
  console.log(answer.join('\n'));
});
