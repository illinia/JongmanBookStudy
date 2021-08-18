let cache = Array.from({ length: 30 }, value => value = Array(30).fill(-1));

// n개에서 r개를 순서없이 뽑는 경우 조합
let bino2 = (n, r) => {
  // 기저 사례
  // 0개를 뽑거나 전부 뽑는 경우
  if (r === 0 || n === r) return 1;
  // 메모이제이션 캐시값이 있으면 값을 불러온다.
  if (cache[n][r] !== -1) return cache[n][r];
  // 캐시값이 없으면 재귀 호출한다.
  return cache[n][r] = bino2(n - 1, r - 1) + bino2(n - 1, r);
};

console.log(bino2(4, 2))