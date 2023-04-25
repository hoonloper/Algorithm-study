const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const [n, m, k] = input[0].split(' ').map(Number);
    const map = input.slice(1, n + 1).map((el) => el.split(' ').map(Number));
    const t = input.slice(n + 1).map((el) => el.split(' ').map(Number));
    function getPermutations(arr) {
      const result = [];
      function permute(arr, start = 0) {
        if (start === arr.length - 1) {
          result.push([...arr]);
          return;
        }
        for (let i = start; i < arr.length; i++) {
          [arr[start], arr[i]] = [arr[i], arr[start]];
          permute(arr, start + 1);
          [arr[start], arr[i]] = [arr[i], arr[start]]; // 원래 상태로 되돌리기
        }
      }
      permute(arr);
      return result;
    }
    const cals = getPermutations(t);
    const min = cals.reduce((acc, cal) => {
      let originMap = map.map((el) => el.slice());
      cal.forEach(([r, c, s]) => {
        const copyMap = originMap.map((el) => el.slice());
        for (let x = 0; x < s; x++) {
          const minRow = r - s - 1 + x;
          const minCol = c - s - 1 + x;
          const maxRow = r + s - 1 - x;
          const maxCol = c + s - 1 - x;
          // 맨 아래 왼쪽으로
          for (let i = minCol; i < maxCol; i++) {
            copyMap[maxRow][i] = originMap[maxRow][i + 1];
          }
          // 맨 위 오른족으로
          for (let i = maxCol; i > minCol; i--) {
            copyMap[minRow][i] = originMap[minRow][i - 1];
          }
          // 왼쪽 위로
          for (let i = maxRow; i > minRow; i--) {
            copyMap[i - 1][minCol] = originMap[i][minCol];
          }
          // 오른쪽 아래로
          for (let i = minRow; i < maxRow; i++) {
            copyMap[i + 1][maxCol] = originMap[i][maxCol];
          }
          originMap = copyMap;
        }
        for (let i = 0; i < n; i++) {
          const sum = originMap[i].reduce((acc, el) => acc + el, 0);
          acc = Math.min(sum, acc);
        }
      });
      return acc;
    }, Number.MAX_SAFE_INTEGER);
    console.log(min);
  });
// 이게 정답 왜 틀렸는지 모르겠음...
// const [n, m, k] = input[0].split(" ").map(Number);
// let board = null;

// const rotations = input
//   .slice(n + 1, n + k + 1)
//   .map((input) => input.split(" ").map(Number));

// const rotateBoard = (r, c, s) => {
//   const n = s * 2 + 1;
//   const [startRow, startCol] = [r - s - 1, c - s - 1];

//   const newBoard = Array.from({ length: n }, () => Array(n).fill(0));
//   newBoard[s][s] = board[startRow + s][startCol + s];

//   for (let i = 0; i < s; i++) {
//     let row = i;
//     let col = i;

//     for (let j = 0; j < 4; j++) {
//       while (row === i && col >= i && col < n - 1 - i) {
//         newBoard[row][col + 1] = board[startRow + row][startCol + col];
//         col++;
//       }

//       while (row >= i && row < n - 1 - i && col === n - 1 - i) {
//         newBoard[row + 1][col] = board[startRow + row][startCol + col];
//         row++;
//       }

//       while (row === n - 1 - i && col > i && col <= n - 1 - i) {
//         newBoard[row][col - 1] = board[startRow + row][startCol + col];
//         col--;
//       }

//       while (row > i && row <= n - 1 - i && col === i) {
//         newBoard[row - 1][col] = board[startRow + row][startCol + col];
//         row--;
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       board[startRow + i][startCol + j] = newBoard[i][j];
//     }
//   }
// };

// let answer = Number.MAX_SAFE_INTEGER;

// const checked = Array(k).fill(false);
// const getPermutation = (orders) => {
//   if (orders.length === k) {
//     board = input.slice(1, n + 1).map((input) => input.split(" ").map(Number));

//     orders.forEach((order) => {
//       rotateBoard(...rotations[order]);
//     });

//     board.forEach((row) => {
//       const rowSum = row.reduce((acc, cur) => acc + cur, 0);
//       answer = Math.min(rowSum, answer);
//     });
//     return;
//   }

//   for (let i = 0; i < k; i++) {
//     if (checked[i]) continue;
//     checked[i] = true;
//     getPermutation([...orders, i]);
//     checked[i] = false;
//   }
// };
// getPermutation([]);
// console.log(answer);
