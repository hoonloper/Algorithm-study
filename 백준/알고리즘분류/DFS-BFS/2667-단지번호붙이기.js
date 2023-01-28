const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [N, ...house] = input;
    const dfsArr = house.map((el) => el.split('').map(Number));
    const bfsArr = house.map((el) => el.split('').map(Number));
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const dfsAnswer = [];
    let dfsCount = 1;

    const DFS = (x, y) => {
      dfsArr[x][y] = 0;
      for (let k = 0; k < 4; k++) {
        const nx = x + dx[k];
        const ny = y + dy[k];
        if (nx >= 0 && nx < +N && ny >= 0 && ny < +N && dfsArr[nx][ny] === 1) {
          dfsCount++;
          DFS(nx, ny);
        }
      }
    };

    for (let i = 0; i < +N; i++) {
      for (let j = 0; j < +N; j++) {
        if (dfsArr[i][j] === 0) continue;
        DFS(i, j);
        dfsAnswer.push(dfsCount);
        dfsCount = 1;
      }
    }
    const dfsAns =
      dfsAnswer.length === 0
        ? '0'
        : dfsAnswer.length + '\n' + dfsAnswer.sort((a, b) => a - b).join('\n');
    console.log(dfsAns);

    const bfsAnswer = [];
    const queue = [];

    for (let i = 0; i < +N; i++) {
      for (let j = 0; j < +N; j++) {
        let bfsCount = 1;
        if (bfsArr[i][j] === 0) continue;
        queue.push([i, j]);
        bfsArr[i][j] = 0;

        while (queue.length > 0) {
          const [x, y] = queue.shift();

          for (let z = 0; z < 4; z++) {
            const nx = x + dx[z];
            const ny = y + dy[z];
            if (
              nx >= 0 &&
              nx < +N &&
              ny >= 0 &&
              ny < +N &&
              bfsArr[nx][ny] === 1
            ) {
              bfsArr[nx][ny] = 0;
              bfsCount++;
              queue.push([nx, ny]);
            }
          }
        }
        bfsAnswer.push(bfsCount);
      }
    }
    const bfsAns =
      bfsAnswer.length === 0
        ? '0'
        : bfsAnswer.length + '\n' + bfsAnswer.sort((a, b) => a - b).join('\n');

    console.log(bfsAns);
  });
/**
 * 놓친것들
 * 단지의 개수 오름차순 정렬
 * 대각선은 같은 단지로 치지 않는다
 * 단지가 없을 경우 공백 출력
 * 입력(N)이 10의 자리로 들어오면 쪼개버려서 오답
 */
