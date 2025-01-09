function Animal(type) {
    this.type = type;
  }
  
  Animal.prototype.eat = function() {
    console.log(`${this.type} is eating.`);
  };
  
  function Dog(name, type) {
    Animal.call(this, type);
    this.name = name;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} says Woof!`);
  };
  
  const dog = new Dog("Buddy", "Dog");
  dog.eat(); 
  dog.bark(); 