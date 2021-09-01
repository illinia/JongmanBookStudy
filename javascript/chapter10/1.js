// 선형 검색
// O(n)
function linearSearch(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) return true;
  }
  return false;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6))
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10))

// 이진 검색
function binarySearch(array, n) {
  let lowIndex = 0, highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] == n) return midIndex;
    else if (n > array[midIndex]) lowIndex = midIndex + 1;
    else highIndex = midIndex - 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4], 4))
console.log(binarySearch([1, 2, 3, 4], 5))