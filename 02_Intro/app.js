// clear console

// log to console
console.log("Section 02: intro.");
console.log(123);
console.log(true);
console.log([1, 2, 3]);

// log obj
const obj = { id: 1, name: "mario" };
console.log(obj);
console.table(obj);

// error logging
console.error("this is an error.");
console.warn("this is a warning.");

// console time
console.time("for");
for (let i = 0; i < 1000; i++) {
  console.log("time");
}
console.timeEnd("for");

// var
/*
var name = "Mario Lazzari";
console.log(name);
name = "Maria Lazzari";
console.log(name);
*/

// let
let name;
console.log("name", name);
name = "Mario Lazzari";
console.log(name);
name = "Maria Lazzari";
console.log(name);

// const
const pi = 3.14;
console.log("pi:", pi);
//pi = 0 -> error
let person = { name: "Mario" };
console.log("Person:", person);
person.name = "Maria";
console.log("Person:", person);
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
// numbers = [] -> error

// Primitive data type
console.log(typeof name);
let age = 45;
console.log(typeof age);
const hasKids = false;
console.log(typeof hasKids);
const car = null;
console.log(typeof car);
let undef = undefined;
console.log(typeof undef);
const sym = Symbol();
console.log(typeof sym);

// Reference data types
const hobbies = ["movies", "music"];
console.log(typeof hobbies);
const address = { city: "Rome", street: "Piazza Navona 1" };
console.log(typeof address);
let today = new Date();
console.log(today);
console.log(typeof today);

// type casting
let val;
val = 3;
// number to string
val = String(val);
console.log(val);
console.log(typeof val);
// bool to string
val = String(true);
console.log(val);
console.log(typeof val);
// date to string
val = String(new Date());
console.log(val);
console.log(typeof val);
// array to string
val = String([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);
// toString
val = (5).toString();
console.log(val);
console.log(typeof val);

// Output
val = Number("3.123456");
console.log(val.toFixed(2));
console.log(typeof val);
// string to number
val = Number("5");
console.log(val, typeof val);
val = Number(true);
console.log(val, typeof val);
val = Number(false);
console.log(val, typeof val);
val = Number(null);
console.log(val, typeof val);
val = Number("hello");
console.log(val, typeof val);
val = Number([1, 2, 3]);
console.log(val, typeof val);

// parse
val = parseInt("100.30");
console.log(val);
val = parseFloat("100.30");
console.log(val);
val = "test";

// types example
const x = "5" + 6;
console.log(x);

// Math
const num1 = 100;
const num2 = 50;
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;
console.log(val);

const { PI, E } = Math;
console.log(`pi = ${PI}, e = ${E}`);
console.log(`Round(pi) = ${Math.round(PI)}`);
console.log(`Ceil(pi) = ${Math.ceil(PI)}`);
console.log(`Floor(pi) = ${Math.floor(PI)}`);
console.log("sqrt(64) = ", Math.sqrt(64));
console.log("abs(-3) = ", Math.abs(-3));
console.log("3^2 = ", Math.pow(3, 2));
console.log("min(1,2,3) = ", Math.min(1, 2, 3));
console.log("max(1,2,3) = ", Math.max(1, 2, 3));
console.log("rand = ", Math.random());
console.log("Random number [0,20] = ", Math.floor(Math.random() * 20 + 1));

// Strings
const firstName = "Mario";
const lastName = "Lazzari";
console.log(firstName + lastName);
val = firstName + " ";
val += lastName;
console.log(val);
console.log(val + " is " + age);
console.log("Mario has " + firstName.length + " chars.");
console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());
console.log(firstName[0]);
console.log(firstName.indexOf("a"));
console.log(lastName.lastIndexOf("a"));
console.log(lastName.charAt(1));
console.log("Last char:", firstName.charAt(firstName.length - 1));
console.log(firstName.substr(0, 3));
console.log(firstName.slice(1, 3));
const str = "Hello there! My name is Mario.";
val = str.split(" ");
console.log(val);
const fullName = firstName + " " + lastName;
console.log(fullName.replace("Mario", "Maria"));
console.log(fullName.includes(lastName));

// Template litterals
const job = "Developer";
const city = "Coccaglio";
const hi = name => `Hello ${name}`;

let html = `<ul>
  <li> Name: ${name}</li>
  <li> Age: ${age}</li>
  <li> Jpb: ${job}</li>
  <li> City: ${city}</li>
  <li> ${hi(name)}</li>
  <li> ${age > 35 ? "Senior" : "Junior"}</li>
 </ul>`;

document.body.innerHTML = html;

