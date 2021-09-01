// 항목들을 교환하기 위한 함수
function swap(strArr, index1, index2) {
  let temp = strArr[index1];
  strArr[index1] = strArr[index2];
  strArr[index2] = temp;
}
// 시간 복잡도 O(n!), 공간 복잡도 O(n!)
// n!개의 순열이 있다.
function permute(strArr, begin, end) {
  // 기저 사례
  if (begin == end) {
    console.log(strArr);
  } else {
    for (let i = begin; i < end + 1; i++) {
      swap(strArr, begin, i);
      permute(strArr, begin + 1, end);
      swap(strArr, begin, i);
    }
  }
}

function permuteArray(strArr) {
  permute(strArr, 0, strArr.length - 1);
}

permuteArray(['A', 'B', 'C', 'D'])