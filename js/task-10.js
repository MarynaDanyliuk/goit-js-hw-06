function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector(`input`),
  buttonCr: document.querySelector(`[data-create]`),
  buttonDstr: document.querySelector(`[data-destroy]`),
};

// console.log(refs.input);
// // console.log(refs.buttonCr);
// // console.log(refs.buttonDstr);

refs.buttonCr.addEventListener(`click`, onAddDivListClick);

// let amount = refs.input.currentTarget;
// console.log(amount);

function onAddDivListClick() {
  const amount = refs.input.addEventListener(`input`, (event) => {
    // event.preventDefault();
    event.currentTarget.value;
  });
  console.log(amount);
  const divEl = document.createElement(`div`);
  for (let index = 1; index < amount; index++) {
    console.log(divEl);
  }
  const divList = document.querySelector(`#boxes`);
  divList.append(divEl);
  console.log(divList);
}
// console.log(onAddDivListClick());

// _____________________________________________

// refs.input.addEventListener(`input`, (event) => {
//   event.preventDefault();
//   console.dir(event.currentTarget.value);
//   const divsEl = [...event.currentTarget.value].map((div) => {
//     const divEl = document.createElement(`div`);
//     console.log(`создаю div`);
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
//       console.log(`создаю div`);
//       const divList = document.querySelector(`#boxes`);
//       divList.append(divEl);
//       // console.log(divList);
//     }
//     console.log(divList);
//     //   const divEl = document.createElement(`div`);
//     // console.log(`создаю div`);
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
//         console.log(`создаю div`);
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
//       console.log(`создаю div`);
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
//   console.log(`создаю div`);
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
