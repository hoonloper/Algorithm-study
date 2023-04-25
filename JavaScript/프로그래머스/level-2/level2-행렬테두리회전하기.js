function solution(rows, columns, queries) {
  let board = Array.from({ length: rows }, () => Array(columns).fill(0));
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      count++;
      board[i][j] = count;
    }
  }
  const check = (x, y) => x < rows && x >= 0 && y < columns && y >= 0;
  const answer = [];
  queries.forEach(([r, c, rr, cc]) => {
    [r, c, rr, cc] = [r - 1, c - 1, rr - 1, cc - 1];
    const copyBoard = board.map((el) => el.slice());

    let min = Number.MAX_SAFE_INTEGER;

    for (let i = cc; i > c; i--) {
      if (check(r, i - 1)) {
        copyBoard[r][i] = board[r][i - 1];
        min = Math.min(min, copyBoard[r][i]);
      }
    }

    for (let i = c; i < cc; i++) {
      if (check(rr, i + 1)) {
        copyBoard[rr][i] = board[rr][i + 1];
        min = Math.min(min, copyBoard[rr][i]);
      }
    }

    for (let i = r; i < rr; i++) {
      if (check(i + 1, c)) {
        copyBoard[i][c] = board[i + 1][c];
        min = Math.min(min, copyBoard[i][c]);
      }
    }

    for (let i = rr; i > r; i--) {
      if (check(i - 1, c)) {
        copyBoard[i][cc] = board[i - 1][cc];
        min = Math.min(min, copyBoard[i][cc]);
      }
    }

    answer.push(min);
    board = copyBoard;
  });

  return answer;
}
