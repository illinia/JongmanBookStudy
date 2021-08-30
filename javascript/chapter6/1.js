var javaScriptObject = {};
var testArray = [1, 2, 3, 4];

javaScriptObject.array = testArray;
console.log(javaScriptObject)

javaScriptObject.title = 'Algorithms';
console.log(javaScriptObject);

function Exampleclass() {
  this.name = "javaScript";
}

var example1 = new Exampleclass();

Exampleclass.prototype.sayName = function () {
  console.log(this.name);
}

example1.sayName();

function Exampleclass(name, size) {
  this.name = name;
  this.size = size;
}

var example = new Exampleclass('Public', 5);
console.log(example)

console.log(example.name);
console.log(example.size);

function ExampleClass(name, size) {
  var privateName = name;
  var privateSize = size;

  this.getName = function () { return privateName; }
  this.setName = function (name) { privateName = name; }

  this.getSize = function () { return privateSize; }
  this.setSize = function (size) { privateSize = size; }
}

var example = new ExampleClass('sammie', 3);
example.setSize(12);
console.log(example.privateName);
console.log(example.getName())
console.log(example.size)
console.log(example.getSize())