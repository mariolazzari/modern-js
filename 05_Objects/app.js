// obj litterals
let mario = { name: "Mario", age: 45 };
console.log("Obj litterals:", mario);

// constructor
function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);

  // compute age
  this.getAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  console.log("this inside constructor:", this);
}

console.log("this outside constructor:", this);

mario = new Person("Mario", "1975-03-28");
mary = new Person("Mariarosa", "1976-01-20");
console.log(`${mario.name} is ${mario.getAge()}.`);
//console.log(mario, mary);
