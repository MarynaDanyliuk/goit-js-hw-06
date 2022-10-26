const refs = {
  form: document.querySelector(`form`),
  input: document.querySelector(`input`),
  label: document.querySelector(`label`),
  button: document.querySelector(`button`),
};

console.log(refs.form);
console.log(refs.input);
console.log(refs.label);
console.log(refs.button);

refs.form.addEventListener(`submit`, onFormSubmit);
refs.input.addEventListener(`focus`, onInputFocus);
refs.input.addEventListener(`blur`, onInputBlur);
refs.input.addEventListener(`blur`, onInputChange);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(`Сабмит формы`);
  console.log(event);

  const formElements = event.currentTarget.elements;
  console.log(formElements);
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail: email,
    password: password,
  };

  console.log(formData);
}

function onInputFocus() {
  console.log(`инпут получил фокус`);
}
function onInputBlur() {
  console.log(`инпут потерял фокус`);
}
function onInputChange(event) {
  event.preventDefault();
  //   if (event.currentTarget.value.length <= 6) {
  //     refs.input.setAttribute("class", "valid");
  //     return console.log(event.currentTarget.value);
  //   } else refs.input.setAttribute("class", "invalid");
  //   console.log(refs.input.placeholder);
}

refs.input.addEventListener("input", (event) => {
  event.preventDefault();
  console.dir(event.currentTarget.elements);
});

// inputEl.addEventListener("input", (event) => {
//   event.preventDefault();
//   console.log(`это сабмит инпута`);
//   //   console.log(event.currentTarget);
//   console.dir(event.currentTarget.value);
//   outputEl.textContent = event.currentTarget.value;
// });
