
const mySlide = new Request("data/index-hero.json");

fetch(mySlide)
.then((response) =>{
  return response.json();
})
.then((slide) =>{
  // console.log(slide)
  const html = slide
  .map((item) =>{
    return `
    <div class="slide ${item.class}">
    <div class="slide-txt">
      <div class="slide-title">
        <h3>${item.title}</h3>
      </div>
      <div class="slide-description">
        <p>${item.description}</p></div>
        <div class="slide-btn">
          <a href="${item.link}" class="hero-btn">${item.button}</a>
        </div>
        </div>
        <div class="slide-img">
          <img src="${item.imgSrc}">
      </div>
    </div>
    `
  })
  .join("");
  document.querySelector("#hero").insertAdjacentHTML("afterbegin",html);
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

})

const myJson = new Request("data/products.json");
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models.map((item) => {
      if (item.productYear == "2022") {
        // console.log(item);
        return `
            <div class="product-card to-top show-on-scroll">
              <a href="products-detail.html?id=${item.id}">
                <img src="${item.productImg[3].productImgColor}" />
                <div class="product-card-content">
                  <h3 class="product-card-title">${item.productYear} ${item.productName}</h3>
                  <p class="product-card-info">$ ${item.productPrice[0].price} Starting MSRP</p>
                  <button class="btn">Explore</button>
                </div>
              </a>
            </div>
           `;
      }
    }).join("");
    document
      .querySelector("#new-models-items")
      .insertAdjacentHTML("afterbegin", html);
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
  });

//
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models.map((item) => {
      if (item.productYear != "2022") {
        // console.log(item);
        return `
            <div class="product-card to-top show-on-scroll">
              <a href="products-detail.html?id=${item.id}">
                <img src="${item.productImg[3].productImgColor}" />
                <div class="product-card-content">
                  <h3 class="product-card-title">${item.productYear} ${item.productName}</h3>
                  <p class="product-card-info">$ ${item.productPrice[0].price} Starting MSRP</p>
                  <button class="btn">Explore</button>
                </div>
              </a>
            </div>
           `;
      }
    }).join("");
    document
      .querySelector("#popular-cars-item")
      .insertAdjacentHTML("afterbegin", html);
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
  });