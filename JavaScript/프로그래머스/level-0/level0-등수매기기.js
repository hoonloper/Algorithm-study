function solution(score) {
  const avg = score.map((el) => (el[0] + el[1]) / 2);
  const sorted = [...avg].sort((a, b) => b - a);

  return avg.map((el) => sorted.indexOf(el) + 1);
}
