
// function Person(name, job, yearofbirth){
//   this.name=name;
//   this.job=job;
//   this.yearOfBirth=yearofbirth;
// }

// console.log(Person.prototype);

// Person.prototype.calculateAge=function(){
//     console.log("the age is"+ (2019- this.yearOfBirth));

//     console.log(Person.prototype);
// }

// let person1=new Person("Ravi","Developer",2000);
// let person2=new Person("Ramu","Engineer",1990);

// console.log(person1);
// console.log(person2);

// person1.calculateAge();
// person2.calculateAge();


//ES6 class prototypes and method overriding 

class Animal{
  constructor(name){
 this.name=name;
  }

  speak(){
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal{
  speak(){
    console.log(`${this.name} says wooofs`);
  }
}

const dog=new Dog("man");
dog.speak();


