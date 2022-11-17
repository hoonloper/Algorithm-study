// Sliding Window
const solution = (k, arr) => {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i];

  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
};

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const k = 3;

console.log(solution(k, arr));

// 처음 해답
// const solution = (arr) => {
//   let max = 0;

//   for (let idx = 0; idx < arr.length - 2; idx++) {
//     const x = arr[idx] + arr[idx + 1] + arr[idx + 2];
//     if (max < x) max = x;
//   }

//   return max;
// };

// const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

// console.log(solution(arr));
