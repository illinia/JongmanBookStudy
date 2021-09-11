function editDistanceRecursive(str1, str2, length1, length2) {
  if (length1 == 0) return length2;

  if (length2 == 0) return length1;

  if (str1[length1 - 1] == str2[length2 - 1]) {
    return editDistanceRecursive(str1, str2, length1 - 1, length2 - 1);
  }

  return 1 + Math.min(
    editDistanceRecursive(str1, str2, length1, length2 - 1),
    editDistanceRecursive(str1, str2, length1 - 1, length2),
    editDistanceRecursive(str1, str2, length1 - 1, length2 - 1)
  );
}

function editDistanceRecursiveWrapper(str1, str2) {
  return editDistanceRecursive(str1, str2, str1.length, str2.length);
}

function editDistanceDP(str1, str2, length1, length2) {
  let dpMatrix = [];
  for (let i = 0; i < length1 + 1; i++) {
    dpMatrix[i] = [];
    for (let j = 0; j < length2 + 1; j++) {
      dpMatrix[i][j] = undefined;
    }
  }

  for (let i = 0; i < length1 + 1; i++) {
    for (let j = 0; j < length2 + 1; j++) {
      if (i == 0) dpMatrix[i][j] = j;
      else if (j == 0) dpMatrix[i][j] = i;
      else if (str1[i - 1] == str2[j - 1]) dpMatrix[i][j] = dpMatrix[i - 1][j - 1];
      else {
        let insertCost = dpMatrix[i][j - 1],
          removeCost = dpMatrix[i - 1][j],
          replaceCost = dpMatrix[i - 1][j - 1];

        dpMatrix[i][j] = 1 + Math.min(insertCost, removeCost, replaceCost);
      }
    }
  }
  return dpMatrix[length1][length2];
}

function editDistanceDPWrapper(str1, str2) {
  return editDistanceDP(str1, str2, str1.length, str2.length);
}

console.log(editDistanceDPWrapper('sammie', 'bae'))
// console.log(editDistanceRecursiveWrapper('sammie', 'bae'))