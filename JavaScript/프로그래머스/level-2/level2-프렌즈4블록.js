const solution = (m, n, board) => {
  board = board.map((b) => b.split(''));
  let count = 0;
  while (true) {
    const checked = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (
          board[i][j] &&
          board[i][j] === board[i - 1][j - 1] &&
          board[i][j] === board[i][j - 1] &&
          board[i][j] === board[i - 1][j]
        ) {
          checked[i][j] = 1;
          checked[i][j - 1] = 1;
          checked[i - 1][j] = 1;
          checked[i - 1][j - 1] = 1;
        }
      }
    }
    let flag = true;
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (checked[i][j]) {
          count++;
          board[i][j] = null;
          flag = false;
        }
      }
    }
    for (let z = 0; z < 30; z++) {
      for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (board[i - 1][j] && !board[i][j]) {
            board[i][j] = board[i - 1][j];
            board[i - 1][j] = null;
          }
        }
      }
    }
    if (flag) {
      break;
    }
  }
  return count;
};
