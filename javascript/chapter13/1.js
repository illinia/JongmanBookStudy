// 단일 연결 리스트 노드
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

// 단일 연결 리스트
function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size = 0;
}

// O(n)
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) this.head = new SinglyLinkedListNode(value);
  else {
    let temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
}

SinglyLinkedList.prototype.remove = function (value) {
  let currentHead = this.head;
  if (currentHead.data == value) {
    this.head = currentHead.next;
    this.size--;
  } else {
    let prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }
  }
}

// var sll1 = new SinglyLinkedList();
// sll1.insert(1);

SinglyLinkedList.prototype.deleteAtHead = function () {
  var toReturn = null;

  if (this.head !== null) {
    toReturn = this.head.data;
    this.head = this.head.next;
    this.size--;
  }
  return toReturn;
}

// var sll1 = new SinglyLinkedList();
// sll1.insert(1);
// sll1.insert(12);
// sll1.insert(20);
// sll1.deleteAtHead();

SinglyLinkedList.prototype.find = function (value) {
  var currentHead = this.head;
  while (currentHead.next) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
}

function reverseSingleLinkedList(sll) {
  var node = sll.head;
  var prev = null;
  while (node) {
    var temp = node.next;
    node.next = prev;
    prev = node;
    if (!temp) break;
    node = temp;
  }
  return node;
}

// O(n^2)
function deleteDuplicateInUnsortedSll(sll1) {
  var track = [];

  var temp = sll1.head;
  var prev = null;
  while (temp) {
    if (track.indexOf(temp.data) >= 0) {
      prev.next = temp.next;
      sll1.size--;
    } else {
      track.push(temp.data);
      prev = temp;
    }
    temp = temp.next;
  }
  console.log(temp);
}

function deleteDuplicateInUnsortedSllBest(sll1) {
  var track = {};

  var temp = sll1.head;
  var prev = null;
  while (temp) {
    if (track[temp.data]) {
      prev.next = temp.next;
    } else {
      track[temp.data] = true;
      prev = temp;
    }
    temp = temp.next;
  }
  console.log(temp);
}