const refs = {
  form: document.querySelector(`form`),
};

console.log(refs.form);

refs.form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     console.log(name);
  //     console.log(value);
  //   });

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail: email,
    password: password,
  };

  if (formData.mail === `` || formData.password === ``) {
    alert("Заповніть будь ласка форму!");
  } else console.log(formData);

  refs.form.reset();
}
