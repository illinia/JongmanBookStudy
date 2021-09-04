function Queue(array) {
  this.array = [];
  if (array) this.array = array;
}

Queue.prototype.getBuffer = function () {
  return this.array.slice();
}

Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
}
Queue.prototype.peek = function () {
  return this.array[0];
}

Queue.prototype.enqueue = function (value) {
  return this.array.push(value);
}

// O(n) 남은 인덱스를 연속으로 하나씩 감소시키기 때문에
Queue.prototype.dequeue = function () {
  return this.array.shift();
}

function QueueStack() {
  this.inbox = new Queue();
}

QueueStack.prototype.push = function (val) {
  this.inbox.enqueue(val);
}

QueueStack.prototype.pop = function () {
  let size = this.inbox.array.length - 1;
  let counter = 0;
  let bufferQueue = new Queue();

  while (++counter <= size) {
    bufferQueue.enqueue(this.inbox.dequeue());
  }

  let popped = this.inbox.dequeue();
  this.inbox = bufferQueue;
  return popped;
}

let stack = new QueueStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());