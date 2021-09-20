NEWS_TO_SHOW_BUTTON = 4;

$(async function () {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Allow-Methods", "*");
  myHeaders.append("Access-Control-Allow-Headers", "*");

  async function getNews() {
    const response = await fetch(
      "https://quirky-elion-9c75ab.netlify.app/news.json",
      {
        method: "GET",
        mode: "cors",
        headers: myHeaders,
      }
    );

    console.log(response);

    return response.json();
  }

  const news = await getNews();

  let firstNewsChunk = getNewsChunk(0, 3, news);

  let latestNews = $(".latest-news");

  latestNews.html(firstNewsHtml(news[0]));

  let nextNewsHtmlStr = "";

  $.each(firstNewsChunk, function (index, article) {
    if (index == 0) {
      return;
    }
    nextNewsHtmlStr += nextNews(article);
  });

  latestNews.append(infinityScrollComponent(nextNewsHtmlStr));

  detectScrollToBottom(firstNewsChunk, news);

  $("button").click(function () {
    let from = firstNewsChunk.length + 1;

    let nextChunk = getNewsChunk(from, from + 1, news);

    firstNewsChunk = firstNewsChunk.concat(nextChunk);
    loadMore(nextChunk);
  });
});

function firstNewsHtml(article) {
  let htmlStr = `<div class="main-news news-thumb row no-gutters first-news">
                  <div class="col-12 col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                    <h3 class="news-section-title--secondary">News</h3>
                    <h2 class="news-section-title--primary">Autoworld</h2>
                  </div>
                  <div
                    class="
                      col-12 col-md-10 col-xl-8
                      offset-md-1 offset-xl-2
                      main-image
                    "
                  >
                    <a
                      class="d-block title-box"
                      href="${article.link}"
                      ><div class="image css-image">
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
                            src="${article.image || "./images/no-image.png"}"
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
                              object-fit: cover;
                            "
                          />
                        </div></div
                    ></a>
                  </div>
                  <div class="col-12 col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                    <div class="title">
                      <div class="date newsListBold">
                        <span
                          ><time datetime="2021-09-06"
                            >${article.date}</time
                          ></span
                        >
                      </div>
                    </div>
                    <div class="main-title"><div class="tags"></div></div>
                  </div>
                  <div class="col-12 col-md-10 col-xl-8 offset-md-1 offset-xl-2">
                    <div class="row no-gutters data">
                      <div class="col-12 col-md-8">
                        <a
                          class="d-block title-box"
                          href="${article.link}"
                          ><h3 class="news-title--primary">
                            ${article.title}&nbsp;
                          </h3></a
                        >
                        <div class="d-none d-md-block main-news-abstract">
                          <div>
                            <p>
                              ${article.shortContent}&nbsp;
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-4 text-md-right">
                        <a
                          class="boxed d-none d-md-inline-block title-box"
                          href="${article.link}"
                          >Read More</a
                        >
                      </div>
                    </div>
                  </div>
                </div>`;

  return htmlStr;
}

function nextNews(article) {
  htmlStr = `<article
              class="news-thumb row no-gutters horizontal news-left"
            >
              <div
                class="col-12 col-md-10 col-xl-8 offset-md-1 offset-xl-2"
              >
                <div class="row no-gutters">
                  <div class="col-12 col-md-6">
                    <a
                      class="d-block title-box"
                      href="${article.link}"
                      ><div class="image css-image">
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
                            src="${article.image || "./images/no-image.png"}"
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
                              object-fit: cover;
                            "
                          />
                        </div></div
                    ></a>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="h-100 d-md-flex flex-column data">
                      <div class="title">
                        <div class="date">
                          <span
                            ><time datetime="2021-09-03"
                              >${article.date}</time
                            ></span
                          >
                        </div>
                      </div>
                      <div class="my-md-auto">
                        <div class="main-title">
                          <div class="tags" style="visibility: ${
                            article.tag ? "unset" : "hidden"
                          };">
                            <a
                              class="tag title-box"
                              href=""
                              >${article.tag}</a
                            >
                          </div>
                        </div>
                        <a
                          class="d-block title-box"
                          href="${article.link}"
                          ><h2 class="news-title--primary">
                            ${article.title}
                          </h2></a
                        >
                      </div>
                      <a
                        class="
                          boxed
                          read-more
                          d-none d-md-block
                          title-box
                        "
                        href="${article.link}"
                        ><span>Read More</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </article>`;

  return htmlStr;
}

function infinityScrollComponent(articleStr) {
  let htmlStr = `<div class="infinite-scroll-component__outerdiv">
                      <div
                        id="next-news"
                        class="infinite-scroll-component"
                        style="
                          height: auto;
                          overflow: auto;
                          -webkit-overflow-scrolling: touch;
                        "
                      >${articleStr}</div></div>`;

  return htmlStr;
}

function getNewsChunk(from, to, news) {
  return news.slice(from, to);
}

function detectScrollToBottom(currentChunk, news) {
  $(window).scroll(async function () {
    if (
      $(window).scrollTop() + $(window).height() >=
        $(document).height() - 500 &&
      $(window).scrollTop() + $(window).height() <= $(document).height() - 440
    ) {
      if (currentChunk.length >= news.length) {
        return;
      }

      let from = currentChunk.length;

      let nextChunk = getNewsChunk(from, from + 1, news);

      currentChunk = currentChunk.concat(nextChunk);

      if (currentChunk.length > NEWS_TO_SHOW_BUTTON) {
        showLoadMoreButton();

        return;
      }

      await loadMore(nextChunk);
    }
  });
}

function showSpinner() {
  $(".spinner").css("height", "1px");
}

function hideSpinner() {
  $(".spinner").css("height", "0px");
}

function showLoadMoreButton() {
  $(".more-link.read-more").css("visibility", "unset");
}

function hideLoadMoreButton() {
  $(".more-link.read-more").css("visibility", "hidden");
}

async function loadMore(nextChunk) {
  showSpinner();

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  hideSpinner();

  nextChunkHtmlStr = "";

  $.each(nextChunk, function (index, article) {
    nextChunkHtmlStr += nextNews(article);
  });

  if (nextChunkHtmlStr) {
    $(".infinite-scroll-component").append(nextChunkHtmlStr);
  }
}
