'use strict';

// // const Person = function (firstName, birthName) {
// //   console.log(this);
// // };

// // new Person('Rimrachai', 1999);

// // 1. New {empty} is created
// // 2. fuction is called, this =  {}
// // 3. {} linked to prototype
// // 4. fuction automatically return {}

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //but should never do this, and should use prototype inheritance
//   // this.calcAge = function () {
//   //   console.log(new Date().getFullYear() - this.birthYear);
//   // };
// };

// const rimrachai = new Person('Rimrachai', 1999);
// const natasha = new Person('Natasha', 2000);
// const john = new Person('John', 1998);

// // console.log(rimrachai, natasha, john);

// // console.log(john instanceof Person); // true

// //---- Prototype ----//
// // console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthYear);
// };

// // john.calcAge();
// // natasha.calcAge();

// Person.prototype.species = 'Homo Sapiens';

// // console.log(john.species, natasha.species);

// // console.log(john.__proto__ === Person.prototype);
// // console.log(Person.prototype.isPrototypeOf(john));
// // console.log(Person.prototype.isPrototypeOf(Person));

// // console.log(john.hasOwnProperty('firstName')); //true
// // console.log(john.hasOwnProperty('species')); //false

// // console.log(john.__proto__);

// //Prototype in Array
// const arr = [2, 4, 6, 8, 8, 9, 6, 5, 4];
// // console.log(arr.__proto__);

// // console.log(arr.__proto__ === Array.prototype);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// // console.log(arr.unique());

// // ***---ES6 CLASSES---*** //

// // class expression
// // const PersonCl = class {};

// //class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   //Instance methods
//   //methods will be added to .prototype property
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   }

//   // static methods, this is will not be added to .prototype property
//   static hey() {
//     console.log('Hey, there!👋');
//   }

//   get age() {
//     return new Date().getFullYear() - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name.`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }
// }

// const jessica = new PersonCl('Jessica Malcuva', 1999);

// // console.log(jessica);

// // jessica.calcAge();

// // console.log(PersonCl.prototype.isPrototypeOf(jessica));

// // And we can also add methods by menualy to protptype.
// PersonCl.prototype.greet = function () {
//   console.log(`Hey, ${this.fullName}`);
// };

// // jessica.greet();

// // PersonCl.hey();

// // 1. Classes are NOT hoisted
// // 2. Class are first-class citizes
// // 3. Claass are executed in strict mode

// // *--- Getters & Setters methos ---* //

// // In regular object
// const acount = {
//   owner: 'Rimrachai Marma',
//   movements: [250, 150, 200, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   }
// };

// // console.log(acount.latest);

// // acount.latest = 100;
// // console.log(acount.movements);

// //In Classes
// // console.log(jessica.age);
// // console.log(jessica.fullName);

///// ***----Inheritance----**** /////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const john = new Student('John', 1997, 'Computer Science');

// console.log(john);
// john.introduce();
// john.calcAge();

// ***---ES6 CLASSES---*** //

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Instance methods
  //methods will be added to .prototype property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  // static methods, this is will not be added to .prototype property
  static hey() {
    console.log('Hey, there!👋');
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name.`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always need to happen first.
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }
}

const natasha = new StudentCl('Natasa Maculva', 1998, 'Computer Science');

console.log(natasha);
natasha.calcAge();
natasha.introduce();
console.log(natasha.age);
