const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[N, M], arr] = input.map((el) => el.split(' ').map(Number));

    const max = Math.max(...arr);
    let lt = max;
    let rt = arr.reduce((acc, el) => acc + el, 0);

    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);

      let sum = 0;
      let count = 0;
      for (let i = 0; i < N; i++) {
        if (sum + arr[i] > mid) {
          count += 1;
          sum = 0;
        }
        sum += arr[i];
      }
      if (sum) count += 1;

      if (count > M) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }

    console.log(lt);
  });
