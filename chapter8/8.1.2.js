// 게임판 왼쪽위에서 오른쪽 아래칸에 도착하는 방법이 존재하는지
let input = [
  '2 5 1 6 1 4 1',
  '6 1 1 2 2 9 3',
  '7 2 3 2 1 3 1',
  '1 1 3 1 7 1 2',
  '4 1 2 3 4 1 2',
  '3 3 1 2 3 4 1',
  '1 5 2 9 4 7 0',
];
// 게임판 2차원 배열(y, x)
let board = input.map(value => value.split(' ').map(number => Number(number)))
// 가로 세로 길이
let n = 7;
let cache = Array.from({ length: 100 }, value => value = Array(100).fill(-1));

const jump = (y, x) => {
  // 기저 사례: 게임판 밖을 벗어난 경우
  if (y >= n || x >= n) return 0;
  // 기저 사례: 마지막 칸에 도착한 경우
  if (y === n - 1 && x === n - 1) return 1;
  // 배열 값을 참조하는 변수
  let ret = cache[y][x];
  // 이미 계산 되있다면 반환
  if (ret !== -1) return ret;
  let jumpSize = board[y][x];
  // 아래쪽, 오른쪽 둘 중 하나로 가서 하나라도 참이면 성공
  return jump(y + jumpSize, x) || jump(y, x + jumpSize);
};

console.log(jump(0, 0))