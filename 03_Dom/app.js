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
//items[3].textContent = "Terzo elemento";

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
  //li.textContent = `${i} - forEach.`;
});

// query selector all
items = document.querySelectorAll("ui.collection li.collection-item");
items.forEach((i) => console.log(i));

const liOdd = document.querySelectorAll("li:nth-child(odd)");
//liOdd.forEach((li, i) => (li.textContent = `${i} - dispari.`));
const liEven = document.querySelectorAll("li:nth-child(even)");
//liEven.forEach((li, i) => (li.textContent = `${i} - pari.`));
liOdd.forEach((li) => (li.style.background = "#f3f3f3"));

// traversing DOM
let list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

console.log(listItem);
console.log("Child nodes:", list.childNodes);
console.log("Children:", list.children);
list.children[1].textContent = "Modificato da children.";
// cchildren of children
console.log("children of children:", list.children[3].children);
console.log("First child:", list.firstChild);
console.log("First element child:", list.firstElementChild);
console.log("Last child:", list.lastChild);
console.log("Last element child:", list.lastElementChild);
console.log("Elements count:", list.childElementCount);
// Parent
console.log("parent node:", listItem.parentNode);
console.log("parent element:", listItem.parentElement);
console.log("parent of parent element:", listItem.parentElement.parentElement);
// siblings
console.log("next sibling:", listItem.nextSibling);
console.log("next element sibling:", listItem.nextElementSibling);
console.log("prev sibling:", listItem.previousSibling);
console.log("prev element sibling:", listItem.previousElementSibling);

// Create new element
li = document.createElement("li");
li.className = "collection-item";
li.id = "new-element";
li.setAttribute("title", "New item");
li.appendChild(document.createTextNode("New item to append"));
list.appendChild(li);
document.querySelector("ul.collection").appendChild(li);
// create link
let link = document.createElement("a");
link.className = "delete-item secondary-content";
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);

// replace
const newHeading = document.createElement("h2");
newHeading.appendChild(document.createTextNode("Task list"));
const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");
cardAction.replaceChild(newHeading, oldHeading);
// remove
lis = document.querySelectorAll("li");
list = document.querySelector("ul");
lis[0].remove();
// remove child
list.removeChild(lis[3]);

// classes
const firstLi = document.querySelector("li:first-child");

console.log(firstLi);

//link = firstLi.children[0];
console.log("li class:", link.className, list.classList);
list.classList.add("test");
list.classList.remove("test");

// attributes
console.log(link.getAttribute("href"));
link.setAttribute("href", "http://google.it");
if (!link.hasAttribute("title")) {
  link.setAttribute("title", "new-title");
}

// Events
document.querySelector(".clear-tasks").addEventListener("click", (e) => {
  e.preventDefault();
  // event target
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList);
  // event type
  console.log(e.type);
  // time stamps
  console.log(e.timeStamp);
  // position

  //console.log(e.clientX, clientY, e.offsetX, e.offsetY);
});

// mouse events
const clearBtn = document.querySelector(".clear-tasks");
let card = document.querySelector(".card");
const heading = document.querySelector(".mouse-pos");

// event handler
const runEvent = (e) => {
  console.log(`Event type: ${e.type}`);
  if (e.type === "mousemove") {
    heading.innerText = `Mouse position: (${e.offsetX},${e.offsetY})`;
    document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
  }

  if (e.type === "mouseleave") {
    heading.innerText = "";
    document.body.style.background = "white";
  }
};
// subscribe events
clearBtn.addEventListener("click", runEvent);
clearBtn.addEventListener("dblclick", runEvent);
clearBtn.addEventListener("mousedown", runEvent);
clearBtn.addEventListener("mouseup", runEvent);
card.addEventListener("mouseenter", runEvent);
card.addEventListener("mouseleave", runEvent);
//card.addEventListener("mouseover", runEvent);
//card.addEventListener("mouseout", runEvent);
card.addEventListener("mousemove", runEvent);

// input events
const form = document.querySelector("form");
const taskInput = document.getElementById("task");
// clear input
taskInput.value = "";

// on form submit event handler
const onFormSubmit = (e) => {
  e.preventDefault();
  console.log("Form event:", e.type);
};

// on input key down event handler
const onInputChange = (e) => {
  console.log("Input event type:", e.type);
  console.log(e.target.value);
};

// subscribe event
form.addEventListener("submit", onFormSubmit);
taskInput.addEventListener("keydown", onInputChange);
taskInput.addEventListener("keyup", onInputChange);
//taskInput.addEventListener("keypress", onInputChange);
taskInput.addEventListener("focus", onInputChange);
taskInput.addEventListener("blur", onInputChange);
taskInput.addEventListener("cut", onInputChange);
taskInput.addEventListener("paste", onInputChange);
// general event
//taskInput.addEventListener("input", onInputChange);
taskInput.addEventListener("onchange", onInputChange);

// Evevnt bubblling
const taskTitle = document.querySelector(".card-title");
taskTitle.addEventListener("click", (e) => {
  console.log("card title");
});

card = document.querySelector(".card");
card.addEventListener("click", (e) => {
  console.log("card");
});
const col = document.querySelector(".col");
col.addEventListener("click", (e) => {
  console.log("col");
});

// Event delegation
/*
const deleteItem = document.querySelector(".delete-item");
deleteItem.addEventListener("click", (e) => {
  console.log("delete item");
});
*/

const deleteItem = (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
};

document.body.addEventListener("click", deleteItem);

// Local storage
localStorage.setItem("name", "Mario");
localStorage.removeItem("name");
// get elements from lcal storage
localStorage.setItem("name", "Mario");
localStorage.setItem("age", 45);
const myName = localStorage.getItem("name");
const myAge = localStorage.getItem("age");
console.log(`${myName} is ${myAge}.`);
// clear local storage
localStorage.clear();
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.getElementById("task").value;
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  // save task
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved.");
});

// get saved tasks
const tasks = JSON.parse(document.getItem("tasks"));
tasks.forEach((task, i) => console.log(`Task ${i}: ${task}`));

// Session storage
sessionStorage.setItem("name", "Mary");
