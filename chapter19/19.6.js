// // 브루트 포스 알고리즘
// let signals = [];
// let k = 3;// 합이 k인 부분 수열의 합
// const simple = () => {
//   let ret = 0;
//   // 시작 인덱스
//   for (let head = 0; head < signals.length; head++) {
//     // 각 반복문의 총합
//     let sum = 0;
//     // 시작 인덱스부터 검색하는 인덱스
//     for (let tail = head; tail < signals.length; tail++) {
//       // 총합에 먼저 더하고
//       sum += signals[tail];
//       // 합이 k가 되면 카운트
//       if (sum == k) ret++;
//       // 합이 k이든 이상이든 탈출
//       if (sum >= k) break;
//     }
//   }
//   // 최종 카운트 반환
//   return ret;
// }

// // 최적화 알고리즘
// const optimized = () => {
//   // 카운트와 마지막 인덱스, 범위 합을 반복문 밖에 할당한다.
//   let ret = 0, tail = 0, rangeSum = signals[0];
//   for (let head = 0; head < signals.length; head++) {
//     // 범위 합이 k보다 작고 마지막 인덱스 + 1이 전체 수열 길이보다 작을때
//     // 범위 합에 마지막 인덱스를 1증가시긴 값을 더한다.
//     // k와 같거나 커질때까지 반복
//     while (rangesum < k && tail + 1 < signals.length) rangeSum += signals[++tail];
//     // k와 같아지면 카운트
//     if (rangeSum == k) ret++;
//     // head증가 시키기 전에 구한 합에서 최초 인덱스값을 뺀다
//     // 그러면 다시 계산할 필요가 없다.
//     rangeSum -= signals[head];
//   }
//   return ret;
// }

// 온라인 알고리즘
// 난수 생성기 클래스
class RNG {
  constructor() {
    this.seed = 1983
  }
  next() {
    let ret = this.seed;
    this.seed = ((this.seed * 214013) + 2531011);
    return ret % 10000 + 1;
  }
}
// let test = new RNG()
// console.log(test.next())
// console.log(test.next())
// console.log(test.next())
// console.log(test.next())

// 합이 8791, n의 길이
let k = 8791, n = 20;

const countranges = () => {
  const rng = new RNG();
  // 난수 큐
  let range = [];
  // 카운트, 범위 합
  let ret = 0, rangeSum = 0;
  for (let i = 0; i < n; i++) {
    let newSignal = rng.next();
    // 범위합에 난수를 더한다.
    rangeSum += newSignal;
    // 난수 큐에 난수를 넣는다.
    range.push(newSignal);
    // 합이 k보다 크면
    while (rangeSum > k) {
      // 큐에서 맨 앞요소를 제거하고 범위합에서 뺀다.
      rangeSum -= range.shift()
    }
    // 합이 k면 카운트+
    if (rangeSum == k) ret++;
  }
  return ret;
}

console.log(countranges())