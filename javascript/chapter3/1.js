// 부동소수점 체계때문에 반올림 오류를 일으킬 수 있다.
console.log(0.1 + 0.2 === 0.3)

function numberEqual(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEqual(0.1 + 0.2, 0.3))

// 부동소수점과는 잘 동작하지 않는다.
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2)

// 부동소수점과도 잘 동작한다.
console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2);

// 부동소수점과는 잘 동작하지 않는다.
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2)

// 부동소수점과 잘 동작한다.
console.log(Number.MIN_VALUE - 1 == -1);

console.log(Infinity > Number.MAX_SAFE_INTEGER)
console.log(-Infinity < -Number.MIN_SAFE_INTEGER)
console.log(-Infinity - 324234 == -Infinity - 1)

console.log(-Infinity < Number.MIN_SAFE_INTEGER < 0 < Number.MIN_VALUE < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity)