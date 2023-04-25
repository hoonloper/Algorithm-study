function solution(want, number, discount) {
  let day = 0;
  const found = want.filter((el) => discount.includes(el));
  if (!found.length) {
    return 0;
  }

  const obj = want.reduce((acc, cur, i) => {
    acc[cur] = number[i];
    return acc;
  }, {});
  let count = 0;

  while (true) {
    const disObj = {};
    for (let i = day; i < 10 + day; i++) {
      const disKey = discount[i];
      if (disObj[disKey]) {
        disObj[disKey] += 1;
      } else {
        disObj[disKey] = 1;
      }

      if (obj[disKey] && disObj[disKey] > obj[disKey]) {
        disObj[disKey] -= 1;
        break;
      }
    }

    const flag = want.reduce((acc, el) => acc && obj[el] === disObj[el], true);
    if (flag) {
      count++;
    }
    day++;

    if (discount.length - 10 < day) {
      break;
    }
  }
  return count;
}
