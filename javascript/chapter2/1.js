// bottom 변수 선언은 맨 앞으로 이동하여 오류가 없다.
// 변수 호이스팅이다.
function scope1() {
  var top = 'top';
  bottom = 'bottom';
  console.log(bottom);

  var bottom;
}

scope1();

// 위의 코드와 동일하다.
function scope1() {
  var top = 'top';
  var bottom;
  bottom = 'bottom';
  console.log(bottom);
}

scope1();

// 에러가 없다
// var는 함수스코프로 동작해서 함수가 종료되기 전까진 유효하다
// 전역 스코프에서 선언된 것도 덮어씌운다.
function scope2(print) {
  if (print) {
    var insideIf = '12';
  }
  console.log(insideIf);
}

scope2(true);

// 위의 함수와 동일하다
function scope2(print) {
  var insideIf;

  if (print) {
    insideIf = '12';
  }
  console.log(insideIf);
}

scope2(true);

var a = 1;
function four() {
  if (true) {
    var a = 4;
  }
  console.log(a);
}

four()

// let을 사용해 선언된 변수는 가까운 블록범위를 갖는다.
// 에러
function scope3(print) {
  if (print) {
    let insideIf = '12';
  }
  console.log(insideIf);
}
scope3(true);