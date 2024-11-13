//Helper functions
function $(input) {
  return document.querySelector(input);
}

const input = $("input");
const addButton = $(".add-button");
const todos = $(".todos");
const pending = $(".pending")
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];


function getTodoHTML(todo, index) {
  let checked = todo.status === "completed" ? "checked" : "";
  return `
    <li class="todo">
        <input class="todo-checkbox" id="${index}" onclick="updateStatus(this)" type="checkbox" ${checked}>
        <p class="checked">${todo.name}</p>  
        <button onclick="deleteTodo(this)" class="delete-btn" data-index="${index}"><i class="fa fa-times"></i></button>
    </li>
    `;
}

function showTodos() {
  todosJson
    ? (pending.innerHTML = todosJson
        .map((todo, index) => getTodoHTML(todo, index))
        .join(""))
    : null;
}

function addTodo(todo) {
  input.value = "";
  todosJson.unshift({ name: todo, status: "pending" });
  localStorage.setItem("pending", JSON.stringify(todosJson));
  showTodos();
}

input.addEventListener("keyup", (e) => {
  let todo = input.value.trim();
  if (!todo || e.key != "Enter") {
    return;
  }
  addTodo(todo);
});

addButton.addEventListener("click", () => {
  let todo = input.value.trim();
  if (!todo) {
    return;
  }
  addTodo(todo);
});

