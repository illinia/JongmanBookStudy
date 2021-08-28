function arraySlice(array, beginIndex, endIndex) {
  if (!beginIndex && !endIndex) {
    return array;
  }

  if (!endIndex) endIndex = array.length;

  var partArray = [];

  for (let i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i]);
  }
  return partArray;
}

console.log(arraySlice([1, 2, 3, 4], 1, 2))
console.log(arraySlice([1, 2, 3, 4], 2, 4))