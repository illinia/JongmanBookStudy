// 선형 탐사
function HashTable(size) {
  this.size = size;
  this.keys = this.initArray(size);
  this.values = this.initArray(size);
  this.limit = 0;
}

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw 'hash table is full';

  var hashedIndex = this.hash(key);

  while (this.keys[hashedIndex]) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }

  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
}

HashTable.prototype.get = function (key) {
  let hashedIndex = this.hash(key);
  while (this.keys[hashedIndex] != key) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }
  return this.values[hashedIndex];
}

HashTable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw 'must be int';
  return key % this.size;
}

HashTable.prototype.initArray = function (size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(null);
  }
  return array;
}

var exampletable = new HashTable(13);
exampletable.put(7, 'hi');
exampletable.put(20, 'hello');
exampletable.put(33, 'sunny');

console.log(exampletable)