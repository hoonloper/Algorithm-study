function solution(n) {
  let answer = 0;
  const board = Array.from({ length: n }, () => 0);
  const check = (x) => {
    for (let i = 0; i < x; i++) {
      if (
        board[i] === board[x] ||
        Math.abs(i - x) === Math.abs(board[i] - board[x])
      )
        return false;
    }
    return true;
  };
  const dfs = (l) => {
    if (l === n) {
      answer++;
      return;
    }
    for (let i = 0; i < n; i++) {
      board[l] = i;
      if (check(l)) {
        dfs(l + 1);
      }
    }
  };

  dfs(0);

  return answer;
}

//     let answer = 0;

//     const check = (x, y) => x >= 0 && x < n && y >= 0 && y < n;
//     const checkRange = (x, y, checked) => {
//         // 가로, 세로, 대각선 체크
//         for(let z = 0; z < n; z++) {
//             checked[x][z] = true;
//             checked[z][y] = true;
//             if(check(x - z, y - z)) {
//                 checked[x - z][y - z] = true;
//             }
//             if(check(x + z, y + z)) {
//                 checked[x + z][y + z] = true;
//             }
//             if(check(x + z, y - z)) {
//                 checked[x + z][y - z] = true;
//             }
//             if(check(x - z, y + z)) {
//                 checked[x - z][y + z] = true;
//             }
//         }
//     }
//     for(let i = 0; i < n; i++) {
//         const board = Array.from({ length: n }, () => Array(n).fill(0));
//         const checked = Array.from({ length: n}, () => Array(n).fill(false));

//         board[0][i] = 1;
//         checked[0][i] = true;
//         checkRange(0, i, checked)
//         for(let x = 0; x < n; x++) {
//             for(let y = 0; y < n; y++) {
//                 if(checked[x][y] || board[x][y]) {
//                     continue;
//                 }
//                 board[x][y] = 1;
//                 checked[x][y] = true
//                 checkRange(x, y, checked);
//             }
//         }
//         const count = board.reduce((acc, cur) => {
//             return acc + cur.filter(el => el).length
//         }, 0)
//         if(count === n) {
//             answer++;
//         }
//     }
//     return answer
