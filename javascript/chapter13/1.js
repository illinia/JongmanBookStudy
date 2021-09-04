// 단일 연결 리스트 노드
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

// 단이 연결 리스트
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

let sll1 = new SinglyLinkedList();
sll1.insert(1);

