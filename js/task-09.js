function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  background: document.querySelector(`.widget`),
  color: document.querySelector(`.color`),
  button: document.querySelector(`.change-color`),
  body: document.querySelector(`body`),
};
console.log(refs.color);

refs.button.addEventListener(`click`, onButtonClick);

function onButtonClick(event) {
  event.preventDefault();
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
}
refs.color.textContent = getRandomHexColor();
console.log(refs.color);
