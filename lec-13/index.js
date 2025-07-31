const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", function () {
  const task = input.value.trim();

  if (task !== "") {
    addTaskToList(task);
    input.value = "";
  } else {
    alert("Please enter a task.");
  }
});

function addTaskToList(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = function () {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    todoList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

let todos=[
{
    id:"12345",
    title:"Newtodo"
},{
    id:123,
    title:"samiya"
}]
function showalltodo(todos){
    todos.forEach(todo=>{
        addTodo(todo);
    });
}
showalltodo(todos);