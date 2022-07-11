const addButton = document.querySelector("#addTodo");
const overlay = document.querySelector(".overlay");
const editButton = document.querySelectorAll(".editTodo");

function addTodo() {
  const addPopUp = document.querySelector(".addPopUp");
  overlay.classList.add("active");
  addPopUp.classList.add("active");
}

addButton.onclick = addTodo;

function removeOverlay() {
  const addPopUp = document.querySelector(".addPopUp");
  const editPopUp = document.querySelector(".editPopUp");
  overlay.classList.remove("active");
  addPopUp.classList.remove("active");
  editPopUp.classList.remove("active");
}

overlay.onclick = removeOverlay;

function editPopUp() {
  const editPopUp = document.querySelector(".editPopUp");
  overlay.classList.add("active");
  editPopUp.classList.add("active");
}

editButton.forEach((item) => {
  item.onclick = editPopUp;
});
