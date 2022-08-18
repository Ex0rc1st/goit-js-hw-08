// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map(galleryItem =>
    `<a class="gallery__link" href="${galleryItem.original}">
        <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
        />
    </a>
    `).join('');

galleryRef.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
    captionsData: "alt",
	captionDelay: 250
})
