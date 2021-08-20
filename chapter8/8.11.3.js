// 우물을 기어오르는 달팽이
let n = 3;
let m = 2;

// 최대 길이는 n일 동안 m이 1미터 일때 2n번
const cache = Array.from({ length: n }, value => value = Array(2 * n + 1).fill(-1));

const climb = (days = 0, climbed = 0) => {
  // 기저 사례: 마지막 날이 지난 경우
  if (days == m) return climbed >= n ? 1 : 0;
  // 메모이제이션
  if (cache[days][climbed] != -1) return cache[days][climbed];
  // 다음날에 1미터, 2미터 두가지 경우의 수를 더해서 반환하는 재귀
  return cache[days][climbed] = climb(days + 1, climbed + 1) + climb(days + 1, climbed + 2);
};

console.log(climb() / 2 ** m)