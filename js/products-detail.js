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
  if (!sign) {
    angle = angle + 45;
  } else {
    angle = angle - 45;
  }
  spinner.setAttribute("style", "transform: rotateY(" + angle + "deg);");
}

const myJson = new Request("data/new-models.json");
// Fetch for Slide
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((slide) => {
    console.log(slide.products.NewModels);
    const html = slide.products.NewModels
      .map((image) => { 
            if(image.id == "NewModels01"){    
              console.log(image.productImg)
              console.log(image.productImg[i].productImgColor)
              return `
              <div class="slide">
                <div class="slide-txt">
                  <div class="slide-title">
                    <h3>${image.productName}</h3>
                  </div>
                </div>
                <div class="slide-img">
                  for(var i = 0; i < 5; i++){
                    <img src="${image.productImg[i].productImgColor}" />
                  }
                </div>
              </div>
              `;                     
           }
      })
      .join("");
    document.querySelector("#hero").insertAdjacentHTML("afterbegin", html);
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
  });

// //Fetch for Price
// fetch(myJson)
//   .then((response) => {
//     return response.json();
//   })
//   .then((price) => {
//     console.log(price.productPrice);
//     const html = price.productPrice
//       .map((productPrice) => {
//         return `
//           <div class="showroom-financial">
//             <div class="financial-title">
//               <span>${productPrice.priceTitle}</span>
//             </div>
//             <div class="financial-content">
//               <span class="financial-icon-dollar">$</span>
//               <span class="financial-price" >${productPrice.price}</span>
//             </div>
//           </div>
//           `;
//       })
//       .join("");
//     document
//       .querySelector("#product-price")
//       .insertAdjacentHTML("afterbegin", html);
//   });

// //
// fetch(myJson)
//   .then((response) => {
//     return response.json();
//   })
//   .then((feature) => {
//     console.log(feature.feature);
//     const html = feature.feature
//       .map((featureItem) => {
//         return `
//         <div class="feature-items">
//         <div class="feature-item">
//           <div class="feature-icon">
//             <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
//               fill="currentColor" stroke="none">
//               <polygon points="${featureItem.polygonPoint}"></polygon>
//               <path
//                 d="${featureItem.featurePath1}">
//               </path>
//               <path
//                 d="${featureItem.featurePath2}">
//               </path>
//               <path
//                 d="${featureItem.featurePath3}">
//               </path>
//             </svg>
//           </div>
//           <div class="feature-inner">
//             ${featureItem.featureContent}
//           </div>
//         </div>
//       </div>
//           `;
//       })
//       .join("");
//     document
//       .querySelector("#showroom-feature")
//       .insertAdjacentHTML("afterbegin", html);
//   });

// //Fetch for Gallery
// fetch(myJson)
//   .then((response) => {
//     return response.json();
//   })
//   .then((gallery) => {
//     console.log(gallery.gallery);
//     const html = gallery.gallery
//       .map((image) => {
//         return `
//               <img src="${image.galleryImg}" alt />
//             `;
//       })
//       .join("");
//     document.querySelector("#spinner").insertAdjacentHTML("afterbegin", html);
//   });

// //Fetch for Vehicle Specs
// fetch(myJson)
//   .then((response) => {
//     return response.json();
//   })
//   .then((vehicleSpecs) => {
//     if (vehicleSpecs.id == "NewModels01") {
//       console.log(vehicleSpecs.vehicleSpecs);
//       const html = vehicleSpecs.vehicleSpecs
//         .map((specs) => {
//           return `
//           <div class="zebra-table-item ${specs.addClass}">
//             <div class="zebra-table-item-inner">
//               <span><strong>${specs.specsName}</strong></span>
//               <span>${specs.specsContent}</span>
//             </div>
//           </div>
//           `;
//         })
//         .join("");
//       document
//         .querySelector("#vehicle-specs")
//         .insertAdjacentHTML("afterbegin", html);
//     }
//   });
