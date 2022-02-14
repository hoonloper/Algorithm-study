function solution(answers) {
  const mathHater1 = [1, 2, 3, 4, 5];
  const mathHater2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const mathHater3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const ranks = [];
  const scores = [0, 0, 0];

  for (let a in answers) {
    if (mathHater1[a % mathHater1.length] === answers[a]) scores[0] += 1;
    if (mathHater2[a % mathHater2.length] === answers[a]) scores[1] += 1;
    if (mathHater3[a % mathHater3.length] === answers[a]) scores[2] += 1;
  }

  for (let s in scores) {
    if (scores[s] === Math.max(...scores)) ranks.push(Number(s) + 1);
  }

  return ranks;
}
