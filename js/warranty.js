$(async function () {
  async function getSchemes() {
    const response = await fetch("./data/warranty-schemes.json");

    return response.json();
  }

  $(".brand-menu").click(function () {
    $(".main-brand-menu").toggle();
  });

  const schemes = await getSchemes();

  var schemesStr = "<ul>";

  $.each(schemes, function (index, scheme) {
    schemesStr += `<li class="${
      index == 0 ? "active" : ""
    }" value=${index}><img src="${scheme.logo}"
    /><span>${scheme.brand}</span></li>`;
  });

  schemesStr += "</ul>";

  $("#brand-list").html(schemesStr);
  $(".main-brand-menu").html(schemesStr);

  // load first main
  loadMain(schemes[0]);

  $(".main-brand-menu ul li").each(function () {
    $(this).click(function () {
      const activeLi = $(".main-brand-menu ul li.active");

      const scheme = schemes[$(this).attr("value")];

      if (activeLi) {
        activeLi.removeClass("active");
      }

      $(this).addClass("active");

      loadMain(scheme);

      $(".main-brand-menu").hide();
    });
  });

  $(".history .content .left ul li").each(function () {
    $(this).click(function () {
      const activeLi = $(".history .content .left ul li.active");

      const scheme = schemes[$(this).attr("value")];

      if (activeLi) {
        activeLi.removeClass("active");
      }

      $(this).addClass("active");

      loadMain(scheme);
    });
  });
});

function loadMain(scheme) {
  $("#main").html(`
  <div class="top">
    <div class="pic">
      <img
        src="${scheme.imageTop || "./images/no-image.png"}"
      />
    </div>
    <div class="text">
      <div class="wrappertext">
        <p>
          ${scheme.policy}
        </p>
      </div>
    </div>
  </div>
  <div class="bottom">
    <ul class="sub">
      <li class="">
        <a
          class=""
          href="localhost:8080"
          ><strong class="">more details</strong>
        </a>
      </li>
    </ul>
    <div class="smallpic left">
      <img
        fade-in=""
        src="${scheme.imageBottomLeft || "./images/no-image.png"}"
      />
    </div>

    <div class="smallpic">
      <img
        fade-in=""
        src="${scheme.imageBottomRight || "./images/no-image.png"}"
      />
    </div>
  </div>`);
}
