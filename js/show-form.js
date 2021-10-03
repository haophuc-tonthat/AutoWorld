//Show Book to test Form
const showForm = document.getElementsByClassName("form-book-to-test")[0];
const testForm = document.getElementsByClassName("book-to-test")[0];
const closeButton = document.getElementsByClassName("close-btn")[0];
showForm.addEventListener("click", () => {
  testForm.classList.add("book-to-test_show");
});
closeButton.addEventListener("click", () => {
  testForm.classList.remove("book-to-test_show");
});

//Show Contact Us Form for LEASE
const showFormContact = document.getElementsByClassName("contact-us-link")[0];
const contactForm = document.getElementsByClassName("contact-us")[0];
const closeContactButton =
  document.getElementsByClassName("close-contact-btn")[0];
showFormContact.addEventListener("click", () => {
  contactForm.classList.add("book-to-test_show");
});
closeContactButton.addEventListener("click", () => {
  contactForm.classList.remove("book-to-test_show");
});

//Show Contact Us Form for CASE REBATE
const showFormContact2 = document.getElementsByClassName("contact-us-link")[1];
showFormContact2.addEventListener("click", () => {
  contactForm.classList.add("book-to-test_show");
});
closeContactButton.addEventListener("click", () => {
  contactForm.classList.remove("book-to-test_show");
});
