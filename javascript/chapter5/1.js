// 배열
var array1 = [1, 2, 3, 4];
array1.push(5);

array1.pop();
console.log(array1);

array1.shift();
console.log(array1)

console.log(array1[0]);

for (let i = 0, len = array1.length; i < len; i++) {
  console.log(array1[i])
}

let counter = 0;
while (counter < array1.length) {
  counter++;
}

var array1 = ['all', 'cows', 'are', 'big'];

for (let index in array1) {
  console.log(array1[index])
}

for (let element of array1) {
  console.log(element)
}

array1.forEach(function (element, index) {
  console.log(index)
})

array1.forEach(function (element, index) {
  console.log(element)
})

