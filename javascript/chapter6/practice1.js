var emptyJSObj = {};
emptyJSObj['exampleKey'] = 'exampleValue';
emptyJSObj.exampleKey = 'examplevalue';

function Animal(name, animalType) {
  this.name = name;
  this.animalType = animalType;
}
Animal.prototype.sayName = function () {
  console.log(this.name);
}

Animal.prototype.sayAnimalType = function () {
  console.log(this.animalType);
}

function Dog(name) {
  Animal.call(this, name, 'Dog');
}

Dog.prototype = Object.create(Animal.prototype);

var myAnimal = new Animal('ditto', 'pokemon');
myAnimal.sayName()
myAnimal.sayAnimalType();

var myDog = new Dog('candy', 'dog');
myDog.sayName();
myDog.sayAnimalType();