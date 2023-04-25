const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [N, M, R] = input.shift().split(' ').map(Number);
    let board = input.map((el) => el.split(' ').map(Number));
    const newBoard = [...board.map((el) => el.slice())];
    for (let i = 0; i < R; i++) {
      board = [...newBoard.map((el) => el.slice())];
      const min = Math.min(N, M);

      for (let limit = 0; limit < Math.floor(min / 2); limit++) {
        for (let j = M - 2 - limit; j >= 0 + limit; j--) {
          newBoard[0 + limit][j] = board[0 + limit][j + 1];
        }
        for (let j = 1 + limit; j < N - limit; j++) {
          newBoard[j][0 + limit] = board[j - 1][0 + limit];
        }
        for (let j = 1 + limit; j < M - limit; j++) {
          newBoard[N - 1 - limit][j] = board[N - 1 - limit][j - 1];
        }
        for (let j = N - 2 - limit; j >= 0 + limit; j--) {
          newBoard[j][M - 1 - limit] = board[j + 1][M - 1 - limit];
        }
      }
    }
    const result = newBoard.reduce((acc, cur) => {
      return acc + cur.join(' ') + '\n';
    }, '');
    console.log(result);
  });
