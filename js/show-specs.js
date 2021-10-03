//Show Vehicle Specs
const showMore = document.getElementsByClassName("show-more")[0];
const zebraTable = document.getElementsByClassName("zebra-table")[0];
showMore.addEventListener("click", () => {
  zebraTable.classList.toggle("zebra-show");
  showMore.classList.toggle("show-more-hidden");
});

//Gallery-Carousel
const galleryBlock = document.getElementsByClassName("gallery-block")[0];
const galleryButton = document.getElementsByClassName("gallery-btn")[0];
galleryButton.addEventListener("click", () => {
  galleryBlock.classList.toggle("show-gallery");
});
