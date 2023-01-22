
// HTML містить порожній список ul#ingredients.
// JavaScript містить масив рядків.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.getElementById("ingredients");
console.log(ingredients);

const makeList = ingredients => {
  return ingredients.map(ingredient => {
    const liElem = document.createElement('li');
    liElem.textContent = ingredient;
    return liElem;
  });
};

const list = makeList(ingredients);
ulList.append(...list);

// for (const ingredient of ingredients) {
//   const liElem = document.createElement("li");
//   liElem.textContent = ingredient;
//   ulList.append(liElem);
// };

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.