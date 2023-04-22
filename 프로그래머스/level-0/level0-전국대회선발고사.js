function solution(rank, attendance) {
  const ranks = attendance.reduce((acc, cur, i) => {
    acc.push([rank[i], cur]);
    return acc;
  }, []);
  const len = rank.length;

  const arr = [];
  for (let i = 0; i < len; i++) {
    const index = ranks.findIndex((el) => el[0] === i + 1 && el[1]);
    if (index >= 0) {
      arr.push(index);
    }
    if (arr.length === 3) {
      break;
    }
  }

  return 10000 * arr[0] + 100 * arr[1] + arr[2];
}
