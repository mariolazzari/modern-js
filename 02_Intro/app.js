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
const person = { name: "Mario" };
console.log("Person:", person);
person.name = "Maria";
console.log("Person:", person);
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
numbers.unshift(0);
console.log(numbers);
// numbers = [] -> error

// Primitive data type
console.log(typeof name);
const age = 45;
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
const today = new Date();
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
// concat
console.log(firstName + lastName);
val = firstName + " ";
val += lastName;
console.log(val);
const age = 44;
console.log(val + " is " + age);
