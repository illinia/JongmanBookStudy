let input = [
  3, 2, 1, 7, 5, 4, 2, 6
];

let n = input.length;

let cache = Array(100).fill(-1);

const lis2 = (start) => {
  // 메모이제이션
  if (cache[start] != -1) return cache[start];
  // 통과했으면 존재하니까 1 할당
  cache[start] = 1;

  for (let next = start + 1; next < n; next++) {
    // 다음 수가 존재하고 더 큰경우 현재 값과 재귀 호출한 값중 큰값
    if (input[start] < input[next]) cache[start] = Math.max(cache[start], lis2(next) + 1);
  }
  // 다음 수가 없으면 반환
  return cache[start];
}

console.log(lis2(0));