const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [N, ...inputs] = input;
    const newInput = [];
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const answer = [];
    let count = -1;

    for (const i of inputs) {
      const x = i.split(' ').map(Number);
      if (x.length === 3) {
        ++count;
        newInput.push([]);
      }
      newInput[count].push(x);
    }

    for (let i = 0; i < newInput.length; i++) {
      const countArr = [];
      const [[X, Y, K], ...arr] = newInput[i];
      const board = Array.from({ length: Y + 1 }, () => Array(X + 1).fill(0));

      for (const [n, m] of arr) {
        board[m][n] = 1;
      }

      const DFS = (x, y) => {
        board[y][x] = 0;

        for (let q = 0; q < 4; q++) {
          const nx = x + dx[q];
          const ny = y + dy[q];
          if (nx >= 0 && nx < X && ny >= 0 && ny < Y && board[ny][nx] === 1) {
            DFS(nx, ny);
          }
        }
      };

      for (let y = 0; y < Y; y++) {
        for (let x = 0; x < X; x++) {
          if (board[y][x] === 0) continue;
          DFS(x, y);
          countArr.push(1);
        }
      }

      answer.push(countArr.length);

      for (let y = 0; y < Y; y++) {
        for (let x = 0; x < X; x++) {
          if (board[y][x] === 0) continue;
          const queue = [[y, x]];
          board[y][x] = 0;

          while (queue.length > 0) {
            const [queueY, queueX] = queue.shift();

            for (let z = 0; z < 4; z++) {
              const nx = queueX + dx[z];
              const ny = queueY + dy[z];

              if (
                nx >= 0 &&
                nx < X &&
                ny >= 0 &&
                ny < Y &&
                board[ny][nx] === 1
              ) {
                board[ny][nx] = 0;
                queue.push([ny, nx]);
              }
            }
          }
          countArr.push(1);
        }
      }
      answer.push(countArr.length);
    }

    console.log(answer.join('\n'));
  });
