const addButton = document.querySelector("#addTodo");
const overlay = document.querySelector(".overlay");
const editButton = document.querySelectorAll(".editTodo");
const popUp = document.querySelector(".popUp");

function showPopUp(isEdit) {
  const popUpHeader = document.querySelector("#popUpHeader");
  if (isEdit) {
    popUpHeader.textContent = "Edit Todo";
    console.log("Edit");
  } else {
    popUpHeader.textContent = "Add Todo";
    console.log("Add");
  }

  overlay.classList.add("active");
  popUp.classList.add("active");
}

addButton.addEventListener("click", showPopUp);

function removePopUp() {
  overlay.classList.remove("active");
  popUp.classList.remove("active");
}

overlay.addEventListener("click", removePopUp);

editButton.forEach((item) => {
  item.addEventListener("click", showPopUp);
});
