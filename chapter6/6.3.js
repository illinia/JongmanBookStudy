let input = [
  '3',
  // '2 1',
  // '0 1',
  '4 6',
  '0 1 1 2 2 3 3 0 0 2 1 3',
  // '6 10',
  // '0 1 0 2 1 2 1 3 1 4 2 3 2 4 3 4 3 5 4 5',
];

// 적당한 길이의 빈 배열 할당
// Array(10).fill(Array(10).fill(false)) 처음에 이렇게 배열을 만들었는데 문제인지 몰랐다.
// Array(10).fill([...Array(10.fill(false))]) 전개 연산자로 깊은 복사를 해도 해결되지 않았는데
// fill메서드가 받은 파라미터가 같은 배열을 요소들로 할당하는 것 같다.
// 깊은 복사 이용하려면 lodash 같은 라이브러리를 이용하거나 각 요소들을 순회하면서 빈 배열을 넣어주면 될거같다.
let friendsBool = Array.from({ length: 10 }, (value) => value = Array(10).fill(false));

// 여러가지 방법이 있겠지만 가독성 좋게 두 개로 할당함.
let oddList = [], evenList = [];
let friendList = input[2].split(' ').forEach((value, index) => {
  if (index % 2 === 0) {
    oddList.push(value);
  } else {
    evenList.push(value);
  }
});

// 친구이면 서로 true
for (let i = 0; i < oddList.length; ++i) {
  friendsBool[oddList[i]][evenList[i]] = true;
  friendsBool[evenList[i]][oddList[i]] = true;
}

// 학생들이 짝지어졌는지를 체크하는 배열
// true이면 짝지어 진것임
let students = Array(Number(input[1].split(' ')[0])).fill(false);

const countPairing = () => {
  // 학생 순서
  // 순서가 음수일 수 없어서 기저사례 판단 방법으로 정한다.
  let firstNum = -1;
  // 학생들이 짝지어 졌는지 첫 학생부터 확인
  // 모두 짝지어 졌으면 순서는 -1 그대로 넘어간다.
  for (let i = 0; i < students.length; ++i) {
    if (!students[i]) {
      firstNum = i;
      break;
    }
  }

  // 모두 짝지어 졌을 경우 성공했음을 카운트하기위해 1을 반환한다.
  if (firstNum == -1) return 1;
  let ret = 0;

  // 첫번째 학생과 짝지을 수 있는지 확인하는 반복문
  for (let pairWith = firstNum + 1; pairWith < students.length; ++pairWith) {
    // 첫번째 학생이 짝지어졌는지 확인하고
    // 서로 친구인지 확인하는 조건문
    if (!students[pairWith] && friendsBool[firstNum][pairWith]) {
      // 조건문 통과시 학생 리스트에서 값을 변경
      students[firstNum] = true;
      students[pairWith] = true;
      // 재귀 호출
      // 반환 값은 카운트되어 최종 값이 반환된다.
      ret += countPairing();
      // 재귀가 모두 끝났을 시 다시 초기화후 반복문으로 다음 학생을 체크한다.
      students[firstNum] = false;
      students[pairWith] = false;
    }
  }
  return ret;
}

console.log(countPairing());