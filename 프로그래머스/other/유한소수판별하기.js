function solution(a, b) {
  const arr = [];
  for (let i = 2; i <= b; i++) {
    if (b % i === 0) {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      if (cnt === 2) arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}

solution(7, 22);
