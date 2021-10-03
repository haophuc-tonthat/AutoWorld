//Show Book to test Form
const showForm = document.getElementsByClassName("get-offer");
const testForm = document.getElementsByClassName("book-to-test")[0];
const closeButton = document.getElementsByClassName("close-btn")[0];
document.querySelectorAll(".get-offer").forEach((item) => {
  item.addEventListener("click", (event) => {
    testForm.classList.add("book-to-test_show");
  });
});
closeButton.addEventListener("click", () => {
  testForm.classList.remove("book-to-test_show");
});
