// 모든 배열에서 반복되는 값을 구한다.
// 시간 복잡도 O(kn) k는 karray 길이
// 공간 복잡도 O(n)
function commonElements(kArray) {
  let hashmap = {}, answer = [];

  // 각 배열에 접근한다.
  for (let i = 0, kArrayLength = kArray.length; i < kArrayLength; i++) {
    let currentArray = kArray[i], last = null;
    // 배열의 요소에 접근한다.
    for (let j = 0, currentArrayLength = currentArray.length; j < currentArrayLength; j++) {
      let currentElement = currentArray[j];
      // 중복을 피하기 위해 이전 요소와 비교
      if (last != currentElement) {
        if (!hashmap[currentElement]) {
          hashmap[currentElement] = 1;
        } else {
          hashmap[currentElement]++;
        }
      }

      last = currentElement;
    }
  }
  // 해시맵 키값 순환
  for (let prop in hashmap) {
    // 모든 배열에 포함이 되면
    if (hashmap[prop] == kArray.length) {
      answer.push(parseInt(prop));
    }
  }
  return answer;
}

console.log(commonElements([[1, 2, 3], [1, 2, 3, 4], [1, 2]]))