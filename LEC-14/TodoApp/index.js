let input = document.getElementById("task");
let list = document.getElementById("list");
document.getElementById("addBtn").addEventListener("click", add);

function add() {
  if (!input.value.trim()) return;
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = input.value;
  span.onclick = () => span.style.textDecoration = "line-through";

  let del = document.createElement("button");
  del.textContent = "❌";
  del.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);
  input.value = "";
}
