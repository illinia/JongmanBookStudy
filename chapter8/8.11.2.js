// 삼각형 위의 최대 경로
// 총 줄의 수 5
let input = [
  '4',
  '9',
  '5 7',
  '1 3 2',
  '3 5 5 6',
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

// 삼각형 위의 최대 경로 개수 세기
let countCache = Array.from({ length: 10 }, value => value = Array(10).fill(-1));

const count = (y, x) => {
  // 기저사례
  if (y == n - 1) return 1;
  // 메모이제이션
  if (countCache[y][x] != -1) return countCache[y][x];
  countCache[y][x] = 0;
  // 아래쪽 경로가 크거나, 오른쪽 경로가 크거나, 아님 둘다 같거다를 표현
  if (path(y + 1, x + 1) >= path(y + 1, x)) countCache[y][x] += count(y + 1, x + 1);
  if (path(y + 1, x + 1) <= path(y + 1, x)) countCache[y][x] += count(y + 1, x);
  return countCache[y][x]
};

console.log(count(0, 0))