const solution = (progresses, speeds) => {
  const answer = [];

  while (progresses.length) {
    progresses = progresses.map((el, i) => el + speeds[i]);
    if (progresses[0] >= 100) {
      const findIndex = progresses.findIndex((el) => el < 100);
      const progressesLength = progresses.length;
      const progress = findIndex >= 0 ? findIndex : progressesLength;
      answer.push(progress);
      progresses = progresses.slice(progress, progressesLength);
      speeds = speeds.slice(progress, progressesLength);
    }
  }
  return answer;
};
