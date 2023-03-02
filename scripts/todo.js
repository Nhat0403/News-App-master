"use strict";

const inputTask = document.getElementById("input-task");
const todoList = document.getElementById("todo-list");

const btnAdd = document.getElementById("btn-add");

// hàm kiểm tra dữ liệu
let validate = true;
function validateData() {
  // kiểm tra input task rỗng
  if (inputTask.value === "") {
    alert("inputTask empty");
    validate = false;
  } else validate = true;
}

// khi nhấn nút add
btnAdd.addEventListener("click", function () {
  // kiểm tra dữ liệu hợp lệ
  validateData();

  const data = {
    task: inputTask.value,
    owner: currentUser.username,
    isDone: false,
  };

  if (validate) {
    // thêm data vào mảng todoArr
    todoArr.push(data);
    // thêm id vào todoArr
    for (let i = 0; i < todoArr.length; i++) {
      todoArr[i].id = i;
    }
    // lưu vào storage
    saveToStorage("todoArr", todoArr);
    // in dữ liệu ra màn hình
    renderTodoList();
    // xoá input
    inputTask.value = "";
  }
});

// hàm in dữ liệu ra màn hình
function renderTodoList() {
  todoList.innerHTML = "";
  // công thức in dữ liệu ra màn hình
  for (let i = 0; i < todoArr.length; i++) {
    // tìm todoArr của currentUser
    if (todoArr[i].owner === currentUser.username) {
      const html = `<li class="${
        todoArr[i].isDone ? "checked" : ""
      }" id="todo-${todoArr[i].id}" onclick="todoToggle(this.id)">
      <i class="bi" id="todo-${todoArr[i].id}-icon"></i>
      ${todoArr[i].task}<span class="close" id="${
        todoArr[i].id
      }" onclick="deleteTodo(this.id)">x</span></li>`;
      // todoList.insertAdjacentHTML("beforeend", html);
      todoList.innerHTML += html;
    }
  }
}

// hàm toggle todo list
function todoToggle(e) {
  console.log(e);
  const i = e.slice(5);
  // thay đổi giá trị của isDone trong todoArr
  todoArr[i].isDone = todoArr[i].isDone ? false : true;
  // công thức toggle khi nhấn vào todoArr
  document.getElementById(`${e}`).classList.toggle("checked");
  // lưu vào storage
  saveToStorage("todoArr", todoArr);
}

// hàm xoá todoArr
function deleteTodo(e) {
  // xoá todoArr
  document.getElementById(`todo-${e}`).remove();
  // công thức xoá todoArr ra khỏi mảng
  for (let i = 0; i < todoArr.length; i++) {
    // xoá todoArr vị trí e ra khỏi mảng
    if (Number(todoArr[i].id) === Number(e)) {
      todoArr.splice(i, 1);
    }
  }
  // lưu vào storage
  saveToStorage("todoArr", todoArr);
}

window.addEventListener("load", function () {
  renderTodoList();
});
