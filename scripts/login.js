"use strict";

// hàm validate người dùng
function validateUser() {
  // công thức tìm người dùng
  currentUser = userArr.find((user) => user.username === usernameInput.value);
  // kiểm tra password
  if (currentUser.password === passwordInput.value) {
    // lưu vào storage
    saveToStorage("currentUser", currentUser);
    alert("Login success");
    window.location.href = "../index.html";
  } else alert("input password empty or wrong");
}

// sự kiện nút login
submitBtn.addEventListener("click", function () {
  // kiểm tra username
  if (usernameInput.value === "" || !currentUser) {
    alert("input firstName empty or wrong");
  } else validateUser();
});
