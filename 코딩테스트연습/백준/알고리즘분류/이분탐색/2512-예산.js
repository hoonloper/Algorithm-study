const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [N, array, M] = input;
    const arr = array
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    let lt = 1;
    let rt = arr[+N - 1];

    while (lt <= rt) {
      const mid = Math.floor((rt + lt) / 2);

      let sum = 0;
      for (const x of arr) {
        if (mid >= x) {
          sum += x;
        } else {
          sum += mid;
        }
      }
      if (sum <= +M) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }
    console.log(rt);
  });
