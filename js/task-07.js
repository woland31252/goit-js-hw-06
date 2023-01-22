// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
console.log(document);
console.dir(document);

const fontSizeContrl = document.getElementById("font-size-control");
const text = document.getElementById("text");
fontSizeContrl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
    fontSizeContrl.range = event.currentTarget.value;
    text.style.fontSize = `${event.target.value}px`;
}