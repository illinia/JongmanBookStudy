let input = [
  '*p*',
  3,
  'help',
  'papa',
  'hello',
];

// 와일드 카드 패턴
let W = input[0]
let cache = Array.from({ length: 100 }, value => value = Array(100).fill(-1));

// w는 와일드 카드 패턴의 인덱스
// s는 문자열 인덱스
const match = (w, s) => {
  // 반환할 때 마다 ret에 할당된 캐시값이 변한다.
  let ret = cache[w][s];
  // 값이 할당 되어있을 때 계산하지 않고 반환한다.
  if (ret != -1) return ret;
  // 인덱스가 범위안에 있고 패턴에 ?가 있거나 값이 일치하면
  if (s < S.length && w < W.length && (W[w] == '?' || W[w] == S[s])) {
    // 다음 값을 계산하는 재귀 호출
    return cache[w][s] = match(w + 1, s + 1);
  }
  // 패턴 마지막에 도달한 경우 문자열도 끝났는지 확인
  if (w == W.length) return cache[w][s] = Number(s == S.length);
  // *를 만나서 끝난 경우
  if (W[w] == '*') {
    // *에 몇글자를 대응할지 재귀 호출
    // 첫번째 조건은 0글자
    // 두번째는 1글자 이상
    if (match(w + 1, s) || (s < S.length && match(w, s + 1))) {
      return cache[w][s] = 1;
    }
  }
  return 0;
}
let S = input[2]
console.log(match(0, 0));