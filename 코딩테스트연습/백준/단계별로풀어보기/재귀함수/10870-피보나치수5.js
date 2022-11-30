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
  let L = 0;
  let R = 1;

  const DFS = (x) => {
    if (num === 0) {
      R = 0;
      return;
    }
    if (x === num) {
      return;
    } else {
      let sum = L + R;
      L = R;
      R = sum;
      DFS(x + 1);
    }
  };
  DFS(1);

  console.log(R);
});
