// 재귀의 규칙
// 기저 조건
function countDownToZero(n) {
  if (n < 0) return;
  else {
    console.log(n);
    countDownToZero(n - 1);
  }
}
countDownToZero(12);