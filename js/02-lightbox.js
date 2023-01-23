import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector("ul.gallery");

galleryList.insertAdjacentHTML("beforeend", createGallery(galleryItems));


function createGallery(items){
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
};


new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});


