let input = [
  '12122222'
  // '12673939'
];
// 최솟값 비교를 위한 큰수 설정
const INF = Infinity;
// 문자열
const N = input[0];

const classify = (a, b) => {
  // b - a개의 문자열 추출
  let M = N.slice(a, b);
  // 하나의 문자로 이루어 져있으면 1반환
  if (M == M[0].repeat(M.length)) return 1;
  // 등차수열인지 검사
  let progressive = true;
  for (let i = 0; i < M.length; i++) {
    if (M[i + 1] - M[i] != M[1] - M[0]) progressive = false;
  }
  // 등차수열이고 공차가 1이나 -1이면 2반환
  if (progressive && Math.abs(M[1] - M[0]) == 1) return 2;
  // 두 수가 번갈아 등장하는지 확인
  let alternating = true;
  for (let i = 0; i < M.length; i++) {
    // 홀수면 1번째랑 같은지 짝수면 0번째랑 같은지
    if (M[i] != M[i % 2]) alternating = false;
  }
  // 번갈아 등장하면 4반환
  // 공차가 1이 아닌 등차수열이면 5반환
  if (alternating) return 4;
  if (progressive) return 5;
  // 그외 10반환
  return 10;
}

let cache = Array(10002).fill(-1);

const memorize = (begin = 0) => {
  // begin 최초값은 0
  // 수열 범위를 넘으면
  if (begin >= N.length) return 0;
  // 메모이제이션
  if (cache[begin] != -1) return cache[begin];
  // 비교를 위한 큰수 할당
  cache[begin] = INF;

  for (let L = 3; L <= 5; L++) {
    // 3에서 5자리 수열 인덱스가 수열 전체를 넘지않으면
    if (begin + L <= N.length) {
      // 부분 문제의 최적해를 구해서 메모이제이션 시킨다.
      cache[begin] = Math.min(cache[begin], memorize(begin + L) + classify(begin, begin + L))
    }
  }
  // 최솟값을 반환
  return cache[begin];
}

console.log(memorize())