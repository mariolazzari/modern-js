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
