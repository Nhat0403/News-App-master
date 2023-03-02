"use strict";

const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");

// sự kiện nút save setting
submitBtn.addEventListener("click", function () {
  // kiểm tra input page size <1
  if (inputPageSize.value < 1) {
    alert("input page size must be > 1");
  } else {
    if(currentUser.length !== 0) {
    // thêm page size và category vào currentUser
      // let a = {'pageSize': inputPageSize.value, 'category': inputCategory.value};
      currentUser.pageSize = inputPageSize.value;
      currentUser.category = inputCategory.value;
      // console.log(`currentUser.pageSize: ` + currentUser.pageSize);
      // console.log(`currentUser.category: ` + currentUser.category);
      alert("Moving to News");
      // lưu vào storage
      saveToStorage("currentUser", currentUser);
    } else {
      temp.pageSize = inputPageSize.value;
      temp.category = inputCategory.value;
      saveToStorage("temp", temp);
      // console.log(temp);
    }
    window.location.href = "/pages/news.html";
  }
});
