const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    // 자신의 로직이 틀리지 않았다는 걸 95% 이상 확신한다면
    // 꺼진 입력부분을 다시보자.
    const [arr, ...board] = input;
    const [N, M] = arr.split(' ').map(Number);
    const graph = board.map((el) => el.split(''));
    const visited = Array.from({ length: M }, () => Array(N).fill(false));
    const moves = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    let whiteCount = 0;
    let blueCount = 0;
    let count = 0;

    const checkRange = (m, n) => m >= 0 && m < M && n >= 0 && n < N;
    const dfs = (m, n, s) => {
      if (checkRange(m, n) && !visited[m][n] && graph[m][n] === s) {
        visited[m][n] = true;
        count++;
        moves.forEach(([dm, dn]) => {
          const [nm, nn] = [dm + m, dn + n];
          dfs(nm, nn, s);
        });
      }
    };

    for (let m = 0; m < M; m++) {
      for (let n = 0; n < N; n++) {
        if (visited[m][n]) continue;
        if (graph[m][n] === 'W') {
          dfs(m, n, 'W');
          whiteCount += count ** 2;
        } else {
          dfs(m, n, 'B');
          blueCount += count ** 2;
        }
        count = 0;
      }
    }

    console.log(whiteCount + ' ' + blueCount);
  });
