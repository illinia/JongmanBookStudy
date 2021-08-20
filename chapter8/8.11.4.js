// 장마가 찾아왔다
// 비올 확률이 75%
let n = 5;
let m = 4;

// 최대 길이는 n일 동안 m이 1미터 일때 2n번
const cache = Array.from({ length: n }, value => value = Array(2 * n + 1).fill(-1));

const climb = (days = 0, climbed = 0) => {
  // 기저 사례: 마지막 날이 지난 경우
  if (days == m) return climbed >= n ? 1 : 0;
  // 메모이제이션
  if (cache[days][climbed] != -1) return cache[days][climbed];
  // 다음날에 1미터, 2미터 두가지 경우의 수를 확률로 계산해 반환
  return cache[days][climbed] = 0.25 * climb(days + 1, climbed + 1) + 0.75 * climb(days + 1, climbed + 2);
};

console.log(climb())