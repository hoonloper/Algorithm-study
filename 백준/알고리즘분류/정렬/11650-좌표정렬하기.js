const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const N = +input.shift();
    const arr = input.map((el) => el.split(' ').map(Number));

    arr.sort(([x, y], [xx, yy]) => (x === xx ? y - yy : x - xx));

    console.log(arr.map((el) => el.join(' ')).join('\n'));
  });
