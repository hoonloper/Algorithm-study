function solution(n) {
  let x = 0;
  let y = -1;
  let num = 1;
  let index = 0;
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const check = (x, y) => x >= 0 && x < n && y >= 0 && y < n;
  const board = Array.from({ length: n }, () => Array(n).fill(0));
  const checked = Array.from({ length: n }, () => Array(n).fill(0));
  while (num <= n ** 2) {
    const dx = x + moves[index][0];
    const dy = y + moves[index][1];
    if (!check(dx, dy) || checked[dx][dy]) {
      index = index + 1 < 4 ? index + 1 : 0;
      continue;
    }
    x = dx;
    y = dy;
    board[x][y] = num;
    checked[x][y] = true;
    num++;
  }
  return board;
}
console.log(solution(5));
