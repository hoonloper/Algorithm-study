const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const num = +input[0];
    const x = 1000000000;
    const dp = new Array(10).fill(1);
    dp[0] = 0;

    for (let i = 1; i < num; i++) {
      const copy = [...dp];
      dp[0] = copy[1] % x;
      for (let j = 1; j < 9; j++) {
        dp[j] = (copy[j - 1] + copy[j + 1]) % x;
      }
      dp[9] = copy[8] % x;
    }

    console.log(dp.reduce((a, c) => (a + c) % x, 0));
  });
