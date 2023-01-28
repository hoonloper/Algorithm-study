function solution(sizes) {
  const obj = {
    0: 0,
    1: 0,
  };

  for (let i in sizes) {
    sizes[i].sort((a, b) => b - a);
  }

  for (let i in sizes) {
    if (obj[0] < sizes[i][0]) {
      obj[0] = sizes[i][0];
    }

    if (obj[1] < sizes[i][1]) {
      obj[1] = sizes[i][1];
    }
  }

  return obj[0] * obj[1];
}
