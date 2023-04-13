function solution(expression) {
  const arr = [];
  let str = '';
  const p = [];
  for (let i = 0; i < expression.length; i++) {
    if (isNaN(+expression[i])) {
      arr.push(str, expression[i]);
      str = '';
    } else {
      str += expression[i];
    }
  }
  arr.push(str);

  function dfs(op, arr, visited) {
    if (arr.length === 3) {
      p.push(arr);
    }
    for (let i = 0; i < op.length; i++) {
      if (visited[i]) continue;
      const temp = [...arr, op[i]];
      visited[i] = 1;
      dfs(op, temp, visited);
      visited[i] = 0;
    }
  }

  dfs(['-', '*', '+'], [], [0, 0, 0]);

  let max = 0;

  for (let i = 0; i < p.length; i++) {
    let temp = [...arr];
    for (let j = 0; j < p[i].length; j++) {
      let idx = 0;

      while (true) {
        idx = temp.indexOf(p[i][j]);
        if (idx === -1) break;

        let sum = 0;
        switch (p[i][j]) {
          case '+':
            sum = +temp[idx - 1] + +temp[idx + 1];
            break;
          case '-':
            sum = +temp[idx - 1] - +temp[idx + 1];
            break;
          case '*':
            sum = +temp[idx - 1] * +temp[idx + 1];
            break;
        }

        temp.splice(idx - 1, 3, sum);
      }
    }

    max = Math.max(max, Math.abs(temp));
  }
  return max;
}
