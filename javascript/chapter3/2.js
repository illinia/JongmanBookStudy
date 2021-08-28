// 숫자 알고리즘
// 소수인지 판별하기 위해서 2부터 n-1까지 나눠 나머지가 0인지 확인
// 시간 복잡도는 O(n)
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(isPrime(10))

// O(sqrt(n))
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}