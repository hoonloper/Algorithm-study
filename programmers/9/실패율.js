function solution(N, stages) {
  let result = [];
  let people = stages.length;

  for (let i = 1; i < N + 1; i++) {
    const failStage = stages.filter((fs) => fs === i).length;
    result.push([i, failStage / people]);
    people -= failStage;
  }

  result = result.sort((a, b) => b[1] - a[1]);

  return result.map((a) => a[0]);
}
