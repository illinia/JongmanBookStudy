let input = 92;

const MOD = 10 * 1000 * 1000;

const cache = Array.from({ length: 101 }, value => value = Array(101).fill(-1));

const poly = (n, first) => {
  // 기저 사례: n == first 모든 블록을 다썻을때
  if (n == first) return 1;
  if (cache[n][first] != -1) return cache[n][first];
  cache[n][first] = 0;
  // (first + second - 1)에서 second가 1에서 n - first까지 해당되므로 점화식을 코드로 옮기면
  for (let second = 1; second <= n - first; second++) {
    let add = second + first - 1;
    add *= poly(n - first, second);
    add %= MOD;
    cache[n][first] += add;
    cache[n][first] %= MOD;
  }
  return cache[n][first];
};
// 제일 위의 블록 조합
const polyResult = () => {
  let result = 0;
  for (let i = 1; i <= input; i++) {
    result += poly(input, i)
    result %= MOD;
  }
  return result
}

console.log(polyResult())