// 타일링 방법의 수 세기
// 전체 타일의 길이
let input = 100;
// 큰수를 나누기 위한 큰수
const MOD = 1000000007;
// 
let cache = Array(101).fill(-1);

const tiling = (width) => {
  // 기저 사례: width가 1 이하일때
  if (width <= 1) return 1;
  // 메모이제이션
  if (cache[width] != -1) return cache[width];
  // 세로타일 하나를 쓰느냐(1만큼 공간을 차지하느냐) 가로타일 2개를 쓰느냐(2만큼 공간을 차지하느냐)
  return cache[width] = (tiling(width - 2) + tiling(width - 1)) % MOD;
};

console.log(tiling(input))