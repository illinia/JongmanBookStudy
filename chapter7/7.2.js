// 쿼드 트리 뒤집기
let input = [
  // 'xbwxwbbwb'
  'xxwwwbxwxwbbbwwxxxwwbbbwwwwbb'
];
// 압축된 이미지소스
let strings = input[0];
// 압축을 풀어서 다시 뒤집으려면 전체 배열이 필요하다
// let decompresse = Array.from({ length: 20 }, value => value = Array(20).fill(' '));

// 순수 함수를 위해서 이터레이터를 함수안으로 넣었다.
// 매개변수를 넣지 않으면 기본값 0으로 설정
const reverse = (it = 0) => {
  // 하나의 정보를 불러오면 이터레이터를 증가시킨다.
  let head = strings[it];
  it++;
  // 기저사례 첫글자가 b 또는 w인 경우
  if (head == 'b' || head == 'w') return [head, it];
  // 뒤집기위한 사분면을 따로 선언해놓는다.
  let part1, part2, part3, part4;
  // 뒤집기 함수의 반환값을 비구조화 할당한다.
  // 이터레이터는 재귀안에서 계속 증가되므로 사분면을 돌아가면서 재귀한다.
  [part1, it] = reverse(it);
  [part2, it] = reverse(it);
  [part3, it] = reverse(it);
  [part4, it] = reverse(it);
  // 뒤집기 함수의 반환값
  // 압축 했으므로 x를 붙여서 뒤집은채로 반환한다. 이터레이터 값도 같이 반환
  return ['x' + part3 + part4 + part1 + part2, it];
};

console.log(reverse())