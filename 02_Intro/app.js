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
