const btnAddEl = document.querySelector('[data-action="increment"]');
const btnRemoveEl = document.querySelector('[data-action="decrement"]');
let counterValue = document.querySelector("#value");

console.log(counterValue);

btnRemoveEl.addEventListener(`click`, () => {
  console.log(`снимаю 1`);
  counterValue.innerHTML -= 1;
});

btnAddEl.addEventListener(`click`, add1);

function add1() {
  counterValue.innerHTML += 1;
  //   counterValue.insertAdjacentHTML("afterbegin", 1);
  console.log(`добавляю 1`);
}

// btnAddEl.addEventListener(`click`, () => {
//   console.log(`снимаю 1`);
//   btnRemoveEl.removeEventListener(`click`, remove1);
// });

// function remove1() {
//   counterValue.innerHTML -= 1;
//   console.log(`снимаю 1`);
// }

// btnAddEl.addEventListener(`click`, () => {
//   console.log(`вешаю слушателя`);
//   counterValue.innerHTML += 1;
//   //   counterValue.insertAdjacentHTML("beforeBegin", Number(+1));
//   //   counterValue.addEventListener(`click`, () => {});
// });

// function onBtnAddClick() {
//   console.log(`вешаю слушателя`);
// }
// function onBtnRemoveClick() {
//   console.log(-1);
// }
