function solution(wallpaper) {
  const arr = Array.from({ length: 4 }, () => -1);

  for (let i = 0; i < wallpaper.length; i++) {
    const r = wallpaper[i];
    const x = r.indexOf('#');

    if (x === -1) continue;

    // 드래그 시작하는 지점
    if (arr[0] === -1) arr[0] = i;
    if (arr[1] === -1 || arr[1] > x) arr[1] = x;

    // 드래그 끝나는 지점, .lastIndexOf()를 사용한 이유는 #이 동일선상에 겹칠 수 있기 때문
    const lastX = r.lastIndexOf('#') + 1;
    arr[2] = i + 1;
    if (arr[3] === -1 || arr[3] < lastX) arr[3] = lastX;
  }

  return arr;
}

// 첫번째로 푼 풀이
// function solution(wallpaper) {
//   const xy = [];
//   for (let i = 0; i < wallpaper.length; i++) {
//     const a = wallpaper.findIndex('#')

//     for (let j = 0; j < wallpaper[i].length; j++) {
//       if (wallpaper[i][j] === '#') {
//         xy.push([i, j]);
//       }
//     }
//   }
//   const x = xy.map(([x, y]) => x);
//   const y = xy.map(([x, y]) => y);
//   return [
//     Math.min(...x),
//     Math.min(...y),
//     Math.max(...x) + 1,
//     Math.max(...y) + 1,
//   ];
// }
