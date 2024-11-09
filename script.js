//Helper functions
function $(input){
    return document.querySelector(input);
}


const input = $("input");
const addButton = $(".add-button");
const todos = $(".todos");
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];

