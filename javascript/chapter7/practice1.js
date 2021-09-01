function someLargeArray() {
  return new Array(1000000);
}
var exampleObject = {
  'prop1': someLargeArray(),
  'prop2': someLargeArray(),
}
function printProperty(prop) {
  console.log(prop);
}
printProperty(exampleObject['prop1']);
