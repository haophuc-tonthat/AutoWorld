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
              hero_slide_index + 1 === hero_slide_items.length ? 0 : hero_slide_index + 1;
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

        //   // auto slide
        //   setInterval(() => {
        //     if (!hero_slide_play) return;
        //     nextSlide();
        //   }, 4500);
        }
      });
    });

    function loadHeroSlides() {
      var html = "";
      // vòng lặp: duyệt qua từng phần tử trong mảng products
      $.each(hero, function (index, item) {
        var s = "";
        s += "<div class='slide " + item.class + "'>";
        s += "<div class='slide-txt'>";
        s += "<div class='slide-title'>";
        s += "<h3>" + "2021 Audi SQ7"+ "</h3>";
        s += "</div>";
        s += "</div>";
        s += "<div class='slide-img'>";
        s += "<img src=" + item.imgSrc + "  />";
        s += "</div>";
        s += "</div>";
        html += s;
      });



      // Bỏ chuỗi html vào bên trong thẻ divProducts
      $("#hero").html(html);
    }

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
    var angle = 0;
    function galleryspin(sign) { 
    spinner = document.querySelector("#spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    }