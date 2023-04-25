const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const getScore = (deques) => {
  return (
    deques[0][0] * 1 + deques[1][0] * 2 + deques[2][0] * 4 + deques[3][0] * 8
  );
};

const leftScan = (deques, leftNth, rotateList) => {
  const newRotateList = rotateList;
  if (leftNth < 0 || newRotateList[leftNth + 1] === 0) return;
  if (deques[leftNth][2] !== deques[leftNth + 1][6]) {
    newRotateList[leftNth] = -newRotateList[leftNth + 1];
  } else {
    newRotateList[leftNth] = 0;
  }
  return newRotateList;
};

const rightScan = (deques, rightNth, rotateList) => {
  const newRotateList = rotateList;
  if (rightNth > 3 || newRotateList[rightNth - 1] === 0) return;
  if (deques[rightNth][6] !== deques[rightNth - 1][2]) {
    newRotateList[rightNth] = -newRotateList[rightNth - 1];
  } else {
    newRotateList[rightNth] = 0;
  }
  return newRotateList;
};

const rotate = (deques, rotateList) => {
  const newDeques = deques;
  rotateList.forEach((rotation, idx) => {
    if (rotation === 1) {
      newDeques[idx].unshift(newDeques[idx].pop());
    }
    if (rotation === -1) {
      newDeques[idx].push(newDeques[idx].shift());
    }
  });
  return newDeques;
};

readline
  .on('line', (line) => {
    input.push(line);
  })
  .on('close', () => {
    const gears = input.slice(0, 4).map((el) => el.split(''));
    const N = +input[4];
    const data = input.slice(5).map((el) => el.split(' ').map(Number));
    for (let el of data) {
      const nth = el[0] - 1;
      let leftIdx = nth;
      let rightIdx = nth;
      const rotateArr = [0, 0, 0, 0];
      rotateArr[nth] = el[1];
      while (--leftIdx > -1) {
        leftScan(gears, leftIdx, rotateArr);
      }
      while (++rightIdx < 4) {
        rightScan(gears, rightIdx, rotateArr);
      }

      rotate(gears, rotateArr);
    }
    console.log(getScore(gears));
  });
