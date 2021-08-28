function isEquivalent(a, b) {
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);
  console.log(aProps);

  if (aProps.length != bProps.length) return false;

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];

    if (a[propName] !== b[propName]) return false;
  }
  return true;
}

// 프로퍼티 길이(갯수)가 다르거나 프로퍼티 값이 다르면 다른객체다.
console.log(isEquivalent({ 'hi': 12 }, { 'hi': 12 }));
console.log({ 'hi': 12 } == { 'hi': 12 })

let obj1 = { 'prop1': 'test', 'prop2': function () { } }
let obj2 = { 'prop1': 'test', 'prop2': function () { } }
console.log(isEquivalent(obj1, obj2))