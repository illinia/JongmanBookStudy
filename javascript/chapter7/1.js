// // memory() 함수가 5kb데이터와 함께 배열을 반환한다 가장
// var foo = {
//   bar1: memory(),
//   bar2: memory(),
// }

// // 이 함수는 10kb메모리를 참조한다.
// function clickEvent() {
//   alert(foo.bar1[0]);
// }

// {/* <div id="one">One</div>
// <div id="two">Two</div> */}

// // two가 제거 되었더라도 계속 two를 참조하려 시도한다.
// var one = document.getElementById('one');
// var two = document.getElementById('two');
// one.addEventListener('click', function () {
//   // 함수안에서 할당을 하면 메모리 누수를 피할 수 있다.
//   // var two = document.getElementById('two');
//   two.remove();
//   console.log(two);
// })
// // 클릭 핸들러를 사용한 뒤 등록 해지하는 방법이있다.
// one.removeEventListener('click');

// 전역변수는 window 전역객체에 포함되어 메모리에 존재한다.
// var a = 'apples';
// b = 'orange';

// console.log(window.a);
// console.log(window.b);

var test = {
  prop1: 'test'
}
// 객체 전체를 매개변수로 전달하는 대신에
function printProp1(test) {
  console.log(test.prop1);
}

printProp1(test);

var test = {
  prop1: 'test'
}
// 속성을 전달한다.
function printProp1(prop1) {
  console.log(prop1);
}

printProp1(test.prop1);

var test = {
  prop1: 'test'
}
console.log(test.prop1);
// 객체의 속성 제거
delete test.prop1;
console.log(test.prop1)