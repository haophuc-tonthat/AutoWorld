$(async function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const news = await getNews();

  if (
    !params.id ||
    (params.id && parseInt(params.id) > news.length) ||
    (params.id && parseInt(params.id) < 0)
  ) {
    $("#page").html(NotFoundTemplate());
  } else {
    const newsDetails = await findNewsById(params.id);

    news.splice(params.id, 1);

    const relatedNews = getRandom(news, 3);

    $("#page").html(
      `${newsBasicsTemplate(newsDetails)}${paragraphOneTemplate(
        newsDetails
      )}${paragraphTwoTemplate(newsDetails)}${paragraphThreeTemplate(
        newsDetails
      )}${relatedNewsTemplate(relatedNews)}`
    );

    $(".swiper-wrapper").html(relatedNewsMobileTemplate(relatedNews));
  }
});

function checkMobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }

  return false;
}

async function findNewsById(id) {
  const news = await getNews();
  const newsDetails = await getNewsDetails();

  let currentNews = news[id];
  Object.assign(currentNews, newsDetails[id]);

  return currentNews;
}

async function getNews() {
  const response = await fetch("./data/news.json");

  return response.json();
}

async function getNewsDetails() {
  const response = await fetch("./data/news-details.json");

  return response.json();
}

function newsBasicsTemplate(news) {
  return `<section data-element="newsBasics" id="news-basics" class="css-gwl9wl">
            <div class="row no-gutters header-title">
              <div class="col-12 col-md-10 offset-md-1 title">
                <h2>News</h2>
                <h1>${news.title}&nbsp;</h1>
              </div>
              <div class="col-12 col-md-10 offset-md-1 main-image">
                <div class="image first">
                  <div
                    style="
                      display: block;
                      overflow: hidden;
                      position: absolute;
                      inset: 0px;
                      box-sizing: border-box;
                      margin: 0px;
                    "
                  >
                    <img
                      alt="${news.title}"
                      src="${news.image}"
                      class="image"
                      style="
                        position: absolute;
                        inset: 0px;
                        box-sizing: border-box;
                        padding: 0px;
                        border: none;
                        margin: auto;
                        display: block;
                        width: 0px;
                        height: 0px;
                        min-width: 100%;
                        max-width: 100%;
                        min-height: 100%;
                        max-height: 100%;
                      "
                    />
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                <div class="row dates-tags">
                  <div class="col">
                    <div class="date">
                      <span>${news.date}</span
                      ><span
                        ><div class="news-tag"><div class="tags"style="visibility: ${
                          news.tag ? "unset" : "hidden"
                        };">${news.tag}</div></div
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>`;
}

function paragraphOneTemplate(news) {
  return `<section data-element="paragraphs" id="paragraph--1" class="one">
            <div class="row no-gutters normal first-para">
              <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                <div class="texts-wrapper wrapper">
                  <h2 class="primary texts-block-title--primary"></h2>
                  <div>
                    <p>
                      ${news.paragraphOne}&nbsp;<br />
                    </p>
                  </div>
                  <div class="links d-block d-md-flex">
                    <a href="#" class="css-18xcyx1"></a>
                  </div>
                </div>
                <div class="row images"><div class="col-12 col-md"></div></div>
              </div>
            </div>
          </section>`;
}

function paragraphTwoTemplate(news) {
  return `<section data-element="paragraphs" id="paragraph--2" class="related">
            <div class="row no-gutters images-r first-para">
              <div
                class="
                  col-12 col-md-10
                  offset-md-1
                  col-xl-8
                  offset-xl-2
                  row
                  no-gutters
                  align-items-stretch
                "
              >
                <div class="col-12 col-md-6 col-lg-4 offset-lg-1">
                  <div class="d-flex align-items-center h-100">
                    <div class="texts-wrapper texts wrapper">
                      <h2 class="primary texts-block-title--primary"></h2>
                      <div>
                        <p>
                          ${news.paragraphTwo}.<br />
                          &nbsp;
                        </p>
                      </div>
                      <div class="links d-block d-md-flex">
                        <a href="#" class="css-18xcyx1"></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 offset-lg-1">
                  <div class="image first">
                    <div
                      style="
                        display: block;
                        overflow: hidden;
                        position: absolute;
                        inset: 0px;
                        box-sizing: border-box;
                        margin: 0px;
                      "
                    >
                      <img
                        alt="${news.title}"
                        src="${news.imageContent}"
                        class="image"
                        style="
                          position: absolute;
                          inset: 0px;
                          box-sizing: border-box;
                          padding: 0px;
                          border: none;
                          margin: auto;
                          display: block;
                          width: 0px;
                          height: 0px;
                          min-width: 100%;
                          max-width: 100%;
                          min-height: 100%;
                          max-height: 100%;
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>`;
}

