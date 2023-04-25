function solution(s) {
  return JSON.parse(s.replace(/\{/g, '[').replace(/\}/g, ']'))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur) => {
      for (let i = 0; i < cur.length; i++) {
        if (!acc.includes(cur[i])) {
          acc.push(cur[i]);
          break;
        }
      }
      return acc;
    }, []);
}
