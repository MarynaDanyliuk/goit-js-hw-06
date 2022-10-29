function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  background: document.querySelector(`.widget`),
  nameColor: document.querySelector(`.color`),
  button: document.querySelector(`.change-color`),
  body: document.querySelector(`body`),
};
// console.log(refs.nameColor);
console.log(refs.body);

refs.button.addEventListener(`click`, onButtonClick);

function onButtonClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.nameColor.textContent = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;
  console.log(`клик на кнопку`);
}

// refs.nameColor.insertAdjacentHTML(
//   "afterbegin",
//   `${refs.nameColor.textContent}`
// );
