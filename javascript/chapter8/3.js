// 파스칼의 삼각형
function pascalTriangle(row, col) {
  // 기저 사례 최상위 항목은 (1, 1)이다 열이 1이면 1을 반환하고
  if (col == 0) return 1;
  // 행이 0이면 0을 반환한다.
  else if (row == 0) return 0;
  else return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
}

console.log(pascalTriangle(5, 2));