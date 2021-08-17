// 판자의 높이
let input = [
  '7 1 5 9 6 7 3'
]

let arr = input[0].split(' ');

// 매개 변수로 함수가 해결하는 범위를 지정한다
// 배열에서 왼쪽값과 오른쪽값
const solve = (left, right) => {
  // 기저 사례: 판자가 하나밖에 없는 경우
  if (left === right) return arr[left];
  // 구간을 분할하여 각각 넓이를 구한후 더큰 넓이를 택한다.
  let mid = Math.floor((left + right) / 2);
  let ret = Math.max(solve(left, mid), solve(mid + 1, right));
  // 부분문제 3
  // 두부분에 모두 걸치는 사각형 중 가장 큰것 찾기
  let lo = mid, hi = mid + 1;
  // 높이 지정
  let height = Math.min(arr[lo], arr[hi]);
  // 중간에 걸치는 사각형 크기 비교
  ret = Math.max(ret, height * 2);
  // 범위가 배열을 벗어나지 않을때
  while (left < lo || hi < right) {
    // 좌우 선택중 오른쪽 사각형 높이가 더높을때
    if (arr[lo - 1] < arr[hi + 1]) {
      hi++;
      height = Math.min(height, arr[hi]);
    } else {
      lo--;
      height = Math.min(height, arr[lo]);
    }
    // 선택 후 기존 한 부분에만 있던 사각형들의 최고 넓이와 비교
    ret = Math.max(ret, height * (hi - lo + 1));
  }
  // 모든 비교 후 반환
  return ret;
}

console.log(solve(0, arr.length - 1))