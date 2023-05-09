function solution(info, query) {
  var answer = [];
  let map = {};

  function combination(infos, score, map, start) {
    const key = infos.join('');

    if (map[key]) {
      map[key].push(score);
    } else {
      map[key] = [score];
    }

    for (let i = start; i < infos.length; i++) {
      const combiArr = [...infos];
      combiArr[i] = '-';

      combination(combiArr, score, map, i + 1);
    }
  }

  function binarySearch(map2, key2, score2) {
    const scoreArr = map2[key2];

    if (scoreArr) {
      let start = 0;
      let end = scoreArr.length;

      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (scoreArr[mid] >= score2) {
          end = mid;
        } else if (scoreArr[mid] < score2) {
          start = mid + 1;
        }
      }

      return scoreArr.length - start;
    } else {
      return 0;
    }
  }

  for (let i = 0; i < info.length; i++) {
    const infos = info[i].split(' ');
    const score = infos.pop();

    combination(infos, score, map, 0);
  }

  for (const key in map) {
    map[key].sort((o1, o2) => o1 - o2);
  }

  for (let i = 0; i < query.length; i++) {
    const querys = query[i].replace(/ and /g, '').split(' ');
    const score = Number(querys.pop());

    answer.push(binarySearch(map, querys.join(''), score));
  }

  return answer;
}
