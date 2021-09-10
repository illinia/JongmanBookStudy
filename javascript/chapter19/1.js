let cache = {};
function fiboBest(n) {
  if (n <= 1) return n;
  if (cache[n]) return cache[n];
  return (cache[n] = fiboBest(n - 1) + fiboBest(n - 2));
}

// console.log(fiboBest(10));

function waysToCoverSteps(step) {
  if (step < 0) return 0;
  if (step == 0) return 1;

  return waysToCoverSteps(step - 1) + waysToCoverSteps(step - 2) + waysToCoverSteps(step - 3);
}

// console.log(waysToCoverSteps(12))

function waysToCoverStepsDP(step) {
  let cache = {};
  if (step < 0) return 0;
  if (step == 0) return 1;

  if (cache[step]) return cache[step];
  else {
    cache[step] = waysToCoverStepsDP(step - 1) + waysToCoverStepsDP(step - 2) + waysToCoverStepsDP(step - 3);
    return cache[step]
  }
}

console.log(waysToCoverStepsDP(12))