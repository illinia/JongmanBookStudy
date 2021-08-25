const arr = Array.from({ length: 200 }, value => value = -1);

const fibo = (n) => {
  // 기저 사례
  if (n <= 1) return n;

  if (arr[n] !== -1) return arr[n];

  arr[n] = fibo(n - 1) + fibo(n - 2)

  return arr[n];
};

console.log(fibo(50))