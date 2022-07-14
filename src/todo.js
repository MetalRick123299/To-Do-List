import { isEdit } from "./popUp.js";

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

let todoList = [];

function handleTodo(e) {
  e.preventDefault();

  if (isEdit) {
    console.log("Edit");
  } else {
    console.log("Add");
    addTodo(getFormInfo());
  }
}

submit.addEventListener("click", handleTodo);

function addTodo(todoObj) {
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

  // todoName.textContent = "Todo Name";
  // dueDate.textContent = "Tomorrow 11:45AM";
  // projectName.textContent = "Project Name";

  todo.appendChild(checkbox);
  todo.appendChild(todoName);
  todo.appendChild(dueDate);
  todo.appendChild(projectName);

  todo.appendChild(editImg);
  todo.appendChild(removeImg);

  content.appendChild(todo);
}

function getFormInfo() {
  const todoNameValue = document.querySelector("#todoNameInput").value;
  const dueDateValue = document.querySelector("#dueDateInput").value;
  const projectValue = document.querySelector("#projectInput").value;
  const importanceValue = document.querySelector("#importanceInput").value;

  const newObj = new Todo(
    todoNameValue,
    dueDateValue,
    projectValue,
    importanceValue
  );
  todoList.push(newObj);

  console.log(newObj);
  console.log(newObj.name);

  return newObj;
}
