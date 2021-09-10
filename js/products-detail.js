function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
  }
  return vars;
}
var id = getUrlVars().id

var angle = 0;
function galleryspin(sign) {
  spinner = document.querySelector("#spinner");
  if (!sign) {
    angle = angle + 45;
  } else {
    angle = angle - 45;
  }
  spinner.setAttribute("style", "transform: rotateY(" + angle + "deg);");
}



const myJson = new Request("data/products.json");
// Fetch for Slide
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((productDetail) => {
    // console.log(productDetail.products.Models);
    const html = productDetail.products.Models
      .map((item) => { 
        if (item.id == id){
          var imageColor = item.productImg.map((productsImg)=>{
            // console.log(productsImg);
            // console.log(productsImg.productImgColor)
            return `
          <div class="slide">
             <div class="slide-txt">
               <div class="slide-title">
                 <h3>${item.productName}</h3>
               </div>
             </div>
             <div class="slide-img">
             <img src="${productsImg.productImgColor}" />
             </div>
           </div>`
          })
          .join("");
      document.querySelector("#hero").insertAdjacentHTML("afterbegin", imageColor);
      let hero_slide = document.querySelector("#hero-slide");

    let hero_slide_items = hero_slide.querySelectorAll(".slide");

    let hero_slide_index = 0;

    let hero_slide_play = true;

    let hero_slide_control_items = hero_slide.querySelectorAll(
      ".slide-control-item"
    );

    showSlide = (index) => {
      hero_slide.querySelector(".slide.active").classList.remove("active");
      hero_slide
        .querySelector(".slide-control-item.active")
        .classList.remove("active");
      hero_slide_control_items[index].classList.add("active");
      hero_slide_items[index].classList.add("active");
    };

    // add event to slide select
    hero_slide_control_items.forEach((item, index) => {
      item.addEventListener("click", () => showSlide(index));
    });

    // pause slide when mouse come in slider
    hero_slide.addEventListener("mouseover", () => (hero_slide_play = false));

    // resume slide when mouse leave out slider
    hero_slide.addEventListener("mouseleave", () => (hero_slide_play = true));

    setTimeout(() => hero_slide_items[0].classList.add("active"), 200);
        }
           
      })
  });

//Fetch for Color
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((productDetail) => {
    // console.log(productDetail.products.Models);
    const html = productDetail.products.Models
      .map((item) => { 
        if (item.id == id){
          var color = item.productImg.map((productsColor)=>{
            // console.log(productsColor);
            // console.log(productsColor.color)
            return `
            <li class="slide-control-item ${productsColor.classColor}">
            <button class="slideButton ${productsColor.color}"></button>
          </li>
          `
          })
          .join("");
      document.querySelector("#slide-control").insertAdjacentHTML("afterbegin", color);
      let hero_slide = document.querySelector("#hero-slide");

    let hero_slide_items = hero_slide.querySelectorAll(".slide");

    let hero_slide_index = 0;

    let hero_slide_play = true;

    let hero_slide_control_items = hero_slide.querySelectorAll(
      ".slide-control-item"
    );

    showSlide = (index) => {
      hero_slide.querySelector(".slide.active").classList.remove("active");
      hero_slide
        .querySelector(".slide-control-item.active")
        .classList.remove("active");
      hero_slide_control_items[index].classList.add("active");
      hero_slide_items[index].classList.add("active");
    };
    hero_slide_control_items.forEach((item, index) => {
      item.addEventListener("click", () => showSlide(index));
    });

    // pause slide when mouse come in slider
    hero_slide.addEventListener("mouseover", () => (hero_slide_play = false));

    // resume slide when mouse leave out slider
    hero_slide.addEventListener("mouseleave", () => (hero_slide_play = true));

    setTimeout(() => hero_slide_items[0].classList.add("active"), 200);
    }
    })
  });

//Fetch for Price
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models
      .map((item) => {
        if(item.id == id){
          var productsPrice = item.productPrice.map((price =>{
            // console.log(price)
            // console.log(price.priceTitle)
            // console.log(price.price)
            return `
           <div class="showroom-financial">
             <div class="financial-title">
               <span>${price.priceTitle}</span>
             </div>
             <div class="financial-content">
               <span class="financial-icon-dollar">$</span>
               <span class="financial-price" >${price.price}</span>
             </div>
           </div>
           `;
          }))
          .join("");
    document
      .querySelector("#product-price")
      .insertAdjacentHTML("afterbegin", productsPrice);
        }
        
      })
  });

// Fetch for Feature
  fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models
      .map((item) => {
        if(item.id == id){
          var features = item.feature.map((feature =>{
            // console.log(feature)
            return `
        <div class="feature-items">
        <div class="feature-item">
          <div class="feature-icon">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              fill="currentColor" stroke="none">
              <polygon points="${feature.polygonPoint}"></polygon>
              <path
                d="${feature.featurePath1}">
              </path>
              <path
                d="${feature.featurePath2}">
              </path>
              <path
                d="${feature.featurePath3}">
              </path>
            </svg>
          </div>
          <div class="feature-inner">
            ${feature.featureContent}
          </div>
        </div>
      </div>
          `;
          }))
          .join("");
    document
      .querySelector("#showroom-feature")
      .insertAdjacentHTML("afterbegin", features);
        }
        
      })
  });

// Fetch for Gallery
fetch(myJson)
.then((response) => {
  return response.json();
})
.then((index) => {
  // console.log(index.products);
  const html = index.products.Models
    .map((item) => {
      if(item.id == id){
        var gallery = item.gallery.map((galleryImg =>{
          // console.log(galleryImg)
          return `
          <img src="${galleryImg.galleryImg}" alt />
        `;
        }))
        .join("");
  document
    .querySelector("#spinner")
    .insertAdjacentHTML("afterbegin", gallery);
      }
      
    })
});

// Fetch for Vehicle Specs
fetch(myJson)
.then((response) => {
  return response.json();
})
.then((index) => {
  // console.log(index.products);
  const html = index.products.Models
    .map((item) => {
      if(item.id == id){
        var vehicleSpecs = item.vehicleSpecs.map((specsItem =>{
          // console.log(specsItem)
          return `
          <div class="zebra-table-item ${specsItem.addClass}">
            <div class="zebra-table-item-inner">
              <span><strong>${specsItem.specsName}</strong></span>
              <span>${specsItem.specsContent}</span>
            </div>
          </div>
          `;
        }))
        .join("");
  document
    .querySelector("#vehicle-specs")
    .insertAdjacentHTML("afterbegin", vehicleSpecs);
      }
      
    })
});


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
