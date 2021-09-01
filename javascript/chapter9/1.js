var exampleSet = new Set();
exampleSet.add(1);
exampleSet.add(1);
exampleSet.add(2);
console.log(exampleSet)
// 추가, 삭제 O(1)시간
exampleSet.delete(1);
console.log(exampleSet)
// 포함 O(1)
console.log(exampleSet.has(1))
console.log(exampleSet.has(2))

// 교집합
function intersectSets(setA, setB) {
  let intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) intersection.add(elem);
  }
  return intersection;
}

var setA = new Set([1, 2, 3, 4]);
var setB = new Set([2, 3]);
console.log(intersectSets(setA, setB));

// 상위 집합 여부 확인
function isSuperset(setA, subset) {
  for (let elem of subset) {
    if (!setA.has(elem)) return false;
  }
  return true;
}

var setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]), setC = new Set([5]);

console.log(isSuperset(setA, setB));
console.log(isSuperset(setA, setC));

// 합집합
function unionSet(setA, setB) {
  var union = new Set(setA);
  for (let elem of setB) {
    union.add(elem);
  }
  return union;
}

var setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]), setC = new Set([5]);

console.log(unionSet(setA, setB));
console.log(unionSet(setA, setC));

// 차집합
function differenceSet(setA, setB) {
  let difference = new Set(setA);
  for (let elem of setB) difference.delete(elem);
  return difference;
}

var setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]);
console.log(differenceSet(setA, setB));