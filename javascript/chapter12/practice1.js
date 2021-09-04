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

function TwoStackQueue() {
  this.inbox = new Stack();
  this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function (val) {
  this.inbox.push(val);
}

TwoStackQueue.prototype.dequeue = function () {
  if (this.outbox.isEmpty()) {
    while (!this.inbox.isEmpty()) {
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
}

let queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());