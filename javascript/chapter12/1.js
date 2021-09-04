// 스택
function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
}

Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
}

Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
}

Stack.prototype.push = function (value) {
  this.array.push(value);
}

Stack.prototype.pop = function () {
  return this.array.pop();
}

let stack1 = new Stack();
console.log(stack1);

stack1.push(10);
console.log(stack1.peek())
stack1.push(5);
console.log(stack1.peek())



stack1.pop()
console.log(stack1)
stack1.pop()
console.log(stack1)

function stackAccessNthTopNode(stack, n) {
  let bufferArray = stack.getBuffer();
  if (n <= 0) throw 'error';

  let bufferStack = new Stack(bufferArray);

  while (--n !== 0) {
    bufferStack.pop();
  }
  return bufferStack.pop();
}

let stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log(stackAccessNthTopNode(stack2, 2));

function stackSearch(stack, element) {
  let bufferArray = stack.getBuffer();

  let bufferStack = new Stack(bufferArray);

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() == element) return true;
  }
  return false;
}