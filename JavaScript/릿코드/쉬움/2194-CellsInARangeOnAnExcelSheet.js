/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  const alphas = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const [[sAlpha, sIdx], [eAlpha, eIdx]] = s
    .split(':')
    .map((el) => el.split(''));
  const answer = [];

  for (let i = alphas.indexOf(sAlpha); i <= alphas.indexOf(eAlpha); i++) {
    for (let j = +sIdx; j <= +eIdx; j++) {
      answer.push(alphas[i] + j);
    }
  }

  return answer;
};
