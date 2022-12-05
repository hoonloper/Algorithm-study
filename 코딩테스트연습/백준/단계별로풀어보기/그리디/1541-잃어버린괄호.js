const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const numbers = input[0].split('-');
  const arr = [];
  for (const num of numbers) {
    if (num.includes('+')) {
      const newSum = num.split('+').reduce((acc, el) => acc + +el, 0);
      arr.push(newSum);
    } else {
      arr.push(+num);
    }
  }
  let answer = arr[0];
  for (let i = 1; i < arr.length; i++) {
    answer -= arr[i];
  }
  console.log(answer);
});
