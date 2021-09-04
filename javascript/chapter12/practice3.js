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

function Customer(name, order) {
  this.name = name;
  this.order = order;
}

function Cashier() {
  this.customers = new Queue();
}

Cashier.prototype.addOrder = function (customer) {
  this.customers.enqueue(customer);
}

Cashier.prototype.deliverOrder = function () {
  let finishedCustomer = this.customers.dequeue();

  console.log(finishedCustomer.name + ', your ' + finishedCustomer.order + ' is ready!');
}

let cashier = new Cashier();
let customer1 = new Customer('Jin', 'Fries');
let customer2 = new Customer('Sammie', 'Burder');
let customer3 = new Customer('Peter', 'Drink');

cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);

cashier.deliverOrder();
cashier.deliverOrder();
cashier.deliverOrder();