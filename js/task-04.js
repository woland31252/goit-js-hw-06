// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.


const buttonMinus = document.querySelectorAll('button')[0];
const buttonPlus = document.querySelectorAll('button')[1];
let counterValue = 0;
buttonMinus.addEventListener('click', (decrClick) => {
    counterValue = counterValue - 1;
    const value = document.querySelector('span');
    value.textContent = counterValue;
})

buttonPlus.addEventListener('click', (incrClick) => {
    counterValue += 1;
    const value = document.querySelector('span');
    value.textContent = counterValue;
})


// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
