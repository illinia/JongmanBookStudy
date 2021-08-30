let M = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
];

// O(mn) m은 열의 개수 n은 행의 개수
// 공간 복잡도 O(1) 정해져있다.
function spiralPrint(M) {
  // 각 변의 인덱스 지정
  let topRow = 0, leftCol = 0,
    btmRow = M.length - 1, rightCol = M[0].length - 1;

  // 모든 요소들을 순회
  while (topRow < btmRow && leftCol < rightCol) {
    for (let col = 0; col <= rightCol; col++) {
      console.log(M[topRow][col]);
    }
    topRow++;

    for (let row = topRow; row <= btmRow; row++) {
      console.log(M[row][rightCol]);
    }
    rightCol--;
    // toprow가 증가되어서 다시 확인
    if (topRow <= btmRow) {
      for (let col = rightCol; col >= 0; col--) {
        console.log(M[btmRow][col]);
      }
      btmRow--;
    }
    // rightcol이 감소되어서 다시 확인
    if (leftCol <= rightCol) {
      for (let row = btmRow; row > topRow; row--) {
        console.log(M[row][leftCol]);
      }
      leftCol++;
    }
  }
}

spiralPrint(M);