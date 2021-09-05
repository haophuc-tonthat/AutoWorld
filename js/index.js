//Load Hero-Slide
var hero = [];

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "data/index-hero.json",
    dataType: "json",
    success: function (data) {
      hero = data;
      loadHeroSlides();
      let hero_slide = document.querySelector("#hero-slide");

      let hero_slide_items = hero_slide.querySelectorAll(".slide");

      let hero_slide_index = 0;

      let hero_slide_play = true;

      let hero_slide_control_items = hero_slide.querySelectorAll(
        ".slide-control-item"
      );

      let slide_next = hero_slide.querySelector(".slide-next");

      let slide_prev = hero_slide.querySelector(".slide-prev");

      showSlide = (index) => {
        hero_slide.querySelector(".slide.active").classList.remove("active");
        hero_slide
          .querySelector(".slide-control-item.active")
          .classList.remove("active");
        hero_slide_control_items[index].classList.add("active");
        hero_slide_items[index].classList.add("active");
      };

      nextSlide = () => {
        hero_slide_index =
          hero_slide_index + 1 === hero_slide_items.length
            ? 0
            : hero_slide_index + 1;
        showSlide(hero_slide_index);
      };

      prevSlide = () => {
        hero_slide_index =
          hero_slide_index - 1 < 0
            ? hero_slide_items.length - 1
            : hero_slide_index - 1;
        showSlide(hero_slide_index);
      };

      slide_next.addEventListener("click", () => nextSlide());

      slide_prev.addEventListener("click", () => prevSlide());

      // add event to slide select
      hero_slide_control_items.forEach((item, index) => {
        item.addEventListener("click", () => showSlide(index));
      });

      // pause slide when mouse come in slider
      hero_slide.addEventListener("mouseover", () => (hero_slide_play = false));

      // resume slide when mouse leave out slider
      hero_slide.addEventListener("mouseleave", () => (hero_slide_play = true));

      setTimeout(() => hero_slide_items[0].classList.add("active"), 200);

      // auto slide
      setInterval(() => {
        if (!hero_slide_play) return;
        nextSlide();
      }, 4500);
    },
  });
});

function loadHeroSlides() {
  var html = "";

  $.each(hero, function (index, item) {
    var s = "";
    s += "<div class='slide " + item.class + "'>";
    s += "<div class='slide-txt'>";
    s += "<div class='slide-title'>";
    s += "<h3>" + item.title + "</h3>";
    s += "</div>";
    s += "<div class='slide-description'>";
    s += "<p>" + item.description + "</p>";
    s += "</div>";
    s += "<div class='slide-btn'>";
    s += "<a class='hero-btn'>" + item.button + "</a>";
    s += "</div>";
    s += "</div>";
    s += "<div class='slide-img'>";
    s += "<img src=" + item.imgSrc + "  />";
    s += "</div>";
    s += "</div>";
    html += s;
  });

  $("#hero").html(html);
}

//Load New Models
var hotModels = [];
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "data/hot-models.json",
    dataType: "json",
    success: function (data) {
      hotModels = data;
      loadHotModels();
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
    },
  });
});
function loadHotModels() {
  var html = "";

  $.each(hotModels, function (index, item) {
    
    var s = "";
    s +=    "<div class='product-large to-top show-on-scroll'>";
    s +=        "<a href='product-detail.html?id=" + item.id + "'>";
    s +=          "<img src=" + item.productImgRed + " alt=" + item.productName + " />";
    s +=          "<div class='product-large-content'>"
    s +=                "<h3 class='product-card-title'>" + item.productName + "</h3>";
    s +=
                        "<p class='product-card-info'>$ " +
                        item.productPrice +
                        " Starting MSRP</p>";
    s +=                "<button class='btn'>Explore</button>";
    s +=          "</div>"
    s +=        "</a>";
    s +=    "</div>";
    html += s;
  });

  $("#hot-models-item").html(html);
}

var newModels = [];
$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "data/new-models.json",
    dataType: "json",
    success: function (data) {
      newModels = data;
      loadNewModels();
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
    },
  });
});
function loadNewModels() {
  var html = "";

  $.each(newModels, function (index, item) {
    var s = "";
    s +=    "<div class='product-card to-top show-on-scroll'>";
    s +=        "<a href='product-detail.html?id=" + item.id + "'>";
    s +=          "<img src=" + item.productImgWhite + " alt=" + item.productName + " />";
    s +=          "<div class='product-card-content'>"
    s +=                "<h3 class='product-card-title'>" + item.productName + "</h3>";
    s +=
                        "<p class='product-card-info'>$ " +
                        item.productPrice +
                        " Starting MSRP</p>";
    s +=                "<button class='btn'>Explore</button>";
    s +=          "</div>"
    s +=        "</a>";
    s +=    "</div>";
    html += s;
  });

  $("#new-models-items").html(html);
}

