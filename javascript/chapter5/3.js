let sum = [0, 1, 2, 3, 4].reduce((prev, curr, index, array) => {
  return prev + curr
}, 1);

console.log(sum)

function Matrix(rows, columns) {
  let jaggedarray = new Array(rows);
  for (let i = 0; i < columns; i++) {
    jaggedarray[i] = new Array(rows);
  }
  return jaggedarray;
}

console.log(Matrix(3, 3))