//Helper functions
function $(input){
    return document.querySelector(input);
}


const input = $("input");
const addButton = $(".add-button");
const todos = $(".todos");
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];

function getTodoHTML(todo, index){
    let checked = todo.status === "completed"? "checked" : "";
    return `
    <li class="todo>
    <label for="${index}">
        <input id="${index}" onclick="updateStatus(this) type="checkbox" ${checked}>
        <span class="checked">${todo.name}</span>  
    </label>
    <button onclick="deleteTodo(this) class="delete-btn" data-index="${index}><i class="fa fa-times></i></button>
    </li>
    `
}