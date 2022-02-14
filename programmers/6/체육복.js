function solution(n, lost, reserve) {
  let gymUniformCount = 0;
  const students = [];

  for (let gymUniform = 0; gymUniform < n; gymUniform++) {
    students.push(1);
  }

  for (let plusGymUniform of reserve) {
    students[plusGymUniform - 1]++;
  }

  for (let lostGymUniform of lost) {
    students[lostGymUniform - 1]--;
  }

  for (let i = 0; i < students.length; i++) {
    if (!students[i]) {
      if (students[i - 1] === 2) {
        students[i - 1]--;
        students[i]++;
      } else if (students[i + 1] === 2) {
        students[i + 1]--;
        students[i]++;
      }
    }

    if (students[i] > 0) gymUniformCount += 1;
  }

  return gymUniformCount;
}
