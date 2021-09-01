// Responsive navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navLinks = document.getElementsByClassName("main-menu1")[0];
const navLinks2 = document.getElementsByClassName("main-menu2")[0];
toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  navLinks2.classList.toggle("active");
});

//Search
const searchButton = document.getElementsByClassName("search-button")[0];
const search = document.getElementsByClassName("search")[0];
searchButton.addEventListener("click", () => {
  search.classList.toggle("show-search");
});

// change header style when scroll
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// Element show on scroll

let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let el_to_show = document.querySelectorAll(".show-on-scroll");

isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();

  let distance = 200;

  return (
    rect.top <=
    (window.innerHeight - distance ||
      document.documentElement.clientHeight - distance)
  );
};

loop = () => {
  el_to_show.forEach((el) => {
    if (isElInViewPort(el)) el.classList.add("show");
  });

  scroll(loop);
};

loop();