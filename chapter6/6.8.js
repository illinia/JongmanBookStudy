let input = [
  '12 9 3 12 6 6 9 3 12 9 12 9 12 12 6 6'
];

let linked = [
  'XXX.............',
  '...X...X.X.X....',
  '....X.....X...XX',
  'X...XXXX........',
  '......XXX.X.X...',
  'X.X...........XX',
  '...X..........XX',
  '....XX.X......XX',
  '.XXXXX..........',
  '...XXX...X...X..',
];

linked = linked.map(value => value.split(''))

const bigNum = 9999;
let SWITCHES = 10
let clocks = input[0].split(' ').map(value => Number(value));

const checkClocks = () => {
  return clocks.every(value => value === 12);
};

const push = (swtch) => {
  for (let clock = 0; clock < clocks.length; clock++) {
    if (linked[swtch][clock] == 'X') {
      clocks[clock] += 3;
      if (clocks[clock] == 15) clocks[clock] = 3;
    }
  }
}

const solve = (swtch) => {
  if (swtch == SWITCHES) return checkClocks() ? 0 : bigNum;
  let ret = bigNum;
  for (let cnt = 0; cnt < 4; cnt++) {
    ret = Math.min(ret, cnt + solve(swtch + 1))
    push(swtch);
  }
  return ret;
}

console.log(solve(0))