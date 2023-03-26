const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const todoText = todoInput.value.trim();

  if (todoText) {
    const li = document.createElement("li");
    const todoTextSpan = document.createElement("span");
    const deleteIcon = document.createElement("i");

    todoTextSpan.textContent = todoText;
    deleteIcon.className = "fa-solid fa-circle-xmark";

    li.appendChild(todoTextSpan);
    li.appendChild(deleteIcon);
    todoList.appendChild(li);

    deleteIcon.addEventListener("click", function () {
      li.remove();
    });

    li.addEventListener("click", function () {
      todoTextSpan.classList.toggle("complete");
    });

    todoInput.value = "";
  }
}

addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});
