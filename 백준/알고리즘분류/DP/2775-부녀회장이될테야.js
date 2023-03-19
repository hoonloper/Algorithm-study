const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [t, ...arr] = input.map(Number);

    // 입력이 모두 완료되면 다이나믹 프로그래밍 알고리즘을 수행합니다.
    for (let i = 0; i < arr.length; i += 2) {
      const [k, n] = [arr[i], arr[i + 1]];

      // 2차원 배열 초기화
      const d = Array.from(Array(k + 1), () => new Array(n + 1).fill(0));

      // 0층 값 입력
      for (let j = 0; j <= n; j++) {
        d[0][j] = j;
      }

      // 다이나믹 프로그래밍으로 각 호수의 사람 수 계산
      for (let j = 1; j <= k; j++) {
        for (let l = 1; l <= n; l++) {
          d[j][l] = d[j][l - 1] + d[j - 1][l];
        }
      }

      // 결과 출력
      console.log(d[k][n]);
    }
  });
