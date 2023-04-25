function solution(m, musicinfos) {
  const musics = musicinfos.map((m) => {
    const [s, e, title, uhm] = m.split(',');
    const mS = s.split(':').map(Number);
    const mE = e.split(':').map(Number);
    const total = mE[0] * 60 + mE[1] - (mS[0] * 60 + mS[1]);
    let str = '';
    for (let i = 0; i < uhm.length; i++) {
      if (uhm[i + 1] === '#') {
        str += uhm[i].toLowerCase();
        i++;
      } else {
        str += uhm[i];
      }
    }
    return [total, title, str, str.length];
  });

  let fullM = '';
  for (let i = 0; i < m.length; i++) {
    if (m[i + 1] === '#') {
      fullM += m[i].toLowerCase();
      i++;
    } else {
      fullM += m[i];
    }
  }

  let answer = '';
  let maxTime = 0;

  musics.forEach(([time, title, uhm, uhmTime]) => {
    if (time > uhmTime) {
      const x = Math.floor(time / uhmTime) + 1;
      let s = '';
      for (let i = 0; i < x; i++) {
        s += uhm;
      }
      if (s.includes(fullM)) {
        if (maxTime < time) {
          maxTime = time;
          answer = title;
        }
      }
    } else {
      const newUhm = uhm.slice(0, time);
      if (newUhm.includes(fullM)) {
        if (maxTime < time) {
          maxTime = time;
          answer = title;
        }
      }
    }
  });
  return answer ? answer : '(None)';
}
