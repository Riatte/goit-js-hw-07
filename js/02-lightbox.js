import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector("ul.gallery");

galleryList.insertAdjacentHTML("beforeend", createGallery(galleryItems));

galleryList.addEventListener("click", modulGallery);

function createGallery(items){
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
};

function modulGallery(event) {
    event.preventDefault();
}

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryItems);