// Array
numbers = [44, 89, 74, 23, 12, 99];
const numebrs2 = new Array(22, 33, 44, 55, 66);
const fruit = ["apple", "pear", "orange", "banana"];
const mixed = [22, "hello", true, undefined, null];
console.log(mixed);
console.log("numbers count:", numbers.length);
console.log("numbers is an array:", Array.isArray(numbers));
console.log("4th element:", numbers[3]);
numbers[2] = 100;
console.log(numbers);
console.log("Index of 100:", numbers.indexOf(100));
numbers.push(250);
console.log("push:", numbers);
numbers.unshift(999);
console.log("unshift:", numbers);
const pop = numbers.pop();
console.log(numbers, pop);
const shift = numbers.shift();
console.log(numbers, shift);
const splice = numbers.splice(1, 3);
console.log(splice);
console.log("reverse:", fruit.reverse());
console.log("concat", numbers.concat(numebrs2));
console.log("sort:", fruit.sort());
// sort numbers with compare
const asc = numbers.sort((x, y) => x - y);
console.log(asc);
const desc = numbers.sort((x, y) => y - x);
console.log(desc);
// find
const under50 = numbers.find(x => x < 50);
console.log(under50);
const over50 = numbers.find(x => x < 50);
console.log(over50);

// objects
person = {
  firstName: "Mario",
  lastName: "Lazzari",
  age: 44,
  address: {
    city: "Coccaglio"
  },
  hobbies: ["sports", "tv"],
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person);
console.log(person.firstName);
console.log(person.getFullName());
const people = [person];
console.log(people);

// Dates
today = new Date();
console.log(today);
console.log(typeof today);
let birthday = new Date("03-28-1975 04:00");
console.log(birthday);
birthday = new Date("January 20 1976");
console.log(birthday);
console.log("month:", birthday.getMonth());
console.log("date", birthday.getDate());
console.log("day", birthday.getDay());
console.log("timestamp", birthday.getTime());
birthday.setMonth(2);
console.log("set march", birthday);

// IF statement
const id = 100;
if (id == 100) {
  console.log("id is 100");
} else {
  console.log("id is NOT 100");
}

// not equal
if (id != 100) {
  console.log("id in NOT equal to 100");
}

// if equal value and type
if (id === "100") {
  console.log("id is a string equal 100.");
} else {
  console.log("id is NOT a string equal 100.");
}

// test not defined
if (typeof ID === "undefined") {
  console.log("ID is not defined");
}

// greater / lesss
if (id > 200) {
  console.log("id is greater than 200.");
} else {
  console.log("id is less than 200.");
}

// if else
const color = "yellow";
if (color === "red") {
  console.log("color is red");
} else if (color === "blue") {
  console.log("color is blue");
} else {
  console.log("color is yellow");
}

// logical op
name = "Mario";
age = 45;

if (age > 0 && age < 12) {
  console.log(`${name} is a kid`);
} else if (age >= 12 && age < 18) {
  console.log(`${name} is a guy`);
} else {
  console.log(`${name} is a man`);
}

if (age < 15 || age > 65) {
  console.log(`${name} cannot run a race.`);
} else {
  console.log(`${name} can run a race.`);
}

// ternary operator
console.log(
  id === 100 ? `${id} is equal to 100.` : `${id} is NoT equal to 100.`
);

// switch
switch (color) {
  case "red":
    console.log("color id red.");
    break;
  case "blue":
    console.log("color id blue.");
  default:
    console.log("color is yellow.");
}

let day = "Today is ";

switch (new Date().getDay()) {
  case 0:
    day += "Sunday";
    break;
  case 1:
    day += "Monday";
    break;
  case 2:
    day += "Tuesday";
    break;
  case 3:
    day += "Wensday";
    break;
  case 4:
    day += "Thirsday";
    break;
  case 5:
    day += "Friday";
    break;
  case 6:
    day += "Sunday";
    break;
  default:
    days += "Unkwown";
}

console.log(day);

// functions
function greet(firstName = "", lastName = "") {
  //console.log("Hello");
  return `Hello ${firstName} ${lastName}.`;
}
console.log(greet("Mario"));

// function expressions
const square = (x = 1) => x * x;
console.log("3^2 = ", square(3));

// immediatelly invocable
(() => console.log("Immediatelly invocked!"))();
(name => console.log(`Hello ${name}`))("Mary");

// property methods
const todo = {
  add() {
    console.log("Add todo");
  },
  edit(id) {
    console.log("Edit todo", id);
  }
};

todo.delete = function(id) {
  console.log("Delete todo", id);
};

todo.add();
todo.edit(1);
todo.delete(2);
