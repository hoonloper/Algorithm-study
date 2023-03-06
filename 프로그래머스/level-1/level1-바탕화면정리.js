function solution(wallpaper) {
  wallpaper = wallpaper.map((el) => el.split(''));
  const xy = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        xy.push([i, j]);
      }
    }
  }
  const x = xy.map(([x, y]) => x);
  const y = xy.map(([x, y]) => y);
  return [
    Math.min(...x),
    Math.min(...y),
    Math.max(...x) + 1,
    Math.max(...y) + 1,
  ];
}
