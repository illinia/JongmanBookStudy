// 무작위 수 생성기
const test1 = (x, y, p) => {
  return x ^ y % p;
}
// 모듈러의 곱셈
// (a * b) % C = (a % C * b % C) % C;
// 값 = 1로 설정. 지수는 0
// 지수를 1 증가
// 지수가 목표 지수가 될 때까지 반복
// O(n) n은 지수값과 동일
function modularExponentiation(base, exponent, modulus) {
  if (modulus == 1) return 0;
  let value = 1;

  for (let i = 0; i < exponent; i++) {
    value = (value * base) % modulus;
  }
  return value;
}

// console.log(modularExponentiation(6 * 10 ^ 77, 27, 497))

// O(n sqrt(n))
function allPrimeLessThanN(n) {
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) console.log(i);
  }
};

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false;
  }
  return true;
}

// allPrimeLessThanN(150)

// 소인수 집합 확인하기
// O(log divisor(number))
function maxDivide(number, divisor) {
  while (number % divisor == 0) number /= divisor;

  return number;
}

// O(log2(n))
function isUgly(number) {
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);
  return number === 1;
}

// O(n(log2(n)))
function arrayNUglyNumbers(n) {
  let counter = 0, currentNumber = 1, uglyNumbers = [];

  while (counter != n) {
    if (isUgly(currentNumber)) {
      counter++;
      uglyNumbers.push(currentNumber);
    }
    currentNumber++;
  }
  return uglyNumbers;
}

console.log(arrayNUglyNumbers(15));