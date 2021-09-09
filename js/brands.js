const myProduct = new Request("data/products.json");
//Fetch for New Models
fetch(myProduct)
    .then((response) =>{
        return response.json();
    })
    .then((brands)=>{
        // console.log("brands.products.Models")
        const html= brands.products.Models
        .map((item)=>{
            if(item.productYear == "2022"){
                return `
                <div class="showroom-listing_item">
                <a href="products-detail.html?id=${item.id}">
                  <div class="showroom-product_img">
                    <img src="${item.productImg[3].productImgColor}" alt="" />
                  </div>
                  <div class="showroom-product_year">${item.productYear}</div>
                  <div class="showroom-product_name">${item.productName}</div>
                  <div class="showroom-product_msrp">MSRP From: $${item.productPrice[0].price}</div>
                </a>
              </div>
                `
            }
        })
        .join("");
        document.querySelector("#new-models").insertAdjacentHTML("afterbegin",html);
    })

//Fetch for Honda
fetch(myProduct)
    .then((response) =>{
        return response.json();
    })
    .then((brands)=>{
        // console.log("brands.products.Models")
        const html= brands.products.Models
        .map((item)=>{
            if(item.brand == "Honda"){
                return `
                <div class="showroom-listing_item">
                <a href="products-detail.html?id=${item.id}">
                  <div class="showroom-product_img">
                    <img src="${item.productImg[3].productImgColor}" alt="" />
                  </div>
                  <div class="showroom-product_year">${item.productYear}</div>
                  <div class="showroom-product_name">${item.productName}</div>
                  <div class="showroom-product_msrp">MSRP From: $${item.productPrice[0].price}</div>
                </a>
              </div>
                `
            }
        })
        .join("");
        document.querySelector("#honda").insertAdjacentHTML("afterbegin",html);
    })

//Fetch for Hyundai
fetch(myProduct)
    .then((response) =>{
        return response.json();
    })
    .then((brands)=>{
        // console.log("brands.products.Models")
        const html= brands.products.Models
        .map((item)=>{
            if(item.brand == "Hyundai"){
                return `
                <div class="showroom-listing_item">
                <a href="products-detail.html?id=${item.id}">
                  <div class="showroom-product_img">
                    <img src="${item.productImg[3].productImgColor}" alt="" />
                  </div>
                  <div class="showroom-product_year">${item.productYear}</div>
                  <div class="showroom-product_name">${item.productName}</div>
                  <div class="showroom-product_msrp">MSRP From: $${item.productPrice[0].price}</div>
                </a>
              </div>
                `
            }
        })
        .join("");
        document.querySelector("#hyundai").insertAdjacentHTML("afterbegin",html);
    })

//Fetch for Toyota
fetch(myProduct)
    .then((response) =>{
        return response.json();
    })
    .then((brands)=>{
        // console.log("brands.products.Models")
        const html= brands.products.Models
        .map((item)=>{
            if(item.brand == "Toyota"){
                return `
                <div class="showroom-listing_item">
                <a href="products-detail.html?id=${item.id}">
                  <div class="showroom-product_img">
                    <img src="${item.productImg[3].productImgColor}" alt="" />
                  </div>
                  <div class="showroom-product_year">${item.productYear}</div>
                  <div class="showroom-product_name">${item.productName}</div>
                  <div class="showroom-product_msrp">MSRP From: $${item.productPrice[0].price}</div>
                </a>
              </div>
                `
            }
        })
        .join("");
        document.querySelector("#toyota").insertAdjacentHTML("afterbegin",html);
    })

//Fetch for Audi
fetch(myProduct)
    .then((response) =>{
        return response.json();
    })
    .then((brands)=>{
        // console.log("brands.products.Models")
        const html= brands.products.Models
        .map((item)=>{
            if(item.brand == "Audi"){
                return `
                <div class="showroom-listing_item">
                <a href="products-detail.html?id=${item.id}">
                  <div class="showroom-product_img">
                    <img src="${item.productImg[3].productImgColor}" alt="" />
                  </div>
                  <div class="showroom-product_year">${item.productYear}</div>
                  <div class="showroom-product_name">${item.productName}</div>
                  <div class="showroom-product_msrp">MSRP From: $${item.productPrice[0].price}</div>
                </a>
              </div>
                `
            }
        })
        .join("");
        document.querySelector("#audi").insertAdjacentHTML("afterbegin",html);
    })

//Fetch for Mazda
fetch(myProduct)
    .then((response) =>{
        return response.json();
    })
    .then((brands)=>{
        // console.log("brands.products.Models")
        const html= brands.products.Models
        .map((item)=>{
            if(item.brand == "Mazda"){
                return `
                <div class="showroom-listing_item">
                <a href="products-detail.html?id=${item.id}">
                  <div class="showroom-product_img">
                    <img src="${item.productImg[3].productImgColor}" alt="" />
                  </div>
                  <div class="showroom-product_year">${item.productYear}</div>
                  <div class="showroom-product_name">${item.productName}</div>
                  <div class="showroom-product_msrp">MSRP From: $${item.productPrice[0].price}</div>
                </a>
              </div>
                `
            }
        })
        .join("");
        document.querySelector("#mazda").insertAdjacentHTML("afterbegin",html);
    })

//Fetch for Porsche
fetch(myProduct)
.then((response) =>{
    return response.json();
})
.then((brands)=>{
    // console.log("brands.products.Models")
    const html= brands.products.Models
    .map((item)=>{
        if(item.brand == "Porsche"){
            return `
            <div class="showroom-listing_item">
            <a href="products-detail.html?id=${item.id}">
              <div class="showroom-product_img">
                <img src="${item.productImg[3].productImgColor}" alt="" />
              </div>
              <div class="showroom-product_year">${item.productYear}</div>
              <div class="showroom-product_name">${item.productName}</div>
              <div class="showroom-product_msrp">MSRP From: $${item.productPrice[0].price}</div>
            </a>
          </div>
            `
        }
    })
    .join("");
    document.querySelector("#porsche").insertAdjacentHTML("afterbegin",html);
})

//Fetch for Mercedes
fetch(myProduct)
.then((response) =>{
    return response.json();
})
.then((brands)=>{
    // console.log("brands.products.Models")
    const html= brands.products.Models
    .map((item)=>{
        if(item.brand == "Mercedes"){
            return `
            <div class="showroom-listing_item">
            <a href="products-detail.html?id=${item.id}">
              <div class="showroom-product_img">
                <img src="${item.productImg[3].productImgColor}" alt="" />
              </div>
              <div class="showroom-product_year">${item.productYear}</div>
              <div class="showroom-product_name">${item.productName}</div>
              <div class="showroom-product_msrp">MSRP From: $${item.productPrice[0].price}</div>
            </a>
          </div>
            `
        }
    })
    .join("");
    document.querySelector("#mercedes").insertAdjacentHTML("afterbegin",html);
})
