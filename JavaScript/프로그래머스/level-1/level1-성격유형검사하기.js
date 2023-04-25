function solution(survey, choices) {
  const MBTI = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  survey.forEach(([firstMBTI, secondMBTI], index) => {
    const score = choices[index];
    MBTI[score < 4 ? firstMBTI : secondMBTI] += Math.abs(4 - score);
  });

  const newArr = Object.entries(MBTI);
  let answer = '';
  for (let i = 1; i < newArr.length; i += 2) {
    const [aName, aCount] = newArr[i - 1];
    const [bName, bCount] = newArr[i];

    answer += aCount < bCount ? bName : aName;
  }
  return answer;
}
