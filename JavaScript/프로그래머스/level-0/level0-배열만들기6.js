function solution(arr) {
  const stk = [];
  let i = 0;

  while (i < arr.length) {
    const v = arr[i];
    const len = stk.length;
    const command = !len ? 'push' : stk[len - 1] === v ? 'pop' : 'push';
    stk[command](v);
    i++;
  }
  return stk.length > 0 ? stk : [-1];
}
// 리팩토링 전
// function solution(arr) {
//   let i = 0;
//   const stk = [];

//   while (i < arr.length) {
//     if (stk.length === 0) {
//       stk.push(arr[i]);
//       i++;
//       continue;
//     }
//     if (stk.length > 0) {
//       if (stk[stk.length - 1] === arr[i]) {
//         stk.pop();
//         i++;
//       } else {
//         stk.push(arr[i]);
//         i++;
//       }
//     }
//   }
//   return stk.length > 0 ? stk : [-1];
// }
