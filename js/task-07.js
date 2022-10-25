const refs = {
  input: document.querySelector(`#font-size-control`),
  text: document.querySelector(`#text`),
};

console.log(refs.input);
console.log(refs.text);
console.log(refs.text.textContent);

// refs.input.addEventListener(`focus`, onInputFocus);

// function onInputFocus() {
//   console.log(`инпут получил фокус`);
// }

refs.input.addEventListener("input", (event) => {
  event.preventDefault();
  console.dir(event.currentTarget.value);
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
});
