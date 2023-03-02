"use strict";

const inputQuery = document.getElementById("input-query");

// sự kiện nút search
submitBtn.addEventListener("click", function () {
  // kiểm tra inputQuery rỗng
  if (inputQuery.value === "") {
    alert("input query empty");
  } else {
    // hàm tìm dữ liệu search được
    searchq = inputQuery.value;
    api("us", cate, pagesi, j, "05038e657279400b8e4c1ab41cb5460b", searchq);
    console.log(j);
    console.log(totalResults);
  }
});
