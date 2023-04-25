function solution(fees, records) {
  const cars = {};
  const carTimes = {};
  records = records.map((record) => {
    const [t, number, state] = record.split(' ');
    const [h, m] = t.split(':');
    const totalTime = +h * 60 + +m;
    return [number, totalTime, state];
  });
  records.forEach(([num, time, state]) => {
    if (!cars[num] || cars[num][1] === 'OUT') {
      cars[num] = [time, state];
      return;
    }
    if (state === 'OUT' && cars[num][1] === 'IN') {
      cars[num][1] = 'OUT';
      if (carTimes[num]) {
        carTimes[num] += time - cars[num][0];
      } else {
        carTimes[num] = time - cars[num][0];
      }
      return;
    }
  });
  Object.keys(cars)
    .filter((num) => cars[num][1] === 'IN')
    .forEach((num) => {
      if (carTimes[num]) {
        carTimes[num] += 1439 - cars[num][0];
      } else {
        carTimes[num] = 1439 - cars[num][0];
      }
    });
  const [basicM, basicP, min, price] = fees;
  const result = Object.entries(carTimes)
    .sort((a, b) => +a[0] - +b[0])
    .map(([num, t]) => {
      if (basicM >= t) {
        return basicP;
      }
      return basicP + Math.ceil((t - basicM) / min) * price;
    });

  return result;
}
