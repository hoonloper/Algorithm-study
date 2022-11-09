function solution(arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach((el, idx) => {
      const left = arr[i][idx - 1] ? arr[i][idx - 1] : 0;
      let top = 0;
      const right = arr[i][idx + 1] ? arr[i][idx + 1] : 0;
      let bot = 0;

      if (i !== arr.length - 1) {
        bot = arr[i + 1][idx] ? arr[i + 1][idx] : 0;
      }

      if (i !== 0) {
        top = arr[i - 1][idx] ? arr[i - 1][idx] : 0;
      }

      if (el > left && el > top && el > right && el > bot) {
        answer++;
      }
    });
  }

  // let answer = 0;
  //   let n = arr.length;
  //   let dx = [-1, 0, 1, 0];
  //   let dy = [0, 1, 0, -1];

  //   for (let i = 0; i < n; i++) {
  //     for (let j = 0; j < n; j++) {
  //       let flag = 1;

  //       for (let k = 0; k < 4; k++) {
  //         const dxi = i + dx[k];
  //         const dyj = j + dy[k];
  //         let nx = dxi >= 0 && dxi < 5 ? dxi : 0;
  //         let ny = dyj >= 0 && dxi < 5 ? dyj : 0;

  //         if (arr[nx][ny] >= arr[i][j]) {
  //           flag = 0;
  //           break;
  //         }
  //       }

  //       if (flag) answer++;
  //     }
  //   }

  return answer;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
solution(arr);
