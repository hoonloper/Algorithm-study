function solution(arr) {
  const fil = [];

  arr.map((e, i) => {
    if (arr[i] === arr[i - 1]) {
      fil.push(arr[i]);
      if (fil[fil.length - 2] === fil[fil.length - 1]) {
        fil.pop();
      }
    } else {
      fil.push(arr[i]);
    }
  });

  return fil;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
