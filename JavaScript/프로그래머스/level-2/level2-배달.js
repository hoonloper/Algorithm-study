function solution(N, road, K) {
  const dist = Array.from({ length: N + 1 }, () => Number.MAX_SAFE_INTEGER);
  const arr = Array.from({ length: N + 1 }, () => []);

  road.forEach(([a, b, c]) => {
    arr[a].push({ node: b, x: c });
    arr[b].push({ node: a, x: c });
  });

  const queue = [1];
  dist[1] = 0;

  while (queue.length) {
    const n = queue.shift();
    arr[n].forEach((el) => {
      const nextNode = el.node;
      if (dist[nextNode] > dist[n] + el.x) {
        dist[nextNode] = dist[n] + el.x;
        queue.push(nextNode);
        queue.sort((a, b) => dist[a.node] - dist[b.node]);
      }
    });
  }

  return dist.filter((d) => d <= K).length;
}
