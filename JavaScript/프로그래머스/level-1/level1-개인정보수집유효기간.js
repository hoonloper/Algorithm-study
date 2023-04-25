function solution(today, terms, privacies) {
  const [toYear, toMonth, toDay] = today.split('.').map(Number);
  const toTime = toYear * 12 * 28 + toMonth * 28 + toDay;
  const termsObj = terms.reduce((acc, term) => {
    const [type, time] = term.split(' ');
    return { ...acc, [type]: +time };
  }, {});
  const pri = privacies.map((el) => {
    const [time, type] = el.split(' ');
    const t = time.split('.').map(Number);
    return [t, type];
  });
  const answer = [];

  for (let i = 0; i < pri.length; i++) {
    const [[year, month, day], type] = pri[i];
    const time = year * 12 * 28 + month * 28 + day;
    const termTime = termsObj[type] * 28;

    if (toTime >= time + termTime) {
      answer.push(i + 1);
    }
  }

  return answer;
}
