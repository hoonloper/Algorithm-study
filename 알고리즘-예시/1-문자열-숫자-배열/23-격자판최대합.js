function solution(num, arr) {
  const answer = [];
  let right = 0;
  let left = 0;

  for (let i = 0; i < num; i++) {
    // 열을 더하는 함수
    const sumRow = arr[i].reduce((acc, el) => acc + el, 0);
    answer.push(sumRow);

    // 행을 더하는 함수
    const sumHang = arr.reduce((acc, el, idx) => acc + arr[idx][i], 0);
    answer.push(sumHang);

    // 오른쪽 아래를 향하는 대각선의 합
    right += arr[i][i];

    // 왼쪽 아래를 향하는 대각선의 합
    left += arr[num - 1 - i][i];
  }
  answer.push(right, left);

  return Math.max(...answer);
}

const number = 5;
const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
solution(number, arr);
