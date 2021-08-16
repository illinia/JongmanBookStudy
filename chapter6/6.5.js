// #이 채워진 칸 .이 빈칸
let input = [
  '3',
  '3 7',
  '#.....#',
  '#.....#',
  '##..###'
];

// y, x 사이즈
let size = input[1].split(' ').map(value => Number(value));
// 보드판을 0, 1로 채운다. 0은 # 1은 .
let board = [];
for (let i = 0; i < size[0]; i++) {
  board.push(input[i + 2].split('').map(value => value === '#' ? value = 1 : value = 0));
}

// 조각이 채울 수 있는 방법 종류 4가지(회전)
const coverType = [
  [[0, 0], [1, 0], [0, 1]],
  [[0, 0], [0, 1], [1, 1]],
  [[0, 0], [1, 0], [1, 1]],
  [[0, 0], [1, 0], [1, -1]]
];


const set = (y, x, type, delta) => {
  let ok = true;
  for (let i = 0; i < 3; i++) {
    const ny = y + coverType[type][i][0];
    const nx = x + coverType[type][i][1];
    if (ny < 0 || ny >= board.length || nx < 0 || nx >= board[0].length) {
      ok = false;
    } else if ((board[ny][nx] += delta) > 1) {
      ok = false;
    }
  }
  return ok;
};

// 좌표 초기화는 음수
const cover = () => {
  let y = -1, x = -1;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 칸이 비워있으면
      if (board[i][j] == 0) {
        y = i;
        x = j;
        break;
      }
    }
    // 칸이 선택이 되었으면
    if (y != -1) break;
  }

  // 모든 칸이 다 채워져있으면
  if (y == -1) return 1;
  // 리턴할 값
  let ret = 0;
  // 타입들을 선택하는 반복문
  for (let type = 0; type < 4; type++) {
    // 해당 좌표에 4가지 타입중 하나가 가능하면
    // 조건문 판별시 이미 보드가 수정이 된 상태
    if (set(y, x, type, 1)) {
      // 재귀 호출하여 다른 좌표를 찾아 칸을 채워넣는다
      ret += cover();
    }
    // 이미 채워져 있던 칸을 채울시 숫자가 2가 되어 -1을 해줘야하는데
    // delta값을 -1 로 넣으면 해당 칸이 -1됨
    set(y, x, type, -1);
  }
  return ret;
}

console.log(cover())