import { isEdit, showEditTodo, removePopUp } from "./popUp.js";

const submit = document.querySelector("#submit");

class Todo {
  constructor(name, date, project, importance) {
    this.name = name;
    this.date = date;
    this.project = project;
    this.importance = importance;
    this.id = Math.random().toString(16).slice(2);
  }
}

export let todoList = [];

function handleTodo(e) {
  e.preventDefault();

  console.log(todoList);

  if (isEdit) {
    console.log("Edit");
    editTodo();
    renderTodos();
  } else {
    console.log("Add");
    const todoObj = getFormInfo();
    addTodo(todoObj);
    todoList.push(todoObj);
  }
  // removePopUp();
}

submit.addEventListener("click", handleTodo);

function addTodo(todoObj) {
  console.log(todoObj);
  if (todoObj === false) return;

  const content = document.querySelector(".content");
  const todo = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoName = document.createElement("h3");
  const dueDate = document.createElement("h3");
  const projectName = document.createElement("h3");
  const editImg = document.createElement("img");
  const removeImg = document.createElement("img");

  todo.classList.add("todo");
  todoName.classList.add("todoName");
  dueDate.classList.add("dueDate");
  projectName.classList.add("projectName");
  editImg.classList.add("editImg");
  removeImg.classList.add("removeImg");

  checkbox.setAttribute("type", "checkbox");
  editImg.setAttribute("src", "./images/edit-outline.svg");
  removeImg.setAttribute("src", "./images/close-thick.svg");

  todoName.textContent = todoObj.name;
  dueDate.textContent = todoObj.date;
  projectName.textContent = todoObj.project;

  todo.appendChild(checkbox);
  todo.appendChild(todoName);
  todo.appendChild(dueDate);
  todo.appendChild(projectName);

  todo.appendChild(editImg);
  todo.appendChild(removeImg);

  content.appendChild(todo);

  editImg.addEventListener("click", showEditTodo);
  removeImg.addEventListener("click", removeTodo);
}

function getFormInfo() {
  const todoNameValue = document.querySelector("#todoNameInput").value;
  const dueDateValue = document.querySelector("#dueDateInput").value;
  const projectValue = document.querySelector("#projectInput").value;
  const importanceValue = document.querySelector("#importanceInput").value;

  console.log(isEdit);
  if (!isEdit) {
    const isSameName = (element) => element.name === todoNameValue;
    if (todoList.some(isSameName)) return false;
  }

  const newObj = new Todo(
    todoNameValue,
    dueDateValue,
    projectValue,
    importanceValue
  );

  return newObj;
}

function editTodo(e) {
  const todoObj = getFormInfo();
  const todoIndex = todoList.findIndex((ele) => ele.name === todoObj.name);
  const currentTodoObj = todoList[todoIndex];

  // const name =
  //   e.target.previousSibling.previousElementSibling.previousElementSibling
  //     .innerText;

  console.log(todoIndex);

  currentTodoObj.name = todoObj.name;
  currentTodoObj.date = todoObj.date;
  currentTodoObj.project = todoObj.project;
  currentTodoObj.importance = todoObj.importance;
}

function removeTodo(e) {
  const todoElement = e.target.parentElement;
  const name =
    e.target.previousSibling.previousSibling.previousSibling
      .previousElementSibling.innerText;
  todoList = todoList.filter((ele) => ele.name !== name);
  console.log(todoList);
  todoElement.remove();
}

function renderTodos() {
  const content = document.querySelector(".content");
  content.innerHTML = "";

  todoList.forEach((todo) => addTodo(todo));
}
