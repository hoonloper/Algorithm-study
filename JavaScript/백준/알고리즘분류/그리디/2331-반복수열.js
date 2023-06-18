const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [a, p] = input.shift().split(' ').map(Number);
    const arr = [a];
    while (true) {
      const num = arr[arr.length - 1]
        .toString()
        .split('')
        .reduce((acc, cur) => acc + Math.pow(Number(cur), p), 0);
      if (arr.includes(num)) {
        console.log(arr.indexOf(num));
        break;
      }
      arr.push(num);
    }
  });
