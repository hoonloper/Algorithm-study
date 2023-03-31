const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [[t], ...arr] = input.map((el) => el.split(' ').map(Number));

    for (let z = 0; z < t * 3; z += 3) {
      const [len] = arr[z];
      const [up, down] = [arr[z + 1], arr[z + 2]];
      const dp = [[0, up[0], down[0]]];
      for (let i = 1; i < len; i++) {
        dp[i] = [
          Math.max(...dp[i - 1]),
          Math.max(dp[i - 1][0], dp[i - 1][2]) + up[i],
          Math.max(dp[i - 1][0], dp[i - 1][1]) + down[i],
        ];
      }
      console.log(Math.max(...dp[len - 1]));
    }
  });
