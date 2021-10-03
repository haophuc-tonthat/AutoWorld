//Search Suggest
let suggestion = [
  {
    id: "BMW-X2",
    productName: "BMW X2",
  },
  {
    id: "BMW-8-Series",
    productName: "BMW 8 Series",
  },
  {
    id: "Audi-RS",
    productName: "Audi RS e-tron GT",
  },
  {
    id: "Audi-A5-Sportback",
    productName: "Audi A5 Sportback",
  },
  {
    id: "Audi-S5-Sportback",
    productName: "Audi S5 Sportback",
  },
  {
    id: "Honda-Civic-Sedan",
    productName: "Honda Civic Sedan LX",
  },
  {
    id: "Honda-Accord-Sedan",
    productName: "Honda Accord Sedan",
  },
  {
    id: "Honda-CR-V",
    productName: "Honda CR-V",
  },
  {
    id: "Hyundai-Kona",
    productName: "Hyundai Kona",
  },
  {
    id: "Hyundai-Tucson",
    productName: "Hyundai Tucson",
  },
  {
    id: "Hyundai-IONIQ-Electric",
    productName: "Hyundai IONIQ Electric",
  },
  {
    id: "Toyota-Corolla",
    productName: "Toyota Corolla",
  },
  {
    id: "Toyota-Camry",
    productName: "Toyota Camry",
  },
  {
    id: "Toyota-Prius-Prime",
    productName: "Toyota Prius Prime",
  },
  {
    id: "Mazda-Mazda3",
    productName: "Mazda Mazda3",
  },
  {
    id: "Mazda-Mazda6",
    productName: "Mazda Mazda6",
  },
  {
    id: "Mazda-CX-5",
    productName: "Mazda CX-5",
  },
  {
    id: "Porsche-Macan",
    productName: "Porsche Macan",
  },
  {
    id: "Porsche-Panamera",
    productName: "Porsche Panamera",
  },
  {
    id: "Porsche-Cayenne",
    productName: "Porsche Cayenne",
  },
  {
    id: "Mercedes-Benz-CLA",
    productName: "Mercedes-Benz CLA",
  },
  {
    id: "Mercedes-Benz-GLC",
    productName: "Mercedes-Benz GLC",
  },
  {
    id: "Mercedes-Benz-E-Class",
    productName: "Mercedes-Benz E-Class",
  },
];

// Search JS
const searchWrapper = document.querySelector(".search-input");
const searchInput = searchWrapper.querySelector("input");
const searchSuggest = searchWrapper.querySelector(".keyword");

searchInput.onkeyup = (n) => {
  console.log(n.target.value);
  let userData = n.target.value;
  let emptyData = [];
  if (userData) {
    emptyData = suggestion.filter((data) => {
      return data.productName
        .toLocaleLowerCase()
        .startsWith(userData.toLocaleLowerCase());
    });
    // console.log(emptyData);
    emptyData = emptyData.map((data) => {
      return (data = `<li><a href="products-detail.html?id=${data.id}">${data.productName}</a></li>`);
    });
    console.log(emptyData);
    searchWrapper.classList.add("active");
  } else {
    searchWrapper.classList.remove("active");
  }
  showKeyWord(emptyData);
};
function showKeyWord(list) {
  let listData;
  if (!list.length) {
    userValue = searchInput.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  searchSuggest.innerHTML = listData;
}
