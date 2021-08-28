// 문자열 검색
console.log('Red Dragon'.indexOf('Red'));
console.log('Red Dragon'.indexOf('Reds'));

console.log('Red Dragon'.indexOf('Dragon', 0));
console.log('Red Dragon'.indexOf('Dragon', 4));
console.log('Red Dragon'.indexOf('', 2));

function existsInString(stringValue, search) {
  return stringValue.indexOf(search) !== -1;
}

console.log(existsInString('red', 'r'));
console.log(existsInString('red', 'b'));

var str = "he's my king from this day until his last day";
var count = 0;
var pos = str.indexOf('a')
while (pos !== -1) {
  count++;
  pos = str.indexOf('a', pos + 1);
}
console.log(count);

console.log('Red Dragon'.startsWith('Red'));
console.log('Red Dragon'.endsWith('Dragon'));
console.log('Red Dragon'.startsWith('Dragon'));
console.log('Red Dragon'.endsWith('Red'));