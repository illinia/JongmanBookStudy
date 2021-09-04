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

var queue1 = new Queue();
console.log(queue1);


var queue1 = new Queue();

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);

console.log(queue1);

queue1.dequeue();

console.log(queue1);

queue1.dequeue();
console.log(queue1);

// O(n)
function queueAccessNthTopNode(queue, n) {
  var bufferArray = queue.getBuffer();
  if (n <= 0) throw 'error';

  let bufferQueue = new Queue(bufferArray);

  while (--n !== 0) {
    bufferQueue.dequeue();
  }

  return bufferQueue.dequeue();
}
// O(n)
function queueSearch(queue, element) {
  let bufferArray = queue.getBuffer();

  let bufferQueue = new Queue(bufferArray);

  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() == element) return true;
  }

  return false;
}