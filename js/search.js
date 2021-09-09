//Search
let suggestion = [
    {
      "id":"BMW-X2",
      "productName":"BMW X2"
    },
    {
      "id":"Audi-RS",
      "productName":"Audi RS e-tron GT"
    },
    {
      "id":"BMW-8-Series",
      "productName":"BMW 8 Series"
    },
    {
      "id":"Honda-Civic-Sedan",
      "productName":"Honda Civic Sedan LX"
    },
    {
      "id":"Hyundai-Kona",
      "productName":"Hyundai Kona"
    },
    {
      "id":"Hyundai-Tucson",
      "productName":"Hyundai Tucson"
    },
    {
      "id":"Toyota-Corolla",
      "productName":"Toyota Corolla"
    }

  ];
  const searchWrapper = document.querySelector(".search-input");
  const searchInput = searchWrapper.querySelector("input");
  const searchSuggest = searchWrapper.querySelector(".keyword");
  
  searchInput.onkeyup = (n) => {
    console.log(n.target.value);
    let userData = n.target.value;
    let emptyData = [];
    if (userData) {
      emptyData = suggestion.filter((data) => {
        return data.productName.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      });
      // console.log(emptyData);
      emptyData = emptyData.map((data) =>{
        return data = `<li><a href="products-detail.html?id=${data.id}">${data.productName}</a></li>`;   
      })
      console.log(emptyData)
      searchWrapper.classList.add("active")
    }else{
      searchWrapper.classList.remove("active")
    }
    showKeyWord(emptyData);
  };
  function showKeyWord(list){
    let listData;
    if(!list.length){
      userValue = searchInput.value;
      listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    searchSuggest.innerHTML = listData;
  }