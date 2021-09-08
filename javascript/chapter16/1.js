function Heap() {
  this.items = [];
}

Heap.prototype.swap = function (index1, index2) {
  var temp = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items[index2] = temp;
}

Heap.prototype.parentIndex = function (index) {
  return Math.floor((index - 1) / 2);
}

Heap.prototype.leftChildIndex = function (index) {
  return index * 2 + 1;
}

Heap.prototype.rightChildrenIndex = function (index) {
  return index * 2 + 2;
}

Heap.prototype.parent = function (index) {
  return this.items[this.parentIndex(index)];
}

Heap.prototype.leftChild = function (index) {
  return this.items[this.leftChildIndex(index)];
}

Heap.prototype.rightChild = function (index) {
  return this.items[this.rightChildrenIndex(index)];
}

Heap.prototype.peek = function (item) {
  return this.items[0];
}

Heap.prototype.size = function () {
  return this.items.length;
}

function MinHeap() {
  this.items = [];
}

MinHeap.prototype = Object.create(Heap.prototype);

MinHeap.prototype.bubbleDown = function () {
  var index = 0;
  while (this.leftChild(index) && (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])) {
    var smallerIndex = this.leftChildIndex(index);
    if (this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]) {
      smallerIndex = this.rightChildrenIndex(index);
    }
    this.swap(smallerIndex, index);
    index = smallerIndex;
  }
}

MinHeap.prototype.bubbleUp = function () {
  var index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
}

MinHeap.prototype.add = function (item) {
  this.items[this.items.length] = item;
  this.bubbleUp();
}

MinHeap.prototype.poll = function () {
  var item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
}

// var mh1 = new MinHeap();
// mh1.add(1);
// mh1.add(10);
// mh1.add(5);
// mh1.add(100);
// mh1.add(8);

// console.log(mh1.poll());
// console.log(mh1.poll());
// console.log(mh1.poll());
// console.log(mh1.poll());
// console.log(mh1.poll());

function MaxHeap() {
  this.items = [];
}

MaxHeap.prototype = Object.create(Heap.prototype);
MaxHeap.prototype.add = function (item) {
  this.items[this.items.length] = item;
  this.bubbleUp();
}

MaxHeap.prototype.poll = function () {
  var item = this.items[0];
  this.items[0] = this.items[this.items.length - 1];
  this.items.pop();
  this.bubbleDown();
  return item;
}

MaxHeap.prototype.bubbleDown = function () {
  var index = 0;
  while (this.leftChild(index) && (this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index])) {
    var biggerIndex = this.leftChildIndex(index);
    if (this.rightChild(index) && this.rightChild(index) > this.items[biggerIndex]) {
      biggerIndex = this.rightChildrenIndex(index);
    }
    this.swap(biggerIndex, index);
    index = biggerIndex;
  }
}

MaxHeap.prototype.bubbleUp = function () {
  var index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) < this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
}

// var mh2 = new MaxHeap();
// mh2.add(1);
// mh2.add(10);
// mh2.add(5);
// mh2.add(100);
// mh2.add(8);

// console.log(mh2.poll());
// console.log(mh2.poll());
// console.log(mh2.poll());
// console.log(mh2.poll());
// console.log(mh2.poll());

// 연습문제 1
function MedianHeap() {
  this.minHeap = new MinHeap();
  this.maxHeap = new MaxHeap();
}

MedianHeap.prototype.add = function (value) {
  if (value > this.median()) this.minHeap.add(value);
  else this.maxHeap.add(value);

  if (this.minHeap.size() - this.maxHeap.size() > 1) {
    this.maxHeap.add(this.minHeap.poll())
  }

  if (this.maxHeap.size() - this.minHeap.size() > 1) {
    this.minHeap.add(this.maxHeap.poll())
  }
}

MedianHeap.prototype.median = function () {
  if (this.minHeap.size() == 0 && this.maxHeap.size() == 0) {
    return Number.NEGATIVE_INFINITY;
  } else if (this.minHeap.size() == this.maxHeap.size()) {
    return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
  } else if (this.minHeap.size() > this.maxHeap.size()) {
    return this.minHeap.peek();
  } else {
    return this.maxHeap.peek();
  }
}

// var medianH = new MedianHeap();

// medianH.add(12);
// console.log(medianH.median());
// medianH.add(2);
// console.log(medianH.median());
// medianH.add(23);
// console.log(medianH.median());
// medianH.add(13);
// console.log(medianH.median());

var array1 = [12, 3, 13, 4, 2, 40, 23];

function getKthSmallestElement(array, k) {
  var minH = new MinHeap();
  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    minH.add(array[i]);
  }
  for (let i = 1; i < k; i++) {
    minH.poll();
  }
  return minH.poll();
}

// console.log(getKthSmallestElement(array1, 2));
// console.log(getKthSmallestElement(array1, 1));
// console.log(getKthSmallestElement(array1, 7));

function getKthBiggestElement(array, k) {
  var maxH = new MaxHeap();
  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    maxH.add(array[i]);
  }
  for (let i = 1; i < k; i++) {
    maxH.poll();
  }
  return maxH.poll();
}

console.log(getKthBiggestElement(array1, 2))
console.log(getKthBiggestElement(array1, 1))
console.log(getKthBiggestElement(array1, 7))
