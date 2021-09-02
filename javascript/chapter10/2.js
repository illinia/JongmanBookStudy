// 거품 정렬
// 시간 복잡도 O(n^2) 공간 복잡도 O(1) 중첩 루프를 사용하기 때문
function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) swap(array, j, j + 1);
    }
  }
  return array;
}

// console.log(bubbleSort([6, 2, 1, 3, 4, 5]))

// 선택정렬
// O(n^2), O(1) 중첩 루프
function selectionSort(items) {
  let len = items.length, min;

  for (let i = 0; i < len; i++) {
    min = i;

    for (j = i + 1; j < len; j++) {
      if (items[j] < items[min]) min = j;
    }

    if (i != min) swap(items, i, min);
  }
  return items;
}

// console.log(selectionSort([6, 1, 23, 4, 2, 3]));

// 삽입 정렬
// O(n^2), O(1)
function insertionSort(items) {
  let len = items.length, value, i, j;

  for (i = 0; i < len; i++) {
    value = items[i];
    // i번째 값보다 앞의 값들이 크면 한칸씩 뒤로 이동시킨다.
    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    // 내부 루프에서 j가 항상 먼저 -1을 함으로써
    // 0번 인덱스 혹은 자신보다 큰값을 선택하기 위해서 +1해줌
    items[j + 1] = value;
  }
  return items;
}

// console.log(insertionSort([6, 1, 23, 4, 2, 3]))

// 퀵정렬
// 평균 시간 O(n log2(n)) 최악 O(n^2)
function quickSort(items) {
  return quickSortHelper(items, 0, items.length - 1);
}

function quickSortHelper(items, left, right) {
  let index;

  if (items.length > 1) {
    // 인덱스값 기준 좌우측을 정렬시키고 인덱스값을 반환
    index = partition(items, left, right);
    // 분할하여 재귀 호출
    if (left < index - 1) quickSortHelper(items, left, index - 1);
    if (index < right) quickSortHelper(items, index, right);
  }

  return items;
}

function partition(array, left, right) {
  // 인덱스 중간값 구하고 
  let pivot = array[Math.floor((right + left) / 2)];
  while (left <= right) {
    // 피벗값 보다 큰 좌측값과 작은 우측값이 나올때까지 반복
    while (pivot > array[left]) left++;
    while (pivot < array[right]) right--;
    // 좌측과 우측값을 바꿔주고 인덱스 업데이트
    if (left <= right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  // 반환값을 기준으로 좌측엔 작은값 우측엔 큰값 정렬됨
  return left;
}

// console.log(quickSort([5, 1, 23, 4, 2, 3]))

// 빠른 선택
var array = [1, 3, 3, -2, 3, 14, 7, 8, 1, 2, 2];

function quickSelectInPlace(A, l, h, k) {
  var p = partition(A, l, h);
  if (p == (k - 1)) return A[p];
  else if (p > (k - 1)) return quickSelectInPlace(A, l, p - 1, k);
  else return quickSelectInPlace(A, p + 1, h, k);
}

function medianQuickSelect(array) {
  return quickSelectInPlace(array, 0, array.length - 1, Math.floor(array.length / 2));
}

// console.log(medianQuickSelect(array));
// console.log(quickSelectInPlace(array, 0, array.length - 1, 5))
// console.log(quickSelectInPlace(array, 0, array.length - 1, 10))

// 병합 정렬
function merge(leftA, rightA) {
  let results = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if (leftA[leftIndex] < rightA[rightIndex]) results.push(leftA[leftIndex++])
    else results.push(rightA[rightIndex++]);
  }

  let leftRemains = leftA.slice(leftIndex),
    rightRemains = rightA.slice(rightIndex);
  // console.log(results)

  return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
  if (array.length < 2) return array;

  let midpoint = Math.floor((array.length) / 2),
    leftArray = array.slice(0, midpoint),
    rightArray = array.slice(midpoint);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// console.log(mergeSort([6, 1, 23, 4, 2, 3]))

// 계수 정렬
// O(k + n) k 는 해쉬, n은 배열길이 O(k) 해쉬값들만큼 더 만들어야해서
function countSort(array) {
  let hash = {}, countArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) hash[array[i]] = 1;
    else hash[array[i]]++;
  }

  for (let key in hash) {
    for (let i = 0; i < hash[key]; i++) countArr.push(parseInt(key));
  }
  return countArr;
}

// console.log(countSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3]))

var array1 = [12, 3, 4, 2, 1, 34, 23];

function comparatorNumber(a, b) { return a - b; }
console.log(array1.sort(comparatorNumber));
console.log(array1.sort((a, b) => b - a))