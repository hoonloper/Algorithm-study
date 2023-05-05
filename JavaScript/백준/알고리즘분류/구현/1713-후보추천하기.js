const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

readline
  .on('line', (line) => input.push(line))
  .on('close', () => {
    const n = +input.shift();
    const total = +input.shift();
    const arr = input
      .shift()
      .split(' ')
      .map((el) => [+el, 1]);
    const photo = [];
    arr.forEach((el) => {
      if (photo.length < n) {
        const idx = photo.findIndex((p) => p[0] === el[0]);
        if (idx !== -1) {
          photo[idx][1] += 1;
        } else {
          photo.push(el);
        }
      } else {
        const idx = photo.findIndex((p) => p[0] === el[0]);
        if (idx !== -1) {
          photo[idx][1] += 1;
        } else {
          if (photo.filter((el) => el[1] === photo[0][1]).length === n) {
            photo.shift();
            photo.push(el);
          } else {
            for (let j = 0; j < photo.length; j++) {
              if (photo[j][1] <= el[1]) {
                if (photo.map((p) => p[0] === el[0]).includes(true)) {
                  continue;
                }

                photo.splice(j, 1);
                photo.push(el);
                break;
              }
            }
          }
        }
      }
    });
    console.log(
      photo
        .sort((a, b) => a[0] - b[0])
        .map((el) => el[0])
        .join(' ')
    );
  });
