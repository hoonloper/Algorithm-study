const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const arr = input.map(BigInt);

    let s = 0n;
    let e = BigInt(m) * arr[arr.length - 1];

    while (s <= e) {
      const mid = BigInt((s + e) / 2n);

      const p = arr.reduce((acc, cur) => acc + BigInt(mid / cur), 0n);

      if (p >= m) {
        e = mid - 1n;
      } else {
        s = mid + 1n;
      }
    }
    console.log(s.toString());
  });
