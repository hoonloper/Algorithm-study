function solution(board, moves) {
  const basket = [];
  let comp = 0;
  let result = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        if (comp === board[j][moves[i] - 1]) {
          result += 2;

          if (basket.length > 0) {
            basket.pop();
            comp = basket[basket.length - 1];
          } else {
            comp = 0;
          }
        } else {
          basket.push(board[j][moves[i] - 1]);
          comp = board[j][moves[i] - 1];
        }

        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  return result;
}
