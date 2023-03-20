const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[n], [...numbers]] = input.map((el) => el.split(' ').map(Number));
    const arr = [...numbers];
    let max = arr[0];
    for (let i = 1; i < n; i++) {
      arr[i] = Math.max(arr[i], numbers[i] + arr[i - 1]);
      max = Math.max(max, arr[i]);
    }
    console.log(max);
  });
