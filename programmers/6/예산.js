function solution(d, budget) {
  let departmentCount = 0;
  const dBudget = d.sort((a, b) => a - b);

  for (let department of dBudget) {
    budget = budget - department;

    if (budget >= 0) {
      departmentCount += 1;
    }
  }
  return departmentCount;
}
