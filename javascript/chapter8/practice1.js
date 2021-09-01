// 십진수를 이진수로 변환
// 시간 복잡도 O(log2(n))n을 2로 계속 나누기 때문에
function base10ToString(n) {
  let binaryString = '';

  function base10ToStringHelper(n) {
    if (n < 2) {
      binaryString += n;
      return;
    } else {
      base10ToStringHelper(Math.floor(n / 2));
      base10ToStringHelper(n % 2);
    }
  }
  base10ToStringHelper(n);
  return binaryString;
}

console.log(base10ToString(2))