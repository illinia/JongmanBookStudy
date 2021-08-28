// 문자열 분해
var test1 = 'chicken,noodle,soup,broth';
console.log(test1.split(','));

// 문자열 바꾸기
console.log('Wizard of Oz'.replace('Wizard', 'Witch'));

var str = "JavaScript DataStructures";
var n = str.search(/DataStructures/);
console.log(n)

var reg = /\d+/;
console.log(reg.test('123'));
console.log(reg.test('33asd'));
console.log(reg.test('5asdsdf'));
console.log(reg.test('asdf'));

var reg = /^\d+$/;
console.log(reg.test('123'));
console.log(reg.test('123a'));
console.log(reg.test('a'));

var reg = /^[0-9]*.[0-9]*[1-9]+$/;
console.log(reg.test('12'))
console.log(reg.test('12.2'))

var reg = /[a-zA-Z0-9]/;
console.log(reg.test('somethingELSE'));
console.log(reg.test('hello'));
console.log(reg.test('123a'));
console.log(reg.test('123'));
console.log(reg.test('^'));