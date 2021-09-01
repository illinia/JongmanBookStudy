// 중복값 확인
// O(n) 공간 시간
function checkDuplicates(arr) {
  let mySet = new Set(arr);
  return mySet.size < arr.length;
}

console.log(checkDuplicates([1, 2, 3, 4, 5]));
console.log(checkDuplicates([1, 1, 2, 3, 4, 5]));

// 유일한 항목들만 가진 배열 반환ㄴ
// O(n+m) 두 배열내 모든 항목을 순환해야하기 때문
function uniqueList(arr1, arr2) {
  let mySet = new Set(arr1.concat(arr2));
  return Array.from(mySet);
}

console.log(uniqueList([1, 1, 2, 2], [2, 3, 4, 5]));
console.log(uniqueList([1, 2], [3, 4, 5]))