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
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.color.textContent = color;
}

console.log(refs.color);
