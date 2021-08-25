// O(n) 코드 예
// f(n) = n이다 count에 숫자를 n번 더하기 때문이다.
function a(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}

// f(n) = 5n이다 0부터 5n까지 실행하기 때문이다.
// 하지만 O(n)이다 상수는 무시한다.
function a(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

// f(n) = n + 1이다.
// 하지만 O(n)의 빅오 표기법이다.
function a(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}

// f(n) = 6n이다 하지만 O(n)로 표기된다.
function a(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

// f(n) = 5n * n이다
// 빅오는 O(n) = n^2가된다.
function a(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
    for (let i = 0; i < 5 * n; i++) {
      count += 1;
    }
  }
  return count;
}

// f(n) = n^2이다. O(n) = n^2이다.
function a(n) {
  let count = 0;
  for (let i = 0; i < n * n; i++) {
    count += 1;
  }
  count += 3;
  return count;
}