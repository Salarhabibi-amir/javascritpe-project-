const body = document.querySelector("body");
const button = document.querySelector("button");
const color = ["red", "black", "white", "blue", "green", "teal", "purple"];
body.style.backgroundColor = "violet";
button.addEventListener("click", changBackground)

function changBackground() {
    index = parseInt(Math.random() * color.length);
    body.style.backgroundColor = color[index];
}