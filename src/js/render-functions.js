import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more");
const loader = document.querySelector(".loader");

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      (img) => `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${img.likes}</li>
          <li><b>Views:</b> ${img.views}</li>
          <li><b>Comments:</b> ${img.comments}</li>
          <li><b>Downloads:</b> ${img.downloads}</li>
        </ul>
      </li>`
    )
    .join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = "";
  lightbox.refresh();
}

export function showLoader() {
  loader.classList.remove("is-hidden");
}
export function hideLoader() {
  loader.classList.add("is-hidden");
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove("is-hidden");
}
export function hideLoadMoreButton() {
  loadMoreBtn.classList.add("is-hidden");
}

export const loadMoreButton = loadMoreBtn;

export const galleryEl = galleryContainer;