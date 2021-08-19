let input = [
  '3 3',
  '1 2 4',
  '3 4 7',
  // '3 3',
  // '1 2 3',
  // '4 5 6',
  // '5 3',
  // '10 20 30 1 2',
  // '10 20 30',
];

// 최소 숫자를 고르기 위해서 첫 요소를 가장 작은 수로 정함
const LongNumber = -Infinity;
let A = input[1].split(' ').map(value => +value);
// 각 배열 맨 앞에 넣음
A.unshift(LongNumber);
let B = input[2].split(' ').map(value => +value);
B.unshift(LongNumber);
let cache = Array.from({ length: 5 }, value => value = Array(5).fill(-1));

const jlis = (indexA, indexB) => {
  // 계산 되어있다면 그대로 반환
  if (cache[indexA][indexB] != -1) return cache[indexA][indexB];

  // 각 배열에 가장 작은 수를 넣었기 때문에
  // 최종 반환값에서 2를 빼야함
  // 원래 알고리즘에선 각 마지막 수로 배열 요소로 생각하여
  // 2를 더해줬으나 가장 작은 수 2개를 앞에 넣었기 때문에 -2를 해서
  // 최종적으로 0으로 초기화
  cache[indexA][indexB] = 0;
  // 첫 시행시 가장 작은 수가 할당되기 때문에 모든 수를 반복하여 실행 가능
  let maxElement = Math.max(A[indexA], B[indexB]);

  // A 배열의 다음수가 현재 최대 수보다 클 경우
  for (let nextA = indexA; nextA < A.length; nextA++) {
    if (maxElement < A[nextA]) {
      // 캐시 값에 현재 값 혹은 다른 배열들을 합친 길이 값을 할당
      cache[indexA][indexB] = Math.max(cache[indexA][indexB], jlis(nextA, indexB) + 1);
    }
  }
  for (let nextB = indexB; nextB < B.length; nextB++) {
    if (maxElement < B[nextB]) {
      cache[indexA][indexB] = Math.max(cache[indexA][indexB], jlis(indexA, nextB) + 1);
    }
  }
  // 현재 값에서 가장 긴 길이의 증가 부분 수열 길이를 반환한다.
  // 반환된 값으로 길이를 계산해 또 반환.
  return cache[indexA][indexB];
}
// 가장 작은수 2개부터 시작한다.
console.log(jlis(0, 0))