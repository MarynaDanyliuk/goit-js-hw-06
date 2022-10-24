const btnAddEl = document.querySelector('[data-action="increment"]');
const btnRemoveEl = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

console.log(counterValue);

btnRemoveEl.addEventListener(`click`, () => {
  counterValue -= 1;
  console.log(`снимаю 1`, counterValue);
  counterValueEl.textContent = counterValue;
});

btnAddEl.addEventListener(`click`, add1);

function add1() {
  counterValue += 1;
  console.log(`добавляю 1`, counterValue);
  counterValueEl.textContent = counterValue;
}

const counterValueEl = document.querySelector("#value");
console.log(counterValueEl.textContent);
