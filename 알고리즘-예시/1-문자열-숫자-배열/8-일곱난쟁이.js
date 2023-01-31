function solution(arr) {
  const maxHeight = arr.reduce((acc, height) => acc + height, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (maxHeight - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return arr;
}

solution([20, 7, 23, 19, 10, 15, 25, 8, 13]);
