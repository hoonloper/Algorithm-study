const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m] = input.shift().split(' ').map(Number);
    const arr = input.map(Number);

    let s = Math.min(...arr);
    let e = arr.reduce((acc, cur) => acc + cur, 0);
    let answer = Number.MAX_SAFE_INTEGER;
    while (s <= e) {
      const mid = Math.floor((s + e) / 2);
      let copy = mid;
      let min = 0;
      let count = 0;
      for (let i = 0; i < n; i++) {
        if (copy - arr[i] >= 0) {
          copy -= arr[i];
        } else {
          count++;
          copy = mid - arr[i];
          if (copy < 0) {
            min = arr[i];
            break;
          }
        }
      }
      if (min > 0) {
        s = min;
        continue;
      }
      if (copy < mid) count++;
      if (count <= m) {
        if (answer > mid) {
          answer = mid;
        }
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
    console.log(answer);
  });
