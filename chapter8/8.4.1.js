// 삼각형 위의 최대 경로
// 총 줄의 수 5
let input = [
  '5',
  '6',
  '1 2',
  '3 7 4',
  '9 4 1 7',
  '2 7 5 9 4',
];

let n = +input[0];
// 삼각형 숫자들을 배열에 넣음
let triangle = input.slice(1).map(value => value.split(' ').map(number => +number))
// 전체 경로의 최대 합을 반환하는 경우 합 최대 범위가 너무 커진다.
let cache = Array.from({ length: 10 }, value => value = Array(10).fill(-1));

const path = (y, x) => {
  // 끝 줄에 도착할 경우 해당 값을 반환
  if (y == n - 1) return triangle[y][x];
  // 특정 좌표에서 밑의 값 2개중 최대값을 구하는 재귀 호출
  // 최대값과 특정값을 반환
  // 이렇게 하면 전체 값을 지정할 필요가 없어 메모이제이션 범위가 줄어든다.
  return cache[y][x] = Math.max(path(y + 1, x), path(y + 1, x + 1)) + triangle[y][x];
};

console.log(path(0, 0))