function knapsackNaive(index, weights, values, target) {
  let result = 0;

  if (index <= -1 || target <= 0) result = 0
  else if (weights[index] > target) result = knapsackNaive(index - 1, weights, values, target);
  else {
    let current = knapsackNaive(index - 1, weights, values, target);
    let currentPlusOther = values[index] + knapsackNaive(index - 1, weights, values, target - weights[index]);

    result = Math.max(current, currentPlusOther);
  }
  return result;
}

function knapsackDP(index, weights, values, target, matrixDP) {
  let result = 0;

  if (matrixDP[index + '-' + target]) {
    return matrixDP[index + '-' + target];
  }

  if (index <= -1 || target <= 0) result = 0;
  else if (weights[index] > target) {
    result = knapsackDP(index - 1, weight, values, target, matrixDP);
  } else {
    let current = knapsackDP(index - 1, weights, values, target, matrixDP),
      currentPlusOther = values[index] + knapsackDP(index - 1, weight, values, target - weights[index], matrixDP);

    result = Math.max(current, currentPlusOther);
  }
  matrixDP[index + '-' + target] = result;
  return result;
}

let weight = [1, 2, 4, 2, 5]
values = [5, 3, 5, 3, 2]
target = 10;

console.log(knapsackDP(4, weight, values, target, {}))
// console.log(knapsackNaive(4, weight, values, target))