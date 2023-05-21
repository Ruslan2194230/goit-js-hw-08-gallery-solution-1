import { galleryItems } from "./gallery-items.js";
// Change code below this line
const ulList = document.querySelector(".gallery");

const cartMarkup = createPictureCartMarkup(galleryItems);
ulList.insertAdjacentHTML("beforeend", cartMarkup);

function createPictureCartMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href = '${original}';
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
    })
    .join("");
}

// 2.Реализация делегирования на ul.gallery и получение url большого изображения.

const ulListImage = document.querySelector(".gallery__image");

ulList.addEventListener("click", (event) => {
  event.preventDefault();

  basicLightbox
    .create(
      `
          <img  src="${(event.target.src = event.target.dataset.source)}
          ">
      `
    )
    .show();
});

function onEscBtnPress(event) {
  if (event.code === "Escape") {
    onCloseBtnClick();
  }
}

function onCloseBtnClick() {
  window.removeEventListener("keydown", onEscBtnPress);
  ulListImage.src = "";
}

console.log(galleryItems);

// вырезанные участки предидущего выполнения задачи

// modalRef.classList.remove('is-open');

// const ulListImage = document.querySelector(".gallery__image");

// ulList.addEventListener("click", onPictureClick);

//  = (event) => {
//   event.preventDefault();

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

// }

///
// function onPictureClick(event) {
//   event.preventDefault();
//   console.log(event.target);

//   basicLightbox
//     .create(
//       `<img src="      https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg>`
//     )
//     .show();
//   console.log(event.target);
// }
////

///

// function onPictureClick(event) {
//   event.preventDefault();
//   if (!event.target.classList.contains("gallery__image")) {
//     return;
//   }

//   //   console.log("event.target.dataset.source :", event.target.dataset.source);
//   // console.log(ulListImage.src);
//   // modalRef.classList.add('is-open');

// //   event.target.src = event.target.dataset.source;
//   //   console.log(ulListImage.src);

//   window.addEventListener("keydown", onEscBtnPress);
// }
