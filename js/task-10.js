function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  form: document.querySelector(`#controls`),
  input: document.querySelector(`input`),
  buttonCr: document.querySelector(`[data-create]`),
  buttonDstr: document.querySelector(`[data-destroy]`),
};

refs.buttonCr.addEventListener(`click`, createBoxes);
refs.buttonDstr.addEventListener(`click`, destroyBoxes);
// refs.input.addEventListener(`blur`, cleanInput);

let amount;
refs.input.addEventListener(`input`, (event) => {
  event.preventDefault();
  amount = event.currentTarget.value;
});

function createBoxes() {
  const divsEl = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement(`div`);
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divsEl.push(divEl);
  }

  const divList = document.querySelector(`#boxes`);

  divList.append(...divsEl);

  console.log(divsEl);
  console.log(divList);
}

function destroyBoxes(event) {
  event.preventDefault();
  const divList = document.querySelector(`#boxes`);
  divList.innerHTML = ` `;
  refs.form.reset();
  console.log(divList);
}

refs.form.addEventListener(`submit`, (event) => {
  event.preventDefault();
  refs.form.reset();
  console.log(event.target.elements.textContent.value);
});

// __________________________________________
// function destroyBoxes1(event) {
//  event.currentTarget.value;
//  console.log(event.currentTarget.value);
//   event.preventDefault();
//   // const divList = document.querySelector(`#boxes`);
//   // console.log(divList);
//   // divList.innerHTML = ` `;
//   refs.input.remove();
//   refs.input.reset();
//   // const divsEl = document.querySelector(`#boxes`).children;
//   // console.log(divsEl);
//   // const array = [...divsEl];
//   // console.log(array);
//   // return array.splise(0, array.length);
//   // divList.removeChild(divsEl);

// for (let i = 0; i < amount; i += 1) {
//   event.currentTarget.value[i] = null;
// }

// document.querySelector(`#boxes`).remove(event.currentTarget.value);
// refs.input.reset();
// const divsEl = document.querySelector(`#boxes`).children;
// console.log(divsEl);
// const array = [...divsEl];
// console.log(array);
// return array.splise(0, array.length);
// }

// ________________________________________________

// function onAddDivListClick() {
//   const divsEl = [];

//   for (let index = 0; index < amount; index++) {
//     let divEl = document.createElement(`div`);
//     divsEl.push(divEl);
//   }

//   const divList = document.querySelector(`#boxes`);

//   divList.append(...divsEl);

//   console.log(divsEl);
//   console.log(divList);
// }

// _____________________________________________

// refs.input.addEventListener(`input`, (event) => {
//   event.preventDefault();
//   console.dir(event.currentTarget.value);
//   const divsEl = [...event.currentTarget.value].map((div) => {
//     const divEl = document.createElement(`div`);
//     console.log(`???????????? div`);
//     return divEl;
//   });
//   return divsEl;
// });
// _______________________________________________

// function addDivEl() {
//   refs.input.addEventListener(`input`, (event) => {
//     event.preventDefault();
//     const amount = event.currentTarget.value;
//     const divList = [];
//     divList[0] = 1;
//     for (let i = 0; i < amount; i += 1) {
//       const divEl = document.createElement(`div`);
//       console.log(`???????????? div`);
//       const divList = document.querySelector(`#boxes`);
//       divList.append(divEl);
//       // console.log(divList);
//     }
//     console.log(divList);
//     //   const divEl = document.createElement(`div`);
//     // console.log(`???????????? div`);
//     // const divList = document.querySelector(`#boxes`);
//     // divList.append(...divEl);
//     // console.log(divList);
//   });
// }
// ______________________________
// refs.input.addEventListener(`input`, (event) => {
//   event.preventDefault();
//   console.dir(event.currentTarget.value);
//   const amount = event.currentTarget.value;

//   function createBoxes(amount) {
//     const min = 1;
//     const max = amount;
//     function createArrayOfDivs(min, max) {
//       const divs = [];
//       let div;
//       divs[0] = min;
//       for (let i = min; i <= max - 1; i += 1) {
//         div = divs.push((min += 1));
//       }
//       return divs;
//     }
//     console.log(createArrayOfDivs(min, max));

//     refs.buttonCr.addEventListener(`click`, onAddDivListClick);

//     function onAddDivListClick() {
//       const divsEl = createArrayOfDivs(min, max).map((div) => {
//         const divEl = document.createElement(`div`);
//         console.log(`???????????? div`);
//         return divEl;
//       });
//       console.log(divsEl);

//       const divList = document.querySelector(`#boxes`);

//       divList.append(...divsEl);
//     }
//   }
// });
// _______________________________
// function createBoxes(amount) {
//   const min = 1;
//   const max = amount;
//   function createArrayOfDivs(min, max) {
//     const divs = [];
//     let div;
//     divs[0] = min;
//     for (let i = min; i <= max - 1; i += 1) {
//       div = divs.push((min += 1));
//     }
//     return divs;
//   }
//   console.log(createArrayOfDivs(min, max));

// refs.buttonCr.addEventListener(`click`, onAddDivListClick);

//   function onAddDivListClick() {
//     const divsEl = createArrayOfDivs(min, max).map((div) => {
//       const divEl = document.createElement(`div`);
//       console.log(`???????????? div`);
//       return divEl;
//     });
//     console.log(divsEl);

//     const divList = document.querySelector(`#boxes`);

//     divList.append(...divsEl);
//   }
// }
// refs.input.addEventListener(`input`, (event) => {
//   event.preventDefault();
//   console.dir(event.currentTarget.value);
//   const amount = event.currentTarget.value;
// });

// _______________________

// const min = 1;
// const max = 100;

// function createArrayOfDivs(min, max) {
//   const divs = [];
//   let div;
//   divs[0] = min;
//   for (let i = min; i <= max - 1; i += 1) {
//     div = divs.push((min += 1));
//   }
//   return divs;
// }

// console.log(createArrayOfDivs(min, max));

// const divsEl = createArrayOfDivs(min, max).map((div) => {
//   const divEl = document.createElement(`div`);
//   console.log(`???????????? div`);
//   return divEl;
// });
// console.log(divsEl);

// const divList = document.querySelector(`#boxes`);

// divList.append(...divsEl);

// _____________________________

// const ingredientsEl = ingredients.map((ingridient) => {
//   const ingredientEl = document.createElement(`li`);
//   ingredientEl.classList.add(`item`);
//   ingredientEl.textContent = ingridient;
//   return ingredientEl;
// });

// console.log(ingredientsEl);

// const ulList = document.querySelector(`#ingredients`);

// console.log(ulList);

// ulList.append(...ingredientsEl);

// const email = formElements.email.value;
// const password = formElements.password.value;
