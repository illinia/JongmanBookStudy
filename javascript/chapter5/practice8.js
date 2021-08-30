// 행렬 회전
// 시간 복잡도 O(mn) m은 행 n은 열, 공간 복잡도 O(1) 원래 배열이 수정되기 때문
let matrix = [[1, 0, 1], [0, 0, 1], [1, 1, 1]];

function rotateMatrix90Left(mat) {
  let N = mat.length;
  // 
  for (let x = 0; x < N / 2; x++) {

    for (let y = x; y < N - x - 1; y++) {
      let temp = mat[x][y];

      mat[x][y] = mat[y][N - 1 - x];
      mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];
      mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];
      mat[N - 1 - y][x] = temp;
    }
  }
}
rotateMatrix90Left(matrix);
console.log(matrix)