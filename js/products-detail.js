// Get ID
function getUrlVars() {
  var vars = [],
    hash;
  var hashes = window.location.href
    .slice(window.location.href.indexOf("?") + 1)
    .split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}
var id = getUrlVars().id;

// Gallery JS
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

//Fetch for Title
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models.map((item) => {
      if (item.id == id) {
        return `
            ${item.productYear} ${item.productName} | AutoWorld
           `;
      }
    }).join("");
    document.querySelector("#title").insertAdjacentHTML("afterbegin", html);
  });

// Fetch for Slide
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((productDetail) => {
    // console.log(productDetail.products.Models);
    const html = productDetail.products.Models.map((item) => {
      if (item.id == id) {
        var imageColor = item.productImg
          .map((productsImg) => {
            // console.log(productsImg);
            // console.log(productsImg.productImgColor)
            return `
          <div class="slide">
             <div class="slide-txt">
               <div class="slide-title"  >
                 <h3>${item.productName}</h3>
               </div>
             </div>
             <div class="slide-img">
             <img id="imgSrc" data-type="${item.vehicleType}"src="${productsImg.productImgColor}" />
             </div>
           </div>`;
          })
          .join("");
        document
          .querySelector("#hero")
          .insertAdjacentHTML("afterbegin", imageColor);

        // Slide JS
        let hero_slide = document.querySelector("#hero-slide");

        let hero_slide_items = hero_slide.querySelectorAll(".slide");

        let hero_slide_index = 0;

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

        setTimeout(() => hero_slide_items[0].classList.add("active"), 200);
      }
    });
  });

//Fetch for Color
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((productDetail) => {
    // console.log(productDetail.products.Models);
    const html = productDetail.products.Models.map((item) => {
      if (item.id == id) {
        var color = item.productImg
          .map((productsColor) => {
            // console.log(productsColor);
            // console.log(productsColor.color)
            return `
            <li class="slide-control-item ${productsColor.classColor}">
            <button class="slideButton ${productsColor.color}"></button>
          </li>
          `;
          })
          .join("");
        document
          .querySelector("#slide-control")
          .insertAdjacentHTML("afterbegin", color);

        // ColorPicker JS
        let hero_slide = document.querySelector("#hero-slide");

        let hero_slide_items = hero_slide.querySelectorAll(".slide");

        let hero_slide_index = 0;

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

        setTimeout(() => hero_slide_items[0].classList.add("active"), 200);
      }
    });
  });

//Fetch for Price
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models.map((item) => {
      if (item.id == id) {
        var productsPrice = item.productPrice
          .map((price) => {
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
          })
          .join("");
        document
          .querySelector("#product-price")
          .insertAdjacentHTML("afterbegin", productsPrice);
      }
    });
  });

// Fetch for Feature
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models.map((item) => {
      if (item.id == id) {
        var features = item.feature
          .map((feature) => {
            // console.log(feature)
            return `
        <div class="feature-items">
        <div class="feature-item">
          <div class="feature-icon">
          <img src="${feature.linkIcon}" alt="">
          </div>
          <div class="feature-inner">
            ${feature.featureContent}
          </div>
        </div>
      </div>
          `;
          })
          .join("");
        document
          .querySelector("#showroom-feature")
          .insertAdjacentHTML("afterbegin", features);
      }
    });
  });

// Fetch for Gallery
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models.map((item) => {
      if (item.id == id) {
        var gallery = item.gallery
          .map((galleryImg) => {
            // console.log(galleryImg)
            return `
          <img src="${galleryImg.galleryImg}" alt />
        `;
          })
          .join("");
        document
          .querySelector("#spinner")
          .insertAdjacentHTML("afterbegin", gallery);
      }
    });
  });

// Fetch for Vehicle Specs
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models.map((item) => {
      if (item.id == id) {
        var vehicleSpecs = item.vehicleSpecs
          .map((specsItem) => {
            // console.log(specsItem)
            return `
          <div class="zebra-table-item ${specsItem.addClass}">
            <div class="zebra-table-item-inner">
              <span><strong>${specsItem.specsName}</strong></span>
              <span>${specsItem.specsContent}</span>
            </div>
          </div>
          `;
          })
          .join("");
        document
          .querySelector("#vehicle-specs")
          .insertAdjacentHTML("afterbegin", vehicleSpecs);
      }
    });
  });

// Fetch for Availbable At
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    // console.log(index.products);
    const html = index.products.Models.map((item) => {
      if (item.id == id) {
        var availableAt = item.AvailableAt.map((availableAt) => {
          // console.log(specsItem)
          return `
          <div class="available-item">
              <a href="">
                <div class="available-img">
                  <img src="${availableAt.img}" alt="" sizes="32x32" />
                </div>
                <div class="available-name">
                  <div class="showroom-name">${availableAt.name}</div>
                  <div class="showroom-location">${availableAt.address}</div>
                </div>
              </a>
            </div>
            `;
        }).join("");

        document
          .querySelector("#available-items")
          .insertAdjacentHTML("afterbegin", availableAt);
      }
    });
  });

// Fetch for Dealership in Form Book to test
fetch(myJson)
  .then((response) => {
    return response.json();
  })
  .then((index) => {
    const html = index.products.Models.map((item) => {
      if (item.id == id) {
        var dealership = item.AvailableAt.map((dealership) => {
          return `
          <option value="">${dealership.name}</option>
            `;
        }).join("");

        document
          .querySelector("#form-input-select")
          .insertAdjacentHTML("afterbegin", dealership);
      }
    });
  });

// Get Vehicle Type
window.onload = function getType() {
  var a = document.getElementById("imgSrc").getAttribute("data-type");
  console.log(a);

  // Fetch for Different Cars
  fetch(myJson)
    .then((response) => {
      return response.json();
    })
    .then((index) => {
      // console.log(index.products);
      const sedan = index.products.Models.map((item) => {
        if (item.id != id && item.vehicleType == a) {
          return `
          <div class="swiper-slide" >
          <div class="product-card">
            <img src="${item.productImg[2].productImgColor}">
            <div class="product-card-content">
            <a href="products-detail.html?id=${item.id}"><h3 class="product-card-title">${item.productYear} ${item.productName}</h3></a>
              <p class="product-card-info">$ ${item.productPrice[0].price} Starting MSRP</p>
            <a href="products-detail.html?id=${item.id}"><button class="btn">Explore</button></a>
            </div>
        </div>
          </div>`;
        }
      }).join("");
      document
        .querySelector("#different-cars")
        .insertAdjacentHTML("afterbegin", sedan);
    });
};
