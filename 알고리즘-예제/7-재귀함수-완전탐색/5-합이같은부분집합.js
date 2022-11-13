const solution = (arr) => {
  const total = arr.reduce((acc, el) => acc + el, 0);
  const len = arr.length;
  let answer = 'NO';
  let flag = 0;
  const DFS = (level, sum) => {
    if (flag) return;
    if (level === len) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
      return;
    } else {
      DFS(level + 1, sum + arr[level]);
      DFS(level + 1, sum);
    }
  };
  DFS(0, 0);
  return answer;
};

console.log(solution([1, 3, 5, 6, 7, 10]));
