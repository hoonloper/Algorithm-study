const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input[0].split(' ').map(Number);
    const arr = input[1].split(' ').map(Number);

    let positive = [];
    let negative = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) positive.push(arr[i]);
      else negative.push(Math.abs(arr[i]));
    }

    positive.sort((a, b) => b - a);
    negative.sort((a, b) => b - a);

    let result = 0;

    if (positive.length === 0 || positive[0] < negative[0]) {
      result += negative[0];
      negative = negative.slice(m);
    } else {
      result += positive[0];
      positive = positive.slice(m);
    }

    let idx = 0;
    while (idx < positive.length) {
      result += positive[idx] * 2;
      idx += m;
    }
    idx = 0;
    while (idx < negative.length) {
      result += negative[idx] * 2;
      idx += m;
    }
    console.log(result);
  });
