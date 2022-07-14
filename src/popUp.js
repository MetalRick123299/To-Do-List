const addButton = document.querySelector("#addTodo");
const overlay = document.querySelector(".overlay");
const editButton = document.querySelectorAll(".editTodo");
const popUp = document.querySelector("#popUp");
export let isEdit = false;

function showPopUp() {
  overlay.classList.add("active");
  popUp.classList.add("active");
}

function showAddTodo() {
  popUpHeader.textContent = "Add Todo";
  isEdit = false;
  showPopUp();
}

function showEditTodo() {
  popUpHeader.textContent = "Edit Todo";
  isEdit = true;

  // Add Current Todo Code

  showPopUp();
}

addButton.addEventListener("click", showAddTodo);

function removePopUp() {
  overlay.classList.remove("active");
  popUp.classList.remove("active");
}

overlay.addEventListener("click", removePopUp);

editButton.forEach((item) => {
  item.addEventListener("click", showEditTodo);
});
