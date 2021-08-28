var arr = [1, 2, 3, 4, 5];
var weight = 9;

// 시간복잡도 O(n) 공간복잡도 O(n)
function findSumBetter(arr, weight) {
  let hashtable = {};

  for (let i = 0, arrLength = arr.length; i < arrLength; i++) {
    let currentElement = arr[i], difference = weight - currentElement;

    if (hashtable[currentElement] != undefined) {
      console.log(hashtable)
      return [arr[i], hashtable[currentElement]]
    } else {
      hashtable[difference] = arr[i];
    }
  }
  return -1;
}

console.log(findSumBetter(arr, weight))