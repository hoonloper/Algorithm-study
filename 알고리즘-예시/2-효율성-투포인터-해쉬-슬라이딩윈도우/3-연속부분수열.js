// Two Pointers Algorithm 방법
const solution = (arr, m) => {
  let answer = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];

    if (sum === m) answer++;

    while (sum >= m) {
      sum -= arr[lt++];

      if (sum === m) answer++;
    }
  }

  return answer;
};

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));

// 처음 해답
// const solution = (arr) => {
//   let answer = 0;
//   const n = arr.length;

//   arr.forEach((el, idx) => {
//     let num = el;

//     for (let i = idx + 1; i < n; i++) {
//       num = num + arr[i];

//       if (num === 6) answer++;
//       else if (num < 6) continue;
//       else break;
//     }
//   });

//   return answer;
// };

// console.log(solution([1, 2, 1, 3, 1, 1, 1, 2]));
