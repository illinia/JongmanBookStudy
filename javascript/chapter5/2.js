var array1 = [1, 2, 3, 4];

console.log(array1.slice(1, 2));
console.log(array1.slice(2, 4));
console.log(array1.slice(1))
console.log(array1.slice(1, 4))
console.log(array1.slice())

var array2 = array1;
array2[0] = 5
console.log(array1)

var array1 = [1, 2, 3, 4];
// 참조하지 않고 새로운 배열을 만듬
var array2 = Array.from(array1)

array2[0] = 5
console.log(array1)

var array1 = [1, 2, 3, 4];
console.log(array1.splice());
console.log(array1.splice(1, 2));

var array1 = [1, 2, 3, 4];
console.log(array1.splice(1, 2, 6, 7, 8))
console.log(array1)

// concat

var array1 = [1, 2, 3, 4];
console.log(array1.concat([2, 3, 4]));

console.log(array1.length)
array1.length = 3
console.log(array1.length)

function addFourNums(a, b, c, d) {
  return a + b + c + d;
}

var numbers = [1, 2, 3, 4];
console.log(addFourNums(...numbers))