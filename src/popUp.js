export function addTodo() {
  const overlay = document.querySelector(".overlay");
  const addPopUp = document.querySelector(".addPopUp");
  overlay.classList.add("active");
  addPopUp.classList.add("active");
}

export function removeOverlay() {
  const overlay = document.querySelector(".overlay");
  const addPopUp = document.querySelector(".addPopUp");
  const editPopUp = document.querySelector(".editPopUp");
  overlay.classList.remove("active");
  addPopUp.classList.remove("active");
  editPopUp.classList.remove("active");
}

export function editPopUp() {
  const overlay = document.querySelector(".overlay");
  const editPopUp = document.querySelector(".editPopUp");
  overlay.classList.add("active");
  editPopUp.classList.add("active");
}
