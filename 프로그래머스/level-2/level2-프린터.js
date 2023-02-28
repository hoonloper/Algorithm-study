function solution(priorities, location) {
  let count = 0;
  while (priorities.length) {
    if (priorities[0] < priorities.find((p) => p > priorities[0])) {
      priorities.push(priorities.shift());
      location -= 1;
      if (location < 0) {
        location = priorities.length - 1;
      }
    } else {
      count++;
      priorities.shift();
      if (!location) {
        break;
      }
      location = location - 1;
    }
  }
  return count;
}
