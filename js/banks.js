$(async function () {
  async function getBanks() {
    const response = await fetch("./data/banks.json");

    return response.json();
  }

  let banks = await getBanks();

  $("#the-filter").keyup(async function () {
    banks = await getBanks();
    var search = this.value.toLowerCase();

    if (search == "") {
      return paginationData(banks);
    } else {
      banks = (banks || []).filter(function (bank) {
        return (
          bank.name.toLowerCase().indexOf(search) > -1 ||
          bank.country.toLowerCase().indexOf(search) > -1
        );
      });
      paginationData(banks);
    }
  });

  paginationData(banks);
});

function paginationData(data) {
  let pag = $("#pagination");
  let table = $("#table");

  pag.pagination({
    dataSource: data,
    pageSize: 5,
    autoHidePrevious: true,
    autoHideNext: true,

    ajax: {
      beforeSend: function () {
        table.html("<h1>Loading banks.....</h1>");
      },
    },

    callback: function (data, pagination) {
      var banks = "<ul>";

      $.each(data, function (index, item) {
        banks += `<li>
        <a href="${item.url}"
          ><span class="three-m">${item.country}</span
          ><span class="one"
            ><img src="${item.logo || "./images/no-image.png"}"
          /></span>
          <div>
            <div class="two">${item.name}</div>
            <div class="three">${item.country}</div>
          </div>

          <span class="four">View detail </span></a
        >
      </li>`;
      });

      banks += "</ul>";

      table.html(banks);
    },
  });
}
