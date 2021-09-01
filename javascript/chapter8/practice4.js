// 시간 복잡도 O(n) 공간 복잡도 O(n)
// 공간 복잡도는 재귀 호출 스택때문에 O(n)이다 호출 스택이 메모리의 일부로 남는다.
function isPalindromeRecursive(word) {
  return isPalindromeHelper(word, 0, word.length - 1);
}

function isPalindromeHelper(word, beginPos, endPos) {
  if (beginPos >= endPos) return true;
  if (word.charAt(beginPos) != word.charAt(endPos)) return false;
  else return isPalindromeHelper(word, beginPos + 1, endPos - 1);
}

console.log(isPalindromeRecursive('hi'));
console.log(isPalindromeRecursive('iii'));
console.log(isPalindromeRecursive('i'));
console.log(isPalindromeRecursive('racecar'));
console.log(isPalindromeRecursive('deified'));