//Show Book to test Form
const showForm = document.getElementsByClassName("get-offer")[0];
const testForm = document.getElementsByClassName("book-to-test")[0];
const closeButton = document.getElementsByClassName("close-btn")[0];
showForm.addEventListener("click", () => {
  testForm.classList.add("book-to-test_show");
});
closeButton.addEventListener("click", () => {
  testForm.classList.remove("book-to-test_show");
});
