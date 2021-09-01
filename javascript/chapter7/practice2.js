// 필요 없는 곳에 전역변수가 사용됐다.
// var RED = 0, GREEN = 1, BLUE = 2;

function redGreenBlueCount(arr) {
  // 함수 내부로 이동한다.
  var RED = 0, GREEN = 1, BLUE = 2;
  var counter = new Array(3).fill(0);

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (curr == RED) counter[RED]++;
    else if (curr == GREEN) counter[GREEN]++;
    else if (curr == BLUE) counter[BLUE]++;
  }
  return counter;
}
console.log(redGreenBlueCount([0, 1, 1, 1, 2, 2, 2]));