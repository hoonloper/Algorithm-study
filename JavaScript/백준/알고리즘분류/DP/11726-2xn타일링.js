const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const num = +input[0];

    // 초기값 설정
    const dp = [0, 1, 2];

    // 다이나믹 프로그래밍으로 D[N] 값 계산
    for (let j = 3; j <= num; j++) {
      dp[j] = (dp[j - 1] + dp[j - 2]) % 10007;
    }

    // 결과 출력
    console.log(dp[num]);
  });
