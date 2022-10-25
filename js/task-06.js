const refs = {
  input: document.querySelector(`input`),
  style: document.querySelector(`style`),
};

console.log(refs.input);
console.log(refs.input.id);
console.log(refs.style);

refs.input.addEventListener(`focus`, onInputFocus);
refs.input.addEventListener(`blur`, onInputBlur);
refs.input.addEventListener(`blur`, onInputChange);

function onInputFocus() {
  console.log(`инпут получил фокус`);
}
function onInputBlur() {
  console.log(`инпут потерял фокус`);
}
function onInputChange(event) {
  if (event.currentTarget.value.length <= 6) {
    refs.input.setAttribute("class", "valid");
    return console.log(event.currentTarget.value);
  } else refs.input.setAttribute("class", "invalid");
  console.log(refs.input.placeholder);
}

// const inputEl = document.querySelector(`#validation-input`);
// inputEl.data-length
// console.log(inputEl);
