const solution = (n, k) => {
  const queue = Array.from({ length: n }, (v, i) => i + 1);

  while (queue.length > 1) {
    for (let i = 1; i < k; i++) {
      queue.push(queue.shift());
    }

    queue.shift();
  }

  return queue[0];
};

console.log(solution(8, 3));
