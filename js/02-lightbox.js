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

            data-alt="${description}"
          />
        </a>
      </li>
      `;
    })
    .join("");
}
// console.log(galleryItems);

// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
//   captionSelector: 'data-alt'
// });

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // some usefull information
// });

const gallery = new SimpleLightbox(".gallery a", {
  captions: true,
});
