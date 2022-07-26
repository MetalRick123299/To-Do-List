import { todoList } from "./todo.js";

const addButton = document.querySelector("#addTodo");
const overlay = document.querySelector(".overlay");
const popUp = document.querySelector("#popUp");

const todoNameValue = document.querySelector("#todoNameInput");
const dueDateValue = document.querySelector("#dueDateInput");
const projectValue = document.querySelector("#projectInput");
const importanceValue = document.querySelector("#importanceInput");

export let isEdit = false;

export function showPopUp() {
  overlay.classList.add("active");
  popUp.classList.add("active");
}

function showAddTodo() {
  popUpHeader.textContent = "Add Todo";
  isEdit = false;

  todoNameValue.value = "";
  dueDateValue.value = "";
  projectValue.value = "";
  importanceValue.value = "";

  showPopUp();
}

addButton.addEventListener("click", showAddTodo);

export function showEditTodo(e) {
  popUpHeader.textContent = "Edit Todo";
  isEdit = true;

  // Add Current Todo Code
  const todoElement = e.target.parentElement;
  const nameElement =
    e.target.previousSibling.previousElementSibling.previousElementSibling;
  const dateElement = e.target.previousSibling.previousElementSibling;
  const projectElement = e.target.previousSibling;

  const todoObject = todoList.find((ele) => ele.name == nameElement.innerText);
  // console.log(todoObject);

  todoNameValue.value = todoObject.name;
  dueDateValue.value = todoObject.date;
  projectValue.value = todoObject.project;
  importanceValue.value = todoObject.importance;

  showPopUp();
  return { todoElement, nameElement, dateElement, projectElement };
}

export function removePopUp() {
  overlay.classList.remove("active");
  popUp.classList.remove("active");
}

overlay.addEventListener("click", removePopUp);
