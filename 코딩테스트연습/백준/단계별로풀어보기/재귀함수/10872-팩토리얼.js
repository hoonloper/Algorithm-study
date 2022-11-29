const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const num = +input[0];
  let sum = 1;
  const DFS = (L) => {
    if (L === 0) {
      return;
    } else {
      sum *= L;
      DFS(L - 1);
    }
  };
  DFS(num);
  console.log(sum);
});
