$(async function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const bank = await findBankByName(params.name);

  const details = `<div class="key-value">
      <span class="col-3">Introduction </span><span>${
        bank.introduction || "Updating soon"
      }</span>
    </div>
    <div class="key-value">
      <span class="col-3">Benefit</span><span>${
        bank.benefit || "Updating soon"
      }</span>
    </div>
    <div class="key-value">
      <span class="col-3">Required</span><span>${
        bank.required || "Updating soon"
      }</span>
    </div>`;

  $("#details").html(details);
  $("#bank-name").html(bank.name);
  $("#img").html(
    `  <div class="image img-loaded" style="background-image: url('${
      bank.image || ""
    }')"></div>`
  );
});

async function findBankByName(name) {
  const banks = await getBanks();

  const formatName = name.replaceAll("-", "").toLowerCase();

  const elementPos = banks
    .map(function (x) {
      return x.name.replaceAll(" ", "").toLowerCase();
    })
    .indexOf(formatName);
  const bankFound = banks[elementPos];

  return bankFound;
}

async function getBanks() {
  const response = await fetch("./data/banks.json");

  return response.json();
}
