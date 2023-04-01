function solution(n) {
  const arr = Array.from({ length: n }, () => Array(n).fill(0));
  const moves = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  let row = -1;
  let col = 0;
  let index = 0;
  let value = 1;
  for (let i = n; i > 0; i--) {
    const [dx, dy] = moves[index];
    for (let j = 0; j < i; j++) {
      row += dx;
      col += dy;
      arr[row][col] = value;
      value++;
    }
    index = (index + 1) % 3;
  }

  // const answer = [];
  // for(let i = 0; i < n; i++) {
  //     for(let j = 0; j < n; j++) {
  //         if(arr[i][j]) answer.push(arr[i][j])
  //     }
  // }
  // return answer;
  return arr.reduce((acc, cur) => {
    acc.push(...cur.filter((el) => el));
    return acc;
  }, []);
}
