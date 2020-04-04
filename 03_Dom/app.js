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
