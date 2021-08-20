// 비대칭 타일링
let input = 3;

const MOD = 1000000007;

let cache = Array(101).fill(-1);

const tiling = (width) => {
  if (width <= 1) return 1;
  if (cache[width] != -1) return cache[width];
  return cache[width] = (tiling(width - 2) + tiling(width - 1)) % MOD;
};

const asymmetric = (width) => {
  // 길이가 홀수일 경우 가운데 한칸을 기준으로 대칭되므로
  // 가운데 한칸 앞까지 경우의 수를 빼면된다.
  // 홀수 나눌시 정수가 아니므로 버림을 한다.
  if (width % 2 == 1) return (tiling(width) - tiling(Math.floor(width / 2)) + MOD) % MOD;
  let ret = tiling(width);
  // 가운데 칸이 0일때 경우의 수를 전체에서 뺀다
  ret = (ret - tiling(width / 2) + MOD) % MOD;
  // 가운데 칸이 2개일때 경우의 수를 전체에서 뺀다.
  ret = (ret - tiling(width / 2 - 1) + MOD) % MOD;
  return ret;
};

console.log(asymmetric(input))

let cache2 = Array(101).fill(-1);
// 직접 비대칭을 세는 방법
const asymmetric2 = (width) => {
  // 기저 사례: 너비가 2 이하인 경우 대칭이됨
  if (width <= 2) return 0;
  // 메모이제이션
  if (cache2[width] != -1) return cache2[width];
  // 양쪽 끝을 덮은 타일로 분류하기 4개의 방법
  cache2[width] = asymmetric2(width - 2) % MOD;
  cache2[width] = (cache2[width] + asymmetric2(width - 4)) % MOD;
  cache2[width] = (cache2[width] + tiling(width - 3)) % MOD;
  cache2[width] = (cache2[width] + tiling(width - 3)) % MOD;
  return cache2[width];
};

console.log(asymmetric2(input))