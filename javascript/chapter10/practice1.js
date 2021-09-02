// 이진 검색 제곱근 찾기
function sqrtInt(number) {
  if (number == 0 || number == 1) return number;

  let start = 1, end = number, ans;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (mid * mid == number) return mid;

    if (mid * mid < number) {
      start = mid + 1;
      ans = mid;
    } else end = mid - 1;
  }
  return ans;
};

// console.log(sqrtInt(9))

// 부동소수점의 제곱근 찾기
function sqrtDouble(number) {
  var threshold = 0.1;

  var upper = number;
  var lower = 0;
  var middle;
  while (upper - lower > threshold) {
    middle = (upper + lower) / 2;

    if (middle * middle > number) upper = middle;
    else lower = middle;
  }
  return middle;
}

console.log(sqrtDouble(9))