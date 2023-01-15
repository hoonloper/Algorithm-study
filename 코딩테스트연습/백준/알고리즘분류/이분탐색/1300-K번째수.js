const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [N, K] = input.map(Number);

    let lt = 1;
    let rt = K;
    while (lt <= rt) {
      const mid = Math.floor((lt + rt) / 2);
      let cnt = 0;

      for (let i = 1; i <= N; i++) {
        cnt += Math.min(Math.floor(mid / i), N);
      }

      if (cnt >= K) {
        rt = mid - 1;
      } else {
        lt = mid + 1;
      }
    }
    console.log(lt);
  });
