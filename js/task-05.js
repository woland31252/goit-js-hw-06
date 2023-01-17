// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const text = {
    input: document.getElementById("name-input"),
    output: document.getElementById("name-output")
};
text.input.addEventListener('input', textInput);

function textInput(event) {
    text.output.textContent = event.currentTarget.value || 'Anonymous';

};