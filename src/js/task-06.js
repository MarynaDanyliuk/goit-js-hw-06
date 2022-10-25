const inputEl = document.querySelector(`#validation-input`);
inputEl.data - length;
console.log(inputEl);
// const outputEl = document.querySelector(`#validation-input`);
// console.log(outputEl);

inputEl.addEventListener("input", (event) => {
  event.preventDefault();
  console.log(`это сабмит инпута`);
  //   console.log(event.currentTarget);
  console.dir(event.currentTarget.value);
  inputEl.focus();
});
