// ====== Завдання 1 ========= *
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
const listOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories ${listOfCategories.length}`);
const categoriesGroup = listOfCategories.forEach((category) => {
    console.log("Category:", category.firstElementChild.textContent);
    console.log("Elements:", category.querySelectorAll("li").length);
});
// В результаті, в консолі будуть виведені наступні повідомлення.
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5