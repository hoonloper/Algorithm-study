function check(bingoO, bingoX, cntO, cntX) {
  if (cntO < cntX || cntO >= cntX + 2) return 0;
  if (bingoO !== 0 && bingoX !== 0) return 0;
  if (bingoO + bingoX > 2) return 0;
  if (bingoO !== 0 && cntO === cntX) return 0;
  if (bingoX !== 0 && cntO > cntX) return 0;

  return 1;
}

function solution(board) {
  let bingoO = 0;
  let bingoX = 0;
  let cntO = 0;
  let cntX = 0;

  for (let row = 0; row < 3; row++) {
    if (
      board[row][0] === board[row][1] &&
      board[row][1] === board[row][2] &&
      board[row][0] !== '.'
    ) {
      if (board[row][0] === 'O') bingoO++;
      else bingoX++;
    }
    if (
      board[0][row] === board[1][row] &&
      board[1][row] === board[2][row] &&
      board[0][row] !== '.'
    ) {
      if (board[0][row] === 'O') bingoO++;
      else bingoX++;
    }
    for (let col = 0; col < 3; col++) {
      const value = board[row][col];

      if (value === 'O') cntO++;
      if (value === 'X') cntX++;
    }
  }

  if (board[1][1] === 'O') {
    if (board[0][0] === board[1][1] && board[2][2] === board[1][1]) bingoO++;
    if (board[0][2] === board[1][1] && board[2][0] === board[1][1]) bingoO++;
  } else if (board[1][1] === 'X') {
    if (board[0][0] === board[1][1] && board[2][2] === board[1][1]) bingoX++;
    if (board[0][2] === board[1][1] && board[2][0] === board[1][1]) bingoX++;
  }

  return check(bingoO, bingoX, cntO, cntX);
}
