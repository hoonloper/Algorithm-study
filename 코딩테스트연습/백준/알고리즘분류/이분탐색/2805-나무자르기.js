const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N, M], arr] = input.map((el) => el.split(' ').map(Number));

    arr.sort((a, b) => a - b);

    let lt = 0;

    let rt = arr[N - 1];
    let answer = Number.MIN_SAFE_INTEGER;
    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      let sum = 0;
      for (const x of arr) {
        if (x > mid) sum += x - mid;
      }
      if (sum >= M) {
        if (mid > answer) answer = mid;
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }
    console.log(answer);
  });
