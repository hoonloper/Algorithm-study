function solution(arr) {
  let answer = 0;
  let count = 0;
  while (count < arr.length) {
    count = 0;
    const copy = [...arr];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
        arr[i] = arr[i] / 2;
      } else if (arr[i] < 50 && arr[i] % 2 === 1) {
        arr[i] = arr[i] * 2 + 1;
      }
      if (arr[i] === copy[i]) {
        count++;
      }
    }
    answer++;
  }
  return answer - 1;
}

console.log(solution([1, 2, 3, 100, 99, 98]));
