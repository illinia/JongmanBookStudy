let input = [
  // '5 2 0',
  // '0 1 1 1 0',
  // '1 0 0 0 1',
  // '1 0 0 0 0',
  // '1 0 0 0 0',
  // '0 1 0 0 0',
  // '3',
  // '0 2 4',
  '8 2 3',
  '0 1 1 1 0 0 0 0',
  '1 0 0 1 0 0 0 0',
  '1 0 0 1 0 0 0 0',
  '1 1 1 0 1 1 0 0',
  '0 0 0 1 0 0 1 1',
  '0 0 0 1 0 0 0 1',
  '0 0 0 0 1 0 0 0',
  '0 0 0 0 1 1 0 0',
  '4',
  '3 1 2 6',
];
// 총 마을의 수, 지금까지 지난 일수(마지막 일수), 최초 시작지점
let [n, d, p] = input[0].split(' ').map(value => +value);

const cache = Array.from({ length: 51 }, value => value = Array(101).fill(-1));
// 마을끼리 연결되어있는 정보 배열
const connected = [];
for (let i = 1; i <= n; i++) {
  connected.push(input[i].split(' ').map(value => +value))
}
// 한 마을에서 다른 마을로 갈 수 있는 경우의 수 배열
const deg = [];
for (value of connected) {
  deg.push(value.reduce((prev, next) => prev + next, 0));
}

const search2 = (here, days) => {
  // 기저 사례: 마지막 날인경우 해당 위치에 있는지
  if (days == d) return (here == q ? 1.0 : 0.0);
  if (cache[here][days] > -0.5) return cache[here][days];
  cache[here][days] = 0.0;
  for (let there = 0; there < n; there++) {
    // 현재 위치에서 다음 위치로 갈 수 있는지
    if (connected[here][there]) {
      // 갈 수 있으면 재귀 호출하고 전체 갈 수 있는 경우의 수로 나눠서 더해준다
      cache[here][days] += search2(there, days + 1) / deg[here];
    }
  }
  return cache[here][days];
}

let q = 2;
console.log(search2(p, 0))

const search3 = (here, days) => {
  // 기저 사례: 시작 위치가 맞는지
  if (days == 0) return (here == p ? 1.0 : 0.0);
  if (cache[here][days] > -0.5) return cache[here][days];
  cache[here][days] = 0.0;
  for (let there = 0; there < n; there++) {
    // 현재 위치에서 다음 위치로 갈 수 있는지
    if (connected[here][there]) {
      // 처음 위치로 가는 경우의 수
      cache[here][days] += search3(there, days - 1) / deg[there];
    }
  }
  return cache[here][days];
}

console.log(search3(3, d));