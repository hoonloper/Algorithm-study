const solution = (arr) => {
  const answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return answer;
};

console.log(solution([13, 5, 11, 7, 23, 15]));
