const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const num = BigInt(input.shift());
    let s = 0n;
    let e = num;
    let min = Number.MAX_SAFE_INTEGER;
    while (s <= e) {
      const mid = (s + e) / 2n;

      if (mid * mid >= 0) {
        if (mid * mid >= num) {
          e = mid - 1n;
          min = Math.min(min, Number(mid));
        } else {
          s = mid + 1n;
        }
      }
    }
    console.log(min);
  });
