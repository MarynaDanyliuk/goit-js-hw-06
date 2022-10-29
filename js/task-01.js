const categories = document.querySelectorAll(`#categories > .item`);
console.log(`Number of categories: `, categories.length);

const categoriesEl = categories.forEach((element) => {
  console.log(
    `Category: `,
    element.querySelector(`#categories > .item > h2`).textContent
  );
  console.log(
    `Elements: `,
    element.querySelectorAll(`#categories > .item > ul > li`).length
  );
});

// ________________
// const categoriesEl = categories.forEach((element) => {
//   console.log(
//     `Category: `,
//     element.querySelector(`#categories > .item > h2`).textContent
//   );
//   console.log(
//     `Elements: `,
//     element.querySelectorAll(`#categories > .item > ul > li`).length
//   );
// });
