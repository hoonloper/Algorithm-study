const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [I, ...array] = input;
    const [N, M] = I.split(' ').map(Number);
    const arr = array.map(Number);

    arr.sort((a, b) => a - b);

    let lt = 1;
    let rt = arr[N - 1];

    while (lt <= rt) {
      const mid = Math.floor((rt + lt) / 2);

      const sum = arr
        .map((line) => Math.floor(line / mid))
        .reduce((acc, el) => acc + el, 0);
      if (sum >= M) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }
    console.log(rt);
  });
