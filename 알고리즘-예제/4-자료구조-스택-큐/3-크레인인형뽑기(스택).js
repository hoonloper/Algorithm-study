const solution = (boards, moves) => {
  const stack = [];
  let answer = 0;

  for (const move of moves) {
    for (const board of boards) {
      if (board[move - 1] !== 0) {
        let tmp = board[move - 1];
        board[move - 1] = 0;

        if (stack[stack.length - 1] === tmp) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);

        break;
      } else {
      }
    }
  }

  return answer;
};

const arr1 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const arr2 = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(arr1, arr2));
