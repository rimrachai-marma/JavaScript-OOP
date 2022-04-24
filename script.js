'use strict';

// const Person = function (firstName, birthName) {
//   console.log(this);
// };

// new Person('Rimrachai', 1999);

// 1. New {empty} is created
// 2. fuction is called, this =  {}
// 3. {} linked to prototype
// 4. fuction automatically return {}

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //but should never do this, and should use prototype inheritance
  // this.calcAge = function () {
  //   console.log(new Date().getFullYear() - this.birthYear);
  // };
};

const rimrachai = new Person('Rimrachai', 1999);
const natasha = new Person('Natasha', 2000);
const john = new Person('John', 1998);

// console.log(rimrachai, natasha, john);

// console.log(john instanceof Person); // true

//---- Prototype ----//
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

// john.calcAge();
// natasha.calcAge();

Person.prototype.species = 'Homo Sapiens';

// console.log(john.species, natasha.species);

// console.log(john.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(john));
// console.log(Person.prototype.isPrototypeOf(Person));

// console.log(john.hasOwnProperty('firstName')); //true
// console.log(john.hasOwnProperty('species')); //false

// console.log(john.__proto__);

//Prototype in Array
const arr = [2, 4, 6, 8, 8, 9, 6, 5, 4];
// console.log(arr.__proto__);

// console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

// ***---ES6 CLASSES---*** //

// class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1999);

// console.log(jessica);

// jessica.calcAge();

// console.log(PersonCl.prototype.isPrototypeOf(jessica));

// And we can also add methods by menualy to protptype.
PersonCl.prototype.greet = function () {
  console.log(`Hey, ${this.firstName}`);
};

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Claass are executed in strict mode
