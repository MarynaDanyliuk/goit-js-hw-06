const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

console.log(ingredients);

const ingredientsEl = ingredients.map((ingridient) => {
  const ingredientEl = document.createElement(`li`);
  ingredientEl.classList.add(`item`);
  ingredientEl.textContent = ingridient;
  return ingredientEl;
});

console.log(ingredientsEl);

const ulList = document.querySelector(`#ingredients`);

console.log(ulList);

ulList.append(...ingredientsEl);

// const newList = [];

// const ingredientEl = ingredients.forEach((element) => {
//   const ingredientEl = document.createElement(`li`);
//   ingredientEl.classList.add(`item`);
//   ingredientEl.textContent = element;
//   newList.push(ingredientEl);
// });

// console.log(newList);

// const ulList = document.querySelector(`#ingredients`);

// console.log(ulList);

// ulList.append(...newList);
