function solution() {
  const arr = Array.from({ length: N }, () => 0);

  let max = 0;
  A.forEach((num) => {
    if (num === N + 1) {
      if (max > 0) {
        for (let i = 0; i < N; i++) {
          arr[i] = max;
        }
      }
    } else {
      arr[num - 1] += 1;
      max = Math.max(max, arr[num - 1]);
    }
  });

  return arr;
}
