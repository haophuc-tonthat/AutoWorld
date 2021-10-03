// Book to test Validate
var formBook = document.getElementsByTagName("form")[0];
var bookDealership = document.getElementById("dealership_book");
var bookName = document.getElementById("book-name");
var bookEmail = document.getElementById("book-mail");
var bookPhone = document.getElementById("book-phone");
var bookContactMethod = document.getElementById("contact_book");
var bookMessage = document.getElementById("book_message");

formBook.addEventListener(
  "submit",
  function (event) {
    if (bookDealership.value) {
      alert("Please choose Dealership");
      event.preventDefault();
    }
    if (!bookName.validity.valid) {
      alert(
        "Your Name is incorrect or has not been filled in, please re-enter"
      );
      event.preventDefault();
    }
    if (!bookEmail.validity.valid) {
      alert(
        "Your Email is incorrect or has not been filled in, please re-enter"
      );
      event.preventDefault();
    }
    if (!bookPhone.validity.valid) {
      alert(
        "Your Phone is incorrect or has not been filled in, please re-enter"
      );
      event.preventDefault();
    }
    if (bookContactMethod.value == "Preferred Contact Method") {
      alert("Please choose Contact Method");
      event.preventDefault();
    }
    if (!bookMessage.validity.valid) {
      alert("Please enter a message, enter at least 20 characters");
      event.preventDefault();
    }
    if (
      bookEmail.validity.valid &&
      bookName.validity.valid &&
      bookPhone.validity.valid &&
      !bookDealership.value &&
      bookContactMethod.value != "Preferred Contact Method" &&
      bookMessage.validity.valid
    ) {
      alert("We have received your request, we will get back to you later");
      event.preventDefault();
      bookPhone.value = "";
      bookName.value = "";
      bookEmail.value = "";
      bookMessage.value = "";
      testForm.classList.remove("book-to-test_show");
    }
  },
  false
);

// Contact Us Validate
var formContact = document.getElementsByTagName("form")[1];
var contactDealership = document.getElementById("dealership_contact");
var contactName = document.getElementById("contact-name");
var contactEmail = document.getElementById("contact-mail");
var contactPhone = document.getElementById("contact-phone");
var contactContactMethod = document.getElementById("contact_contact-method");
var contactMessage = document.getElementById("contact-message");

formContact.addEventListener(
  "submit",
  function (event) {
    if (contactDealership.value) {
      alert("Please choose Dealership");
      event.preventDefault();
    }
    if (!contactEmail.validity.valid) {
      alert(
        "Your email is incorrect or has not been filled in, please re-enter"
      );
      event.preventDefault();
    }
    if (!contactName.validity.valid) {
      alert(
        "Your name is incorrect or has not been filled in, please re-enter"
      );
      event.preventDefault();
    }
    if (!contactPhone.validity.valid) {
      alert(
        "Your phone is incorrect or has not been filled in, please re-enter"
      );
      event.preventDefault();
    }
    if (contactContactMethod.value == "Preferred Contact Method") {
      alert("Please choose Contact Method");
      event.preventDefault();
    }
    if (!contactMessage.validity.valid) {
      alert("Please enter a message, enter at least 20 characters");
      event.preventDefault();
    }
    if (
      contactEmail.validity.valid &&
      contactName.validity.valid &&
      contactPhone.validity.valid &&
      !contactDealership.value &&
      contactContactMethod.value != "Preferred Contact Method" &&
      contactMessage.validity.valid
    ) {
      alert("We have received your request, we will get back to you later");
      event.preventDefault();
      contactPhone.value = "";
      contactName.value = "";
      contactEmail.value = "";
      contactForm.classList.remove("book-to-test_show");
    }
  },
  false
);
