// convert document nodes to an array
let val = document.all;
console.log(val);
// first element
console.log(document.all[2]);
console.log("Total DOM elements:", document.all.length);
console.log("Document head:", document.head);
console.log("Document body:", document.body);
console.log("Content type:", document.contentType);
console.log("Doamin:", document.domain);
console.log("URL:", document.URL);

// form selector
console.log("Document forms:", document.forms);
console.log("Document form1:", document.forms[0]);
console.log("Document form1 method:", document.forms[0].method);

// link selector
console.log("Document links:", document.links);
console.log("Link1 classes:", document.links[0].className);
console.log("Link1 class list:", document.links[0].classList);
console.log("Link1 first class:", document.links[0].classList[0]);

// script selecter
console.log("Document scripts:", document.scripts);
console.log("Script src:", document.scripts[2].getAttribute("src"));

// cast html collection to array
let scripts = Array.from(document.scripts);
scripts.forEach((script) => console.log(script.getAttribute("src")));

// get element by id
console.log("Task title:", document.getElementById("task-title"));
console.log("Task title ID:", document.getElementById("task-title").id);
console.log(
  "Task title Class:",
  document.getElementById("task-title").className
);

// change style
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "#fff";
document.getElementById("task-title").style.padding = "5px";
//document.getElementById("task-title").style.display = "none";

// change content
document.getElementById("task-title").textContent = "Task list";
document.getElementById("task-title").innerHTML =
  '<span style="color:red">Tasks list</span>';

// query selector
console.log("Title id:", document.querySelector("#task-title"));
console.log("Task class:", document.querySelector(".card-title"));
console.log("First H5:", document.querySelector("h5"));
// nested classes
document.querySelector("ul li").style.color = "blue";
// pseudo classes
document.querySelector("ul li:last-child").style.color = "red";
document.querySelector("ul li:nth-child(3").style.color = "yellow";
document.querySelector("ul li:nth-child(4").textContent = "4th task";

// query selector all
console.log("Total tasks:", document.querySelectorAll("li").length);

// get elements by class name
let items = document.getElementsByClassName("collection-item");
console.log("Collection items:", items);
let firstItem = items[0];
console.log("First element:", firstItem);
// set first element
firstItem.style.color = "red";
items[3].textContent = "Terzo elemento";

// get element by tag name
let lis = document.getElementsByTagName("li");
console.log("LI items:", lis);
let firstLI = lis[0];
console.log("First LI element:", firstLI);
// set first element
firstLI.style.color = "red";
lis[3].textContent = "Quarto LI";
// convert html collection
lis = Array.from(lis);
lis.reverse();
lis.forEach((li, i) => {
  console.log(li.className);
  li.textContent = `${i} - forEach.`;
});

// query selector all
items = document.querySelectorAll("ui.collection li.collection-item");
items.forEach((i) => console.log(i));

const liOdd = document.querySelectorAll("li:nth-child(odd)");
liOdd.forEach((li, i) => (li.textContent = `${i} - dispari.`));
const liEven = document.querySelectorAll("li:nth-child(even)");
liEven.forEach((li, i) => (li.textContent = `${i} - pari.`));
liOdd.forEach((li) => (li.style.background = "#f3f3f3"));
