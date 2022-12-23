const solution = (arr) => {
  const answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = 0;

    for (j = i - 1; j >= 0; j--) {
      if (arr[j] > temp) arr[j + 1] = arr[j];
      else break;
    }

    arr[j + 1] = temp;
  }

  return answer;
};

console.log(solution([11, 7, 5, 6, 10, 9]));
