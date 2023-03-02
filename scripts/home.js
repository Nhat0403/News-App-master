"use strict";

const loginModalWelcome = document.getElementById("login-modal-welcome");
const loginModalRow = document.getElementById("login-modal-row");
const logoutBtn = document.getElementById("btn-logout");

// thay đổi trang home khi login thành công
window.addEventListener("load", function () {
  // curentUser có tồn tại?
  if (currentUser.length !== 0) {
    // in lời chào
    loginModalWelcome.textContent = `Welcome ` + currentUser.firstName;
    // ẩn nút login và register
    loginModalRow.classList.toggle("hidden");
    logoutBtn.classList.remove("hidden");
  } else logoutBtn.classList.add("hidden");
});

// sự kiện của nút logout
logoutBtn.addEventListener("click", function () {
  alert("Logout success");
  // xoá currentUser ra khỏi storage
  removeFromStorage("currentUser");
  currentUser = [];
  // hiển thị yêu cầu login hoặc register
  loginModalWelcome.textContent = `Please Login or Register`;
  // hiển thị nút login và register
  loginModalRow.classList.toggle("hidden");
  logoutBtn.classList.add("hidden");
});
