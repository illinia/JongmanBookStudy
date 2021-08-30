// 배열의 중앙값
function medianOfArray(array) {
  let length = array.length;

  if (length % 2 === 1) {
    return array[Math.floor(length / 2)];
  } else {
    return (array[length / 2] + array[length / 2 - 1]) / 2;
  }
}

// arr2가 더 큰 배열이다.
// O(log2(n)) 배열의 크기를 매번 절반으로 나누어서 로그 시간복잡도
function medianOfTwoSortedArray(arr1, arr2, pos) {
  // 기저 사례: 남은 배열 요소 갯수가 0부터 2개일때
  if (pos <= 0) return -1;
  if (pos == 1) return (arr1[0] + arr2[0]) / 2;
  if (pos == 2) return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;

  let median1 = medianOfArray(arr1), median2 = medianOfArray(arr2);

  if (median1 == median2) return median1;

  // 중앙값 인덱스를 구하는데 배열의 길이가 짝수인지 홀수인지
  let evenOffset = pos % 2 == 0 ? 1 : 0;
  let offsetMinus = Math.floor(pos / 2) - evenOffset;
  let offsetPlus = pos - Math.floor(pos / 2) + evenOffset;

  if (median1 < median2) {
    // 왼쪽 배열 중앙값이 더 작으면 왼쪽 배열에서 큰값들을, 오른쪽 배열에서 작은 값들을 재귀호출
    return medianOfTwoSortedArray(arr1.slice(offsetMinus), arr2.slice(0, -offsetMinus), offsetPlus);
  } else {
    // 반대 경우
    return medianOfTwoSortedArray(arr2.slice(offsetMinus), arr1.slice(0, -offsetMinus), offsetPlus);
  }
}

console.log(medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3))
console.log(medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3))
console.log(medianOfTwoSortedArray([1, 2, 3], [2, 3, 5], 3))