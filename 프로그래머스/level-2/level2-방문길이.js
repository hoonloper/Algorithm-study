const solution = (dirs) => {
  const set = new Set();
  const [min, max] = [-5, 5];
  let curX = 0;
  let curY = 0;
  let prev = '';

  for (let i = 0; i < dirs.length; i++) {
    prev = '' + curX + curY;
    if (dirs[i] === 'U' && curY + 1 <= max) {
      curY++;
    } else if (dirs[i] === 'D' && curY - 1 >= min) {
      curY--;
    } else if (dirs[i] === 'R' && curX + 1 <= max) {
      curX++;
    } else if (dirs[i] === 'L' && curX - 1 >= min) {
      curX--;
    } else {
      continue;
    }

    set.add(curX + (curY + prev));
    set.add(prev + curX + curY);
  }

  return set.size / 2;
};
