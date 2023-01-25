import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('div.gallery');
const createGallery = imgGallery(galleryItems);


galleryList.insertAdjacentHTML("beforeend", createGallery);

galleryList.addEventListener("click", galleryItemClick);



/////////////////////////
function imgGallery(items) {
    return items.map(({ preview, original, description }) => {
           return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
})
    .join("");
}
///////////////////////////

let modalBox = null;

function galleryItemClick(event) {
    event.preventDefault();

    const oneGalleryItem = event.target.classList.contains('gallery__image');

     if ( !oneGalleryItem) {
        return ;  
    } 

   modalBox = basicLightbox.create(`
    <div class="modal">
    		<img width="1280" heigth ="853" src="${event.target.dataset.source}"> </div>
	`,
        {
            onShow: (modalBox) => {
                document.addEventListener("keydown", closeEscape);
            },
            onClose: (modalBox) => {
            document.removeEventListener("keydown", closeEscape);
            }
        });
    
    modalBox.show();
}
//////////////////////////////
function closeEscape(evt){
                    evt = evt || window.event;
                    if (evt.key === "Escape" || evt.key === "Esc") {
                        modalBox.close();
                    }             
};
//////////////////////////////
