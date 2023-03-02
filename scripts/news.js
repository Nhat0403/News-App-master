"use strict";

const newsContainer = document.getElementById("news-container");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageNum = document.getElementById("page-num");

let p,
  totalResults,
  lastPage = false,
  j = 1,
  newsArr = [];

// hàm lấy api
const api = async function (country, category, pageSize, page, apikey, search) {
  console.log(country);
  console.log(category);
  console.log(pageSize);
  console.log(page);
  const data = await Promise.all([
    getJSON(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=${apikey}&q=${search}`
    ),
  ])
    .then(function (data) {
      // in data của api ra màn hình
      renderNews(data[0].articles);
      // console.log(data[0].articles);

      totalResults = data[0].totalResults;
      newsArr = data[0].articles;
      // tìm trang cuối
      p = Math.ceil(totalResults / 5) - 1;
      // console.log(`p: ` + p);
      if (+j === p) {
        lastPage = true;
      } else lastPage = false;
    })
    // hiển thị nếu api lỗi
    .catch((err) => console.log(err.message));
};

// hàm in dữ liệu ra màn hình
function renderNews(data) {
  // console.log('news');
  // console.log(currentUser);
  newsContainer.innerHTML = "";
  // công thức của dữ liệu đc in ra màn hình
  data.forEach((arr) => {
    // console.log(arr.urlToImage);
    const html = `
        <div class="card flex-row flex-wrap">
            <div class="card mb-3" style="">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="${
                    arr.urlToImage ||
                    // ảnh thay thế khi null||undefined
                    `https://wallpaperaccess.com/full/7849392.jpg`
                  }"
                    class="card-img"
                    alt="">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${arr.title}</h5>
                    <p class="card-text">${arr.content || ""}</p>
                    <a href="${arr.url}"
                      class="btn btn-primary">View</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
    // newsContainer.insertAdjacentHTML("beforeend", html);
    newsContainer.innerHTML += html;
  });

  // ảnh thay thế khi null||undefined
  // `https://i.kym-cdn.com/photos/images/newsfeed/002/048/000/432`
}
// }

// sự kiện nút tiến trang
btnNext.addEventListener("click", function () {
  j++;
  // console.log(`j: ` + j);
  // console.log(`lastPage: ` + lastPage);
  hiddenPage();
  // kiểm tra có phải trang cuối
  if (lastPage) {
    // ẩn nút tiến trang khi là trang cuối
    btnNext.classList.add("hidden");
  } else if (!lastPage) {
    btnNext.classList.remove("hidden");
  }
});

// sự kiện nút lùi trang
btnPrev.addEventListener("click", function () {
  j--;
  // console.log(`j: ` + j);
  // console.log(`lastPage: ` + lastPage);
  hiddenPage();
});

let cate, pagesi, searchq;
// hàm ẩn nút lùi trang
function hiddenPage() {
  pageNum.textContent = j;
  // api("us", j, "fb336decee3049c3aded1346d15b261c");
  if(currentUser.length !== 0) {
    cate = currentUser.category;
    pagesi = currentUser.pageSize;
  } else {
    console.log(temp);
    cate = temp.category;
    pagesi = temp.pageSize;
  }
  searchq = "";
  // fetch api => in dữ liệu ra màn hình
  api("us", cate, pagesi, j, "05038e657279400b8e4c1ab41cb5460b", searchq);
  // kiểm tra số trang hiện tại
  if (j === 1) {
    // ẩn nút tiến trang trang khi là trang 1
    btnPrev.classList.add("hidden");
  } else if (j > 1) {
    // hiển thị thị nút tiến và lùi trang
    btnPrev.classList.remove("hidden");
    btnNext.classList.remove("hidden");
  }
}

// sự kiện khi tải lại trang
window.addEventListener("load", function () {
  j = 1;
  // console.log(`j: ` + j);
  hiddenPage();
  // console.log(`lastPage: ` + lastPage);
});
