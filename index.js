
document.title = "Fruits & Vegetables Corp";


let h1 = document.querySelector("h1");
h1.innerHTML = "Fruits &amp; Vegetables Corp";


let vegetable = document.querySelector("ul li:last-child a");
vegetable.textContent = "Vegetables";
vegetable.setAttribute("href", "#vegetables");


let about = document.querySelector("#about");
let main = document.querySelector("#main");
main.insertBefore(about, about.previousElementSibling);


let h2 = document.createElement("h2");
 h2.textContent ="About";
about.replaceChild(h2, about.childNodes[0]);

let contact = document.querySelector("#contact");
let h2b = document.createElement("h2");
h2b.textContent = "Contact";
contact.replaceChild(h2b, contact.childNodes[0]);


let p = document.createElement("p");
about.appendChild(p);
let text =  document.createTextNode("We're the best in fruits & vegetables");
p.appendChild(text);


let th = document.createElement("th");
let th2 = document.createElement("th");
let row = document.querySelector("table thead tr");
row.appendChild(th).textContent="Name";
row.appendChild(th2).textContent="Email";

row.deleteCell(0);
row.deleteCell(0);


addCSS('style.css');

function addCSS(filename){
 let head = document.getElementsByTagName('head')[0];
 let style = document.createElement('link');

 style.href = 'main.css';
 style.type = 'text/css';
 style.rel = 'stylesheet';
 head.append(style);
}
