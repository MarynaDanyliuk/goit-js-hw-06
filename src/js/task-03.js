const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(`.gallery`);
console.log(galleryList);

// const galleryItemEl = document.createElement(`li`);
// galleryItemEl.classList.add(`item`);
// const newList = [];

// const galleryItemEl = images.forEach((element) => {
//   const galleryItemEl = document.createElement(`li`);
//   galleryItemEl.classList.add(`item`);
//   galleryItemEl.textContent = element;
//   console.log(galleryItemEl);
//   newList.push(galleryItemEl);
//   galleryList.insertAdjacentHTML("afterbegin", galleryItemEl);
// });

// galleryList.insertAdjacentHTML("afterbegin", galleryItemEl);

// const newList1 = [];
1;
const galleryImgEl = images.forEach((img) => {
  const galleryImgEl = images.map(
    (img) => `<li class="item"><img>${img}</img></li>`
  );
  galleryList.insertAdjacentHTML("afterbegin", galleryImgEl);
});
// 2.
// const galleryImgEl = images.forEach((img) => {
//   const galleryImgEl = images.map(
//     (img) => `<li class="item"><img>${img}</img></li>`
//   );
//   galleryList.insertAdjacentHTML("afterbegin", galleryImgEl);
// });

// console.log(newList);

// const galleryItem = document.createElement(`li`);
// galleryItem.classList.add(`img`);

// const galleryPic = document.createElement(`img`);
// console.log(galleryPic);

const markup = images.map((img) => `<li class="item"><img>${img}</img></li>`);
console.log(markup);

// galleryList.append(...newList);
// galleryItem.append(markup);
// .join(" ")
// galleryList.insertAdjacentHTML("afterbegin", newList);

// `<li class="item"><img>${img}</img></li>`;
