function solution(storey) {
  let count = 0;
  storey = String(storey).split('').map(Number);

  for (let i = storey.length - 1; 1 <= i; i--) {
    if (storey[i] === 5) {
      count += 5;
      if (storey[i - 1] >= 5) {
        storey[i - 1]++;
      }
    } else if (storey[i] === 10) {
      storey[i] = 0;
      storey[i - 1]++;
    } else if (storey[i] > 5) {
      count += 10 - storey[i];
      storey[i - 1]++;
    } else {
      count += storey[i];
    }
  }
  count += Math.min(storey[0], 11 - storey[0]);
  return count;
}
