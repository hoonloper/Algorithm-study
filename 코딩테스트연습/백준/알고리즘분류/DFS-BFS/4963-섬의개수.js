const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const arr = input.map((el) => el.split(' ').map(Number));
    const newArr = [];
    const dx = [0, 1, 0, -1, -1, 1, -1, 1];
    const dy = [-1, 0, 1, 0, -1, -1, 1, 1];
    const answer = [];
    let count = 0;

    while (arr.length > 0) {
      const [w, h] = arr.shift();

      newArr.push([[w, h]]);

      for (let i = 0; i < h; i++) {
        newArr[count].push(arr.shift());
      }

      count++;
    }

    newArr.pop();

    // DFS 코드
    const DFS = (x, y) => {
      graph[y][x] = 0;
      for (let z = 0; z < 8; z++) {
        const nx = x + dx[z];
        const ny = y + dy[z];
        if (nx >= 0 && nx < w && ny >= 0 && ny < h && graph[ny][nx] === 1) {
          DFS(nx, ny);
        }
      }
    };
    let land = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (graph[y][x] === 0) continue;
        land++;
        DFS(x, y);
      }
    }
    answer.push(land);

    for (const [[w, h], ...graph] of newArr) {
      let land = 0;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          if (graph[y][x] === 0) continue;

          land++;

          const queue = [[x, y]];

          while (queue.length > 0) {
            const [x, y] = queue.shift();

            if (x >= 0 && x < w && y >= 0 && y < h && graph[y][x] === 1) {
              graph[y][x] = 0;
              for (let k = 0; k < 8; k++) {
                const nx = x + dx[k];
                const ny = y + dy[k];

                queue.push([nx, ny]);
              }
            }
          }
        }
      }
      answer.push(land);
    }

    console.log(answer.join('\n'));
  });
