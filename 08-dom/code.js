const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redP = document.createElement("p");
redP.style.color = "red";

const h3 = document.createElement("h3");
h3.style.color = "blue";

const div = document.createElement("div");
div.style.border = "5px solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div!";
const otherP = document.createElement("p");
otherP.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(otherP);


container.appendChild(content);
container.appendChild(redP);
container.appendChild(h3);
container.appendChild(div);
