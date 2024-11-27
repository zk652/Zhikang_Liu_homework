const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = todoInput.value.trim();
  if (text !== "") {
    addTodoItem(text);
    todoInput.value = "";
  }
});

function addTodoItem(input) {
  const newItem = document.createElement("li");

  const text = document.createElement("span");
  text.textContent = input;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", () => {
    newItem.remove();
  });

  newItem.appendChild(text);
  newItem.appendChild(deleteBtn);

  todoList.appendChild(newItem);
}