function paragraphThreeTemplate(news) {
  return `<section data-element="paragraphs" id="paragraph--3" class="related">
            <div class="row no-gutters normal first-para">
              <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2">
                <div class="texts-wrapper wrapper">
                  <h2 class="primary texts-block-title--primary"></h2>
                  <div>
                    <p>
                      ${news.paragraphThree}
                      &nbsp;
                    </p>
                  </div>
                  <div class="links d-block d-md-flex">
                    <a href="#"></a>
                  </div>
                </div>
                <div class="row images"><div class="col-12 col-md"></div></div>
              </div>
            </div>
          </section>`;
}

function relatedNewsTemplate(news) {
  let relatedNewsStr = `<section data-element="newsList" id="news-thumbs" class="related">
                            <div>
                              <div class="related-news desktop">
                                <div class="row no-gutters">
                                  <div
                                    class="
                                      col-10
                                      offset-1
                                      col-md-10
                                      offset-md-1
                                      col-xl-8
                                      offset-xl-2
                                    "
                                  >
                                    <h2 class="text-uppercase">More News</h2>
                                    <div class="row" id="related-news">`;

  $.each(news, function (index, article) {
    relatedNewsStr += `<div class="news-thumb col">
                          <a
                            class="news-boxed"
                            href="${article.link}"
                            ><div class="image first">
                              <div
                                style="
                                  display: block;
                                  overflow: hidden;
                                  position: absolute;
                                  inset: 0px;
                                  box-sizing: border-box;
                                  margin: 0px;
                                "
                              >
                                <img
                                  alt="${article.title}"
                                  src="${article.image}"
                                  class="image"
                                  style="
                                    position: absolute;
                                    inset: 0px;
                                    box-sizing: border-box;
                                    padding: 0px;
                                    border: none;
                                    margin: auto;
                                    display: block;
                                    width: 0px;
                                    height: 0px;
                                    min-width: 100%;
                                    max-width: 100%;
                                    min-height: 100%;
                                    max-height: 100%;
                                  "
                                />
                              </div></div
                          ></a>
                          <div class="css-jddvzj">
                            <div class="date">
                              <span
                                ><time datetime="2021-09-09"
                                  >${article.date}</time
                                ></span
                              >
                            </div>
                          </div>
                          <div class="news-tag"><div class="tags"></div></div>
                          <a
                            class="news-boxed"
                            href="${article.link}"
                            ><h2>
                              ${article.title}
                            </h2></a
                          ><a
                            class="boxed read-more news-boxed"
                            href="${article.link}"
                            ><span>Read More</span></a
                          >
                        </div>`;
  });

  relatedNewsStr += `
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>`;

  return relatedNewsStr;
}

function relatedNewsMobileTemplate(news) {
  let relatedNewsStr = "";

  $.each(news, function (index, article) {
    relatedNewsStr += ` <div class="swiper-slide">
    <div class="content">
    <img src="${article.image}" alt="" />
    <h2>${article.title}</h2>
  </div></div>`;
  });

  return relatedNewsStr;
}

function NotFoundTemplate() {
  return `
  <section style="height: 100vh;
                  width: 100%;
                  display: table;">
      <div class="bg" style="background-image: url(https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/404/404-image.jpg);position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center bottom;"></div>
      <div class="holder" style="display: table-cell;
      width: 100%;
      height: 100%;
      position: relative;
      text-align: center;
      top: 20rem;">
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/404/404.png">
          <div class="title">PAGE NOT FOUND</div>
          <div class="subtitle">What you’re looking for isn’t here</div>
      </div>
  </section>`;
}

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
