function solution(dartResult) {
  const dart = dartResult.match(/\d{1,2}[SDT]{1}[*|#]?/g);
  const answer = [];

  for (let i = 0; i < 3; i++) {
    const bonus = String(dart[i].match(/[SDT]{1}/g));
    const opt = String(dart[i].match(/[*|#]/g));
    let score = Number(dart[i].match(/\d{1,2}/g));

    if (bonus === "D") {
      score **= 2;
    } else if (bonus === "T") {
      score **= 3;
    }

    if (opt === "*") {
      score *= 2;

      if (i != 0) {
        answer[i - 1] *= 2;
      }
    } else if (opt === "#") {
      score *= -1;
    }

    answer.push(score);
  }

  return answer.reduce((a, b) => a + b, 0);
}
