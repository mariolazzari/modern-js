// obj litterals
let mario = { name: "Mario", age: 45 };
console.log("Obj litterals:", mario);

// constructor
function Person(name, surname, dob) {
  this.firstName = name;
  this.lastName = surname;
  this.birthday = new Date(dob);

  // compute age
  /* move func in prototype
  this.getAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  */

  console.log("this inside constructor:", this);
}

// add compute age func to prototype
Person.prototype.getAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

console.log("this outside constructor:", this);

mario = new Person("Mario", "Lazzari", "1975-03-28");
mary = new Person("Mariarosa", "Sbardellati", "1976-01-20");
console.log(`${mario.firstName} is ${mario.getAge()}.`);
//console.log(mario, mary);

// Bultin constructors
let name1 = "Mario";
let name2 = new String("Mario");
name2.foo = "bar";
console.log(name1, typeof name1);
console.log(name2, typeof name2);
// equality
if (name1 === "Mario") {
  console.log("name1 is ===");
} else {
  console.log("name1 is ==");
}

if (name2 === "Mario") {
  console.log("name2 is ===");
} else {
  console.log("name2 is ==");
}

// number
const num1 = 5;
const num2 = new Number(5);
console.log(num1, num2);

// boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool1, bool2);

// function
const getSum1 = (x, y) => x + y;
const getSum2 = new Function("x", "y", "return x + y");
console.log(getSum1(1, 1), getSum2(1, 1));

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });
console.log(john1, john2);

// Arrays
const arr1 = [1, 2, 3];
const arr2 = new Array(1.2, 3);
console.log(arr1, arr2);

// regEx
const regex1 = /\w+/;
const regex2 = new RegExp("\\w+");
console.log(regex1, regex2);

// Prototypes: Person proto, Object proto
console.log(mario);
// add getFullName func to prototype
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(mary.getFullName(), mary.getAge());

// setter
Person.prototype.getsMarried = function (surname) {
  this.lastName = surname;
};

mary.getsMarried("Lazzari");
console.log(mary.getFullName(), mary.getAge());

// Objct property
console.log(mary.hasOwnProperty("firstName"));

// Inheritance
Person.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

console.log(mary.greeting());

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit methods
Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const customer1 = new Customer("Customer", "One", "030 987654321", "Basic");
console.log(customer1);
console.log(customer1.greeting());
// overrides
Customer.prototype.greeting = function () {
  return "Welcome to the company " + this.firstName + " " + this.lastName;
};
customer1.greeting();

// Object create
const personPrototypes = {
  greeting: function () {
    return `Hello ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (lastName) {
    this.lastName = lastName;
  },
};

const mary2 = Object.create(personPrototypes);
mary2.firstName = "Mariarosa";
mary2.lastName = "Sbardellati";
mary2.age = 44;
mary2.getsMarried("Lazzari");
console.log(mary2.greeting());

const mario2 = Object.create(personPrototypes, {
  firstName: { value: "Mario" },
  lastName: { value: "Lazzari" },
  age: { value: 45 },
});
console.log(mario2.greeting());

// Classes
class Person2 {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }

  getAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(lastName) {
    this.lastName = lastName;
  }

  // static method
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary3 = new Person2("Mariarosa", "Sbardellati", "1976-01-20");
console.log(mary3, mary3.greeting(), mary3.getAge());
console.log(Person2.addNumbers(1, 2));

// subclass
class Customer2 extends Person2 {
  constructor(firstName, lastName, phone, profile) {
    super(firstName, lastName);
    this.profile = phone;
    this.profile = profile;
  }

  static getCost() {
    return 500;
  }
}

const customer2 = new Customer2("Customer", "Two", "030 987654", "Basic");
console.log(customer2);
console.log(customer2.greeting());
console.log(Customer2.getCost());
