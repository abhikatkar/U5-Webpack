
import "./index.css"
import Icon from "./logo.jpg"


const h1 = document.createElement("h1");
h1.innerText = "Welcome to Webpack todo";
h1.classList.add("redtext");

document.getElementById("root").appendChild(h1);


const img = document.createElement("img");
img.src = Icon;
img.classList.add("img")
document.getElementById("logo").append(img);

