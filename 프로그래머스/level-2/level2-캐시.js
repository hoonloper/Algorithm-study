function solution(cacheSize, cities) {
  const queue = [];
  let sum = 0;

  cities.forEach((x) => {
    let pos = -1;

    // HIT
    for (let i = 0; i < cacheSize; i++) {
      if (x.toLowerCase() === queue[i]?.toLowerCase()) {
        pos = i;
        sum += 1;
      }
    }

    if (pos === -1) {
      queue.unshift(x);
      sum += 5;
      if (queue.length > cacheSize) queue.pop();
    } else {
      queue.splice(pos, 1);
      queue.unshift(x);
    }
  });

  return sum;
}
