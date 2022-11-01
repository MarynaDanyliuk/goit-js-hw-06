const inputEl = document.querySelector(`#name-input`);
// console.log(inputEl);
const outputEl = document.querySelector(`#name-output`);
console.log(outputEl);

inputEl.addEventListener(`input`, (event) => {
  console.dir(event.currentTarget.value.length);
  if (event.currentTarget.value.length === 0) {
    return (outputEl.textContent = `Anonymus`);
  }
  outputEl.textContent = event.currentTarget.value;
});
