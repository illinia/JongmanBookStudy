// 길찾기
let board =
  `%e%%%%%%%%%\n
%...%.%...%\n
%.%.%.%.%%%\n
%.%.......%\n
%.%%%%.%%.%\n
%.%.....%.%\n
%%%%%%%%%x%`;

let rows = board.split('\n').filter(value => value !== '');

function generateColumnArr(arr) {
  return arr.split('');
}

let mazeMatrix = rows.map(generateColumnArr);
console.log(mazeMatrix)

function findChar(char, mazeMatrix) {
  let row = mazeMatrix.length, column = mazeMatrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (mazeMatrix[i][j] == char) return [i, j];
    }
  }
}

function printMatrix(matrix) {
  let mazePrintStr = '', row = matrix.length, column = matrix[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      mazePrintStr += matrix[i][j];
    }
    mazePrintStr += '\n';
  }
  console.log(mazePrintStr);
}

// 시간 복잡도 O(mn), 공간 복잡도 O(1) m은 행의 길이 n은 열의 길이
function mazePathFinder(mazeMatrix) {
  let row = mazeMatrix.length,
    column = mazeMatrix[0].length,
    startPos = findChar('e', mazeMatrix),
    endPos = findChar('x', mazeMatrix);

  function path(x, y) {
    if (x > row - 1 || y > column - 1 || x < 0 || y < 0) return false;
    // 기저 사례
    if (x == endPos[0] && y == endPos[1]) return true;

    if (mazeMatrix[x][y] == '%' || mazeMatrix[x][y] == "+") return false;
    // 현재 위치 표시
    mazeMatrix[x][y] = '+';
    printMatrix(mazeMatrix);

    if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) return true;
    // 실패시 다시 복구
    mazeMatrix[x][y] = '.';
    return false;
  }

  path(startPos[0], startPos[1]);
}

mazePathFinder(mazeMatrix);