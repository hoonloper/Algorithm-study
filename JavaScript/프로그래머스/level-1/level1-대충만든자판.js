function solution(keymap, targets) {
  return targets.map((target) => {
    let sum = 0;
    for (const t of target) {
      sum +=
        Math.min(
          ...keymap.map((key) => key.indexOf(t)).filter((el) => el >= 0)
        ) + 1;
    }
    return sum !== Infinity ? sum : -1;
  });
}
