// 소인수분해
// O(sqrt(n))
function primeFactors(n) {
  // 2로 나눠진다면 나눠질 수 있는 수만큼 2가 출력된다.
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }

  // 이 지점에서 n은 홀수임이 확실하다. 수를 두개씩 증가할 수 있다.
  for (let i = 3; i * i <= n; i = i + 2) {
    // i 가 n을 나눌 수 있는 한 계속해서 i가 출력되고 n을 i로 나눈다.
    while (n % i == 0 && n != 0) {
      console.log(i);
      n = n / i;
    }
  }

  if (n > 2) {
    console.log(n);
  }
}

primeFactors(100)