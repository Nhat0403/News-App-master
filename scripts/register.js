"use strict";

// hàm kiểm tra dữ liệu
let validate = true;
function validateData() {
  // firstName rỗng
  if (firstNameInput.value === "") {
    alert("input firstName empty");
    validate = false;
    // lastName rỗng
  } else if (lastNameInput.value === "") {
    alert("input lastName empty");
    validate = false;
    // uername rỗng
  } else if (usernameInput.value === "") {
    alert("input username empty");
    validate = false;
    // password rỗng hoặc ngắn hơn 9 kí tự
  } else if (passwordInput.value === "" || passwordInput.length < 9) {
    alert("input password empty or less than 8 characters");
    validate = false;
    // confirmPassword rỗng hoặc ko giống passwword
  } else if (
    confirmPasswordInput.value === "" ||
    confirmPasswordInput.value !== passwordInput.value
  ) {
    alert("input confrimPassword and input password do not match");
    validate = false;
    // kiểm tra tính độc nhất của username
  } else uniqueUsername();
}

// hàm kiểm tra tính độc nhất của username
function uniqueUsername() {
  for (let i = 0; i < userArr.length; i++) {
    // userArr username ko có chứa username trên form
    if (userArr[i].username === usernameInput.value) {
      alert("username must be unique");
      validate = false;
      break;
    } else validate = true;
  }
}

// khi nhấn nút register
submitBtn.addEventListener("click", function () {
  // kiểm tra dữ liệu hợp lệ
  validateData();

  const data = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    username: usernameInput.value,
    password: passwordInput.value,
  };

  if (validate) {
    alert("Register success");
    // thêm user vào mảng userArr
    userArr.push(data);
    // lưu vào storage
    saveToStorage("userArr", userArr);
    // chuyển tới trang login
    window.location.href = "../pages/login.html";
  }
});
