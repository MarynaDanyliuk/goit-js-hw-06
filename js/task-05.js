const inputEl = document.querySelector(`#name-input`);
console.log(inputEl);
const outputEl = document.querySelector(`#name-output`);
console.log(outputEl);

inputEl.addEventListener("input", (event) => {
  event.preventDefault();
  console.log(`это сабмит инпута`);
  //   console.log(event.currentTarget);
  console.dir(event.currentTarget.value);
  outputEl.textContent = event.currentTarget.value;
});
