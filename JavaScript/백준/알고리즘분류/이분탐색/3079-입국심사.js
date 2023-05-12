const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const arr = input.map(Number).sort((a, b) => a - b);

    let s = 0;
    let e = m * arr[arr.length - 1];

    while (s <= e) {
      const mid = Math.floor((s + e) / 2);

      const p = arr.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

      if (p >= m) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
    console.log(s);
  });
