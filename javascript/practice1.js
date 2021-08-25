// 1번
// f(n) = 1000 * n * 20 * n
// O(n) = n^2
function someFunction(n) {
  for (let i = 0; i < n * 1000; i++) {
    for (let j = 0; j < n * 20; j++) {
      console.log(i + j);
    }
  }
}

// 2번
// f(n) = n * n * n * 10
// O(n) = n^3
function someFunction(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < 10; l++) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}

// 3번
// f(n) = 1000
// O(n) = 1
function someFunction(n) {
  for (let i = 0; i < 1000; i++) {
    console.log('hi');
  }
}

// 4번
// f(n) = log2n
// O(n) = log2n
function someFunction(n) {
  for (let i = 1; i < n; i = i * 2) {
    console.log(n);
  }
}

// 6번
function someFunction(n) {
  while (true) {
    console.log(n);
  }
}