// 배열의 두 항목을 더해서 주어진 수가 될수 있는지
function findTwoSum(array, sum) {
  var store = {};

  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    if (store[array[i]]) return true;
    else store[sum - array[i]] = array[i];
  }
  return false;
}

// console.log(findTwoSum([1, 2, 3, 4, 5, 8], 8));

// 배열에서 한번만 등장하는 항목찾기
// 한 항목만 한 번 등장하고 나머지는 두번씩 등장
// 시간 O(log2n)
function findOnlyOnce(arr, low, high) {
  if (low > high) return null;
  if (low == high) return arr[low];

  var mid = Math.floor((high + low) / 2);

  if (mid % 2 == 0) {
    if (arr[mid] == arr[mid + 1]) return findOnlyOnce(arr, mid + 2, high);
    else return findOnlyOnce(arr, low, mid);
  } else {
    if (arr[mid] == arr[mid - 1]) return findOnlyOnce(arr, mid + 1, high);
    else return findOnlyOnce(arr, low, mid - 1);
  }
}

function findOnlyOnceHelper(arr) {
  return findOnlyOnce(arr, 0, arr.length);
}
console.log(findOnlyOnceHelper([1, 1, 2, 4, 4, 5, 5, 6, 6]));

