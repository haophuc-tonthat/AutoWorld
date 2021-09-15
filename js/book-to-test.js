//Show Book to test Form
const showForm = document.getElementsByClassName("form-book-to-test")[0];
const testForm = document.getElementsByClassName("book-to-test")[0];
const closeButton = document.getElementsByClassName("close-btn")[0]
showForm.addEventListener("click", ()=>{
  testForm.classList.add("book-to-test_show")
});
closeButton.addEventListener("click",()=>{
  testForm.classList.remove("book-to-test_show")
});

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