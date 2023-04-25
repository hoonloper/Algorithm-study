function solution(plans) {
  const done = [];
  const hash = {};
  const stack = [];
  plans = plans
    .map(([x, time, num]) => {
      time = time.split(':').map(Number);
      const currunt = time[0] * 60 + time[1];
      hash[currunt] = [num, x];
      return [x, currunt, +num];
    })
    .sort((a, b) => a[1] - b[1]);
  let time = plans[0][1];
  while (done.length < plans.length) {
    if (stack.length) {
      stack[stack.length - 1][0]--;
      if (stack[stack.length - 1][0] === 0) {
        done.push(stack[stack.length - 1][1]);
        stack.pop();
      }
    }

    if (hash[time]) {
      stack.push(hash[time]);
    }
    time++;
  }
  return done;
}
