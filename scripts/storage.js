"use strict";

const firstNameInput = document.getElementById("input-firstname");
const lastNameInput = document.getElementById("input-lastname");
const usernameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
const confirmPasswordInput = document.getElementById("input-password-confirm");

const submitBtn = document.getElementById("btn-submit");

// hàm lưu dữ liệu vào storage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// hàm lấy dữ liệu từ storage
function getFromStorage(key) {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
}

// hàm xoá dữ liệu từ storage
function removeFromStorage(key) {
  localStorage.removeItem(key);
}

const userArr = getFromStorage("userArr");

let currentUser = [];
currentUser = getFromStorage("currentUser");

let todoArr = [];
todoArr = getFromStorage("todoArr");

let newsData = [];
newsData = getFromStorage("newsData");

let temp = {
  'category': 'business',
  'pageSize': 5
};
// saveToStorage('temp', temp);
temp = getFromStorage('temp');

// hàm chuyển từ JS Object sang Class Instance và thêm user vào User
function parseUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.username,
    userData.password
  );
  return user;
}

// hàm chuyển từ JS Object sang Class Instance và thêm task vào Task
function parseTask(taskData) {
  const task = new Task(taskData.task, taskData.onwer, taskData.isDone);
  return task;
}

// hàm fetch lấy dữ liệu từ api
const getJSON = function (url, errorMsg = "Something went worng") {
  // trả về response của fetch từ api
  return fetch(url).then((resposne) => {
    // kiểm tra api có tồn tại
    if (!resposne.ok) throw new Error(`${errorMsg}(${resposne.status})`);
    // trả về dữ liệu json
    return resposne.json();
  });
};
